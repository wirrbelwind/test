import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateArtistProfileInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
