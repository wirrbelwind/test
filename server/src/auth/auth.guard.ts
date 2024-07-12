import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { ACCESS_TOKEN_COOKIE_NAME, ACCESS_TOKEN_SECRET, REFRESH_TOKEN_COOKIE_NAME, REFRESH_TOKEN_SECRET } from './constants';
import { JwtService } from '@nestjs/jwt';
import { AuthTokenService } from './auth-token.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private jwtService: JwtService,
    private authTokenService: AuthTokenService,
  ) { }

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const req = context.switchToHttp().getRequest()
    const res = context.switchToHttp().getResponse()

    const accessToken = req.cookies[ACCESS_TOKEN_COOKIE_NAME]
    const refreshToken = req.cookies[REFRESH_TOKEN_COOKIE_NAME]

    if (!accessToken && !refreshToken) {
      return false
    }

    let tokenData = {}

    tokenData = this.authTokenService.validateToken(accessToken, ACCESS_TOKEN_SECRET)

    if (!tokenData) {
      tokenData = this.authTokenService.validateToken(refreshToken, REFRESH_TOKEN_SECRET)
    }

    if (!tokenData) {
      return false
    }

    delete tokenData['exp']
    this.authTokenService.updateAuthTokens(res, tokenData)

    return true;
  }
}
