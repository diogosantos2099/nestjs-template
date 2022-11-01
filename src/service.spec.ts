import { NestFactory } from '@nestjs/core';
import { INestApplication } from '@nestjs/common';
import { Service } from './service';
import { SwaggerModule } from '@nestjs/swagger';
import { config } from './config';

const MockNestApplication = jest.fn<Partial<INestApplication>, []>(() => ({
  listen: jest.fn(),
}));

describe('Service', () => {
  let nestAppMock: INestApplication;

  beforeEach(async () => {
    nestAppMock = new MockNestApplication() as INestApplication;
    NestFactory.create = jest.fn().mockResolvedValue(nestAppMock);
    SwaggerModule.createDocument = jest.fn();
    SwaggerModule.setup = jest.fn();
  });

  describe('create', () => {
    it('returns a new service object', async () => {
      const service = await Service.create();

      expect(service.app).toBe(nestAppMock);
    });
  });

  describe('start', () => {
    it('calls listen on the nest app (using configured port)', async () => {
      const service = await Service.create();
      await service.start();

      expect(nestAppMock.listen).toBeCalledWith(config.port, '0.0.0.0');
    });
  });
});
