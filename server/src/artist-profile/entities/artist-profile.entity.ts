import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class ArtistProfile {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
