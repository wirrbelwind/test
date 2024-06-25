import { Injectable } from '@nestjs/common';
import { AccountService } from 'src/account/account.service';
import { DbService } from 'src/db/db.service';

@Injectable()
export class UsersService {
	constructor(
		private db: DbService,
		private accountSerivce: AccountService,
	) { }

	async create(email: string, hash: string, salt: string) {
		const user = await this.db.account.create({ data: { email, passwordHash: hash, salt } })
		return user
	}
}
