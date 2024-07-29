import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { AuthTokenService } from './auth-token.service';
import { AuthResolver } from './auth.resolver';
import { DbService } from 'src/db/db.service';
import { PassportModule } from '@nestjs/passport';

@Module({
  providers: [
    DbService,
  ],
  imports: [],
  controllers: []
})
export class AuthModule { }
