import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { DocumentBuilder, OpenAPIObject, SwaggerModule } from '@nestjs/swagger';
import { config } from './config';
import { AppModule } from './app.module';

export class Service {
  constructor(
    public readonly app: NestFastifyApplication,
    public readonly document: OpenAPIObject,
  ) {
    SwaggerModule.setup('swagger', app, document);
  }

  /**
   * Configures and creates the service.
   * @returns The created service
   */
  public static async create(): Promise<Service> {
    const app = await NestFactory.create<NestFastifyApplication>(
      AppModule,
      new FastifyAdapter(),
    );

    const options = new DocumentBuilder()
      .setTitle('nestjs-template')
      .setDescription('NestJS template description')
      .setVersion('1.0')
      .setContact('Diogo', '', 'diogo.miguel.c.santos@gmail.com')
      .addTag('example')
      .addBearerAuth()
      .build();
    const document = SwaggerModule.createDocument(app, options);

    return new Service(app, document);
  }

  /**
   * Start the service
   */
  public async start(): Promise<void> {
    await this.app.listen(config.port, '0.0.0.0');
  }
}
