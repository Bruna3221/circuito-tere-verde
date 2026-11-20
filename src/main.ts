import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalPipes(
    new ValidationPipe(),
  );

  const config = new DocumentBuilder()
  .setTitle('Circuito Terê Verde')
  .setDescription(
    'API para gerenciamento de eventos turísticos de Teresópolis',
  )
  .setVersion('1.0')
  .addTag('eventos')
  .addTag('auth')
  .build();


  const document = SwaggerModule.createDocument(
    app,
    config,
  );

  SwaggerModule.setup(
    'api',
    app,
    document,
  );

  await app.listen(
    process.env.PORT ?? 3000,
  );
}

void bootstrap();