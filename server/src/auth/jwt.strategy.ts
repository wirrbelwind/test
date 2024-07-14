import {
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Request } from 'express';
import { ACCESS_TOKEN_COOKIE_NAME, ACCESS_TOKEN_SECRET } from '../constants';
import { AccountDto } from '../dto';
import { DbService } from 'src/db/db.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly db: DbService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        (req: Request) => req.cookies[ACCESS_TOKEN_COOKIE_NAME]
      ]),
      secretOrKey: ACCESS_TOKEN_SECRET,
      ignoreExpiration: false,
    });
  }

  async validate(payload: AccountDto) {
    const {
      email,
      id,
    } = payload

    const user = await this.db.account.findFirst({
      where: {
        email,
        id
      }
    })

    if (!user) {
      // TODO: localize
      throw new UnauthorizedException(
        'Could not log-in with the provided credentials',
      );
    }

    return user;
  }
}
