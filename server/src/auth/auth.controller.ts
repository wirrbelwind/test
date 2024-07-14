import { Controller, Get, Res, UseGuards } from '@nestjs/common';
import { AuthTokenService } from './auth-token.service';
import { JwtService } from '@nestjs/jwt';
import { ACCESS_TOKEN_COOKIE_NAME, REFRESH_TOKEN_COOKIE_NAME } from './constants';
import { Response } from 'express';
import { AuthGuard } from './auth.guard';

@Controller('auth')
export class AuthController {
	constructor(
		private authTokenService: AuthTokenService,
		private jwtService: JwtService,
	) { }

	// @Get()
	// testTokens(@Res({ passthrough: true }) res: Response) {
	// 	const payload = { id: '12345', name: 'Wirbelwind' }
	// 	const tokens = this.authTokenService.generateAuthTokens(payload)

	// 	res.cookie(ACCESS_TOKEN_COOKIE_NAME, tokens.accessToken)
	// 	res.cookie(REFRESH_TOKEN_COOKIE_NAME, tokens.refreshToken)
	// }

	// @Get('guard')
	// @UseGuards(AuthGuard)
	// testGuards() {
	// 	return 'Success'
	// }
}
