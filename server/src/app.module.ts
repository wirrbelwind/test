import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { DbModule } from './db/db.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { AuthModule } from './auth/auth.module';
import { join } from 'path';
import { AuthResolver } from './auth/auth.resolver';

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
  ],
  controllers: [
  ],
  providers: [],
})
export class AppModule {
  
 }
