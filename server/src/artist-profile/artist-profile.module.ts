import { Module } from '@nestjs/common';
import { ArtistProfileService } from './artist-profile.service';
import { ArtistProfileResolver } from './artist-profile.resolver';

@Module({
  providers: [ArtistProfileResolver, ArtistProfileService],
})
export class ArtistProfileModule {}
