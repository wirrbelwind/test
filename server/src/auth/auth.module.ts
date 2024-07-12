import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { AuthTokenService } from './auth-token.service';

@Module({
  providers: [AuthService, AuthTokenService],
  imports: [
    JwtModule.register({
      global: true,
    })
  ],
  controllers: [AuthController]
})
export class AuthModule { }
