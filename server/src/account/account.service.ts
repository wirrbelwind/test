import { Injectable } from '@nestjs/common';
import { PatchAccountDto } from './dto';
import { DbService } from 'src/db/db.service';

@Injectable()
export class AccountService {
	constructor(
		private db: DbService
	) { }

	async create (userId: number) {
		return this.db.account.create({
			data: {
				email: 'mock',
				passwordHash: 'mock',
				salt: 'mock',
			}
		})
	}

	async getAccount(userId: number) {
		return this.db.account.findFirstOrThrow({ where: { id: userId } })
	}

}
