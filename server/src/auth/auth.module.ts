import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { AuthTokenService } from './auth-token.service';
import { AuthResolver } from './auth.resolver';
import { DbService } from 'src/db/db.service';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';

@Module({
  providers: [AuthService, AuthTokenService, AuthResolver, DbService, JwtStrategy],
  imports: [
    JwtModule.register({
      global: true,
    }),
    PassportModule.register({ defaultStrategy: 'jwt' }),
  ],
  controllers: [AuthController]
})
export class AuthModule { }
