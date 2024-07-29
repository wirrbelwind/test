import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { DbService } from 'src/db/db.service';

@Injectable()
export class UserGuard implements CanActivate {
  constructor(
    private db: DbService,
  ) { }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const ctx = GqlExecutionContext.create(context);
    const req = ctx.getContext().req;

    const mockedUser = await this.db.account.findFirst({
      where: {
        email: 'komendantov2580@gmail.com'
      }
    })
    req.user = mockedUser;

    return true;
  }
}
