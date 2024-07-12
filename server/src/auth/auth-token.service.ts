import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ACCESS_TOKEN_COOKIE_NAME, ACCESS_TOKEN_EXPIRATION, ACCESS_TOKEN_SECRET, REFRESH_TOKEN_COOKIE_NAME, REFRESH_TOKEN_EXPIRATION, REFRESH_TOKEN_SECRET } from './constants';
import { Response } from 'express';

@Injectable()
export class AuthTokenService {
	constructor(
		private jwtService: JwtService,
	) { }

	generateAuthTokens(payload: object) {
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

	updateAuthTokens(res: Response, payload: object) {
		const tokens = this.generateAuthTokens(payload)

		res.cookie(ACCESS_TOKEN_COOKIE_NAME, tokens.accessToken)
		res.cookie(REFRESH_TOKEN_COOKIE_NAME, tokens.refreshToken)
	}
}
