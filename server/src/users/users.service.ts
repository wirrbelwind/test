// import { Injectable } from '@nestjs/common';
// import { AccountService } from 'src/account/account.service';
// import { DbService } from 'src/db/db.service';

// @Injectable()
// export class UsersService {
// 	constructor(
// 		private db: DbService,
// 		private accountSerivce: AccountService,
// 		// private blockListService: BlockListService,
// 	) { }

// 	findByEmail(email: string) {
// 		// return this.db.user.findFirst({ where: { email } })
// 		return null
// 	}

// 	async create(email: string, hash: string, salt: string) {
// 		return null
// 		// const user = await this.db.user.create({ data: { email, hash, salt } })
// 		// await this.accountSerivce.create(user.id)
// 		// await this.blockListService.create(user.id)
// 		// return user
// 	}
// }
