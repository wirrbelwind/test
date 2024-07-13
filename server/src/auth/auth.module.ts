import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { AuthTokenService } from './auth-token.service';
import { AuthResolver } from './auth.resolver';

@Module({
  providers: [AuthService, AuthTokenService, AuthResolver],
  imports: [
    JwtModule.register({
      global: true,
    })
  ],
  controllers: [AuthController]
})
export class AuthModule { }
