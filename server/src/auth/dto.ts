import { IsEmail, IsUUID, MaxLength, MinLength } from "class-validator";
import { ObjectType, Field, InputType } from '@nestjs/graphql';
import { PASSWORD_MAX_LENGTH, PASSWORD_MIN_LENGTH } from "./constants";
import { Exclude } from 'class-transformer';

@InputType()
export class CreateAccountInput {
	@Field()
	@IsEmail({}, {
		message: validationArguments => {
			return 'not valid email'
		}
	})
	email: string;

	@Field()
	@MinLength(PASSWORD_MIN_LENGTH, {
		message: (validationArguments) => {
			// TODO: localize
			return 'too small'
		},
	})
	@MaxLength(PASSWORD_MAX_LENGTH, {
		message: (validationArguments) => {
			// TODO: localize
			return 'too big'
		},
	})
	password: string
}

@ObjectType()
export class AccountDto {
	constructor(partial: Partial<AccountDto>) {
    Object.assign(this, partial);
  }

	@IsUUID('4')
	@Field()
	id: string

	@Field()
	@IsEmail()
	email: string;

	@Field()
	@Exclude()
	passwordHash: string

	@Field()
	@Exclude()
	salt: string
}