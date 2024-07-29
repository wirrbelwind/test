import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ArtistProfileService } from './artist-profile.service';
import { ArtistProfile } from './entities/artist-profile.entity';
import { CreateArtistProfileInput } from './dto/create-artist-profile.input';
import { UpdateArtistProfileInput } from './dto/update-artist-profile.input';

@Resolver(() => ArtistProfile)
export class ArtistProfileResolver {
  constructor(private readonly artistProfileService: ArtistProfileService) {}

  @Mutation(() => ArtistProfile)
  createArtistProfile(@Args('createArtistProfileInput') createArtistProfileInput: CreateArtistProfileInput) {
    return this.artistProfileService.create(createArtistProfileInput);
  }
}
