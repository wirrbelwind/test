import { Module } from '@nestjs/common';
import { DbModule } from './db/db.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { AuthModule } from './auth/auth.module';
import { join } from 'path';

@Module({
  imports: [
    DbModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'graphql/schema.gql'),
      sortSchema: true,
    }),
    AuthModule,
  ],
  controllers: [
  ],
  providers: [],
})
export class AppModule { }
