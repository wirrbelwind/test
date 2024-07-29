import { Args, Context, GraphQLExecutionContext, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AccountDto, CreateAccountInput } from './dto';
import { AuthService } from './auth.service';
import { Res, UseGuards } from '@nestjs/common';
import { Request, Response } from 'express';
import { AuthGuard } from './user.guard';
import { AuthTokenService } from './auth-token.service';

@Resolver()
export class AuthResolver {
  constructor(
    private authService: AuthService,
    private authTokenService: AuthTokenService,
  ) { }

  @Query(() => [AccountDto])

  users(): AccountDto {
    return {
      email: '123',
      id: '123',
      passwordHash: '123',
      salt: '123'
    }
  }

  @Mutation(() => AccountDto)
  createAccount(
    @Args('createAccountInput') createAccountInput: CreateAccountInput,
    @Res() res: Response,
  ) {
    // console.log(res.cookie)

    // res.cookie('test', Date.now())
    return this.authService.createAccount(createAccountInput, res)
  }
}
