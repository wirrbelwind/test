// import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
// import { Observable } from 'rxjs';
// import { ACCESS_TOKEN_COOKIE_NAME, ACCESS_TOKEN_SECRET, REFRESH_TOKEN_COOKIE_NAME, REFRESH_TOKEN_SECRET } from './constants';
// import { JwtService } from '@nestjs/jwt';
// import { AuthTokenService } from './auth-token.service';
// import { AccountDto } from './dto';
// import { Context, GqlExecutionContext } from '@nestjs/graphql';

// @Injectable()
// export class AuthGuard implements CanActivate {
//   constructor(
//     private jwtService: JwtService,
//     private authTokenService: AuthTokenService,
//   ) { }

//   canActivate(
//     rawContext: ExecutionContext,
//   ): boolean | Promise<boolean> | Observable<boolean> {
//     const context = GqlExecutionContext.create(rawContext)
//     const req = context.getContext().req

    

//     const accessToken = req.cookies[ACCESS_TOKEN_COOKIE_NAME]
//     const refreshToken = req.cookies[REFRESH_TOKEN_COOKIE_NAME]

//     console.log(req.cookies.test)

//     if (!accessToken && !refreshToken) {
//       return false
//     }

//     let userDto = {}

//     userDto = this.authTokenService.validateToken(accessToken, ACCESS_TOKEN_SECRET)

//     if (!userDto) {
//       userDto = this.authTokenService.validateToken(refreshToken, REFRESH_TOKEN_SECRET)
//     }

//     if (!userDto) {
//       return false
//     }

//     delete userDto['exp']

//     return true;
//   }
// }
