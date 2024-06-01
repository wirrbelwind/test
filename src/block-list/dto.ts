import { ApiProperty } from "@nestjs/swagger";
import { $Enums } from "@prisma/client";
import { IsIn, IsOptional } from "class-validator";

export class BlockItemDto {
	@ApiProperty()
	id: number

	@ApiProperty({
		enum: [$Enums.BlockItemType.KeyWord, $Enums.BlockItemType.Website]
	})
	blockListId: number

	@ApiProperty()
	data: string

	@ApiProperty()
	createdAt: Date

	@ApiProperty()
	type: $Enums.BlockItemType
}

export class BlockListDto {
	@ApiProperty()
	id: number

	@ApiProperty()
	ownerId: number

	@ApiProperty({
		type: [BlockItemDto]
	})
	items: BlockItemDto[]
}

export class BlockListQueryDto {
	@ApiProperty({nullable: true, required: false})
	@IsOptional()
	q?: string
}

export class AddBlockItemDto {
	@ApiProperty({
		enum: [$Enums.BlockItemType.KeyWord, $Enums.BlockItemType.Website]
	})
	@IsIn([$Enums.BlockItemType.KeyWord, $Enums.BlockItemType.Website])
	data: string

	@ApiProperty()
	type: $Enums.BlockItemType
}