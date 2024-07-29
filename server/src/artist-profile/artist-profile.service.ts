import { Injectable } from '@nestjs/common';
import { CreateArtistProfileInput } from './dto/create-artist-profile.input';
import { UpdateArtistProfileInput } from './dto/update-artist-profile.input';

@Injectable()
export class ArtistProfileService {
  create(createArtistProfileInput: CreateArtistProfileInput) {
    return 'This action adds a new artistProfile';
  }

  findAll() {
    return `This action returns all artistProfile`;
  }

  findOne(id: number) {
    return `This action returns a #${id} artistProfile`;
  }

  update(id: number, updateArtistProfileInput: UpdateArtistProfileInput) {
    return `This action updates a #${id} artistProfile`;
  }

  remove(id: number) {
    return `This action removes a #${id} artistProfile`;
  }
}
