import { ConflictException, Injectable } from '@nestjs/common';
import { AccountDto, CreateAccountInput } from './dto';
import { DbService } from 'src/db/db.service';
import { genSalt, hash } from 'bcrypt';
import { SALT_MINOR_VERSION, SALT_ROUNDS } from './constants';
import { AuthTokenService } from './auth-token.service';
import { Response } from 'express';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class AuthService {
	constructor(
		private db: DbService,
		private authTokenService: AuthTokenService,
	) { }

	async createAccount(
		createAccountInput: CreateAccountInput,
		res: Response,
	) {
		const {
			email,
			password
		} = createAccountInput

		const isEmailAlreadyTaken = Boolean(await this.db.account.findFirst({
			where: { email },
			select: { email: true },
		}))

		if (isEmailAlreadyTaken) {
			// TODO: standardize exception body and localize it with exception filters
			throw new ConflictException()
		}

		const salt = await genSalt(SALT_ROUNDS, SALT_MINOR_VERSION)
		const passwordHash = await hash(password, salt)

		const user = await this.db.account.create({
			data: {
				email,
				passwordHash,
				salt,
			}
		})

		const userDto = plainToInstance(AccountDto, user)
		this.authTokenService.updateAuthTokens(res, userDto)
		
		return user
	}
}
