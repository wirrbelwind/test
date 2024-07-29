import { Module } from '@nestjs/common';
import { DbModule } from './db/db.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { join } from 'path';
import { AuthModule } from './auth/auth.module';
import { UserGuard } from './auth/user.guard';
import { ArtistProfileModule } from './artist-profile/artist-profile.module';

@Module({
  imports: [
    DbModule,
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'graphql/schema.gql'),
      sortSchema: true,
      playground: true,
      cors: {
        credentials: true,
        origin: true
      },
      context: ({ req, res }) => ({ req, res }),
    }),
    AuthModule,
    ArtistProfileModule,
  ],
  controllers: [
  ],
  providers: [UserGuard],
})
export class AppModule {
}
