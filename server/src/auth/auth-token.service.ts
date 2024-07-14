import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ACCESS_TOKEN_COOKIE_NAME, ACCESS_TOKEN_EXPIRATION, ACCESS_TOKEN_SECRET, REFRESH_TOKEN_COOKIE_NAME, REFRESH_TOKEN_EXPIRATION, REFRESH_TOKEN_SECRET } from './constants';
import { Response } from 'express';
import { AccountDto } from './dto';
import { instanceToPlain } from 'class-transformer';
import { ExtractJwt } from 'passport-jwt';

@Injectable()
export class AuthTokenService {
	constructor(
		private jwtService: JwtService,
	) { }

	generateAuthTokens(accountDto: AccountDto) {
		const payload = instanceToPlain(accountDto)

		const accessToken = this.jwtService.sign(payload, {
			expiresIn: ACCESS_TOKEN_EXPIRATION,
			secret: ACCESS_TOKEN_SECRET
		})

		const refreshToken = this.jwtService.sign(payload, {
			expiresIn: REFRESH_TOKEN_EXPIRATION,
			secret: REFRESH_TOKEN_SECRET
		})

		return {
			accessToken,
			refreshToken
		}
	}

	validateToken(token: string, secret: string) {
		try {
			return this.jwtService.verify(token, { secret })
		} catch (error) {
			return null
		}
	}

	updateAuthTokens(res: Response, accountDto: AccountDto) {
		const tokens = this.generateAuthTokens(accountDto)

		res.cookie(ACCESS_TOKEN_COOKIE_NAME, tokens.accessToken)
		res.cookie(REFRESH_TOKEN_COOKIE_NAME, tokens.refreshToken)
	}

	clearAuthTokens(res: Response) {
		res.clearCookie(ACCESS_TOKEN_COOKIE_NAME)
		res.clearCookie(REFRESH_TOKEN_COOKIE_NAME)
	}
}
