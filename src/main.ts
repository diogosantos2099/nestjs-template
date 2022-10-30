import { NestFactory } from '@nestjs/core';
import { config } from './config';
import { AppModule } from './app.module';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter()
  );

  const options = new DocumentBuilder()
    .setTitle('nestjs-template')
    .setDescription('NestJS template description')
    .setVersion('1.0')
    .addTag('example')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('swagger', app, document);

  await app.listen(config.port, '0.0.0.0');
}
bootstrap();
