import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as cookieParser from 'cookie-parser'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const swaggerConfig = new DocumentBuilder().setTitle('Swagger title').build()
  const swaggerDocument = SwaggerModule.createDocument(app, swaggerConfig)
  SwaggerModule.setup('api', app, swaggerDocument)

  app.use(cookieParser())

  await app.listen(3000);
}
bootstrap();
