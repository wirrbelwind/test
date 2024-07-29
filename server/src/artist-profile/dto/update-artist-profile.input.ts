import { CreateArtistProfileInput } from './create-artist-profile.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateArtistProfileInput extends PartialType(CreateArtistProfileInput) {
  @Field(() => Int)
  id: number;
}
