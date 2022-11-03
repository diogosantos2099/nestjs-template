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
  ) {}

  /**
   * Configures and creates the service.
   * Adds swagger.
   * @returns The service
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
    SwaggerModule.setup('swagger', app, document);

    return new Service(app, document);
  }

  /**
   * Start the service.
   * Specify '0.0.0.0' to listen on all available IPv4 interfaces
   */
  public async start(): Promise<void> {
    await this.app.listen(config.port, '0.0.0.0');
  }
}
