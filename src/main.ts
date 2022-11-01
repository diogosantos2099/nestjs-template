import { Service } from './service';

async function bootstrap() {
  const service = await Service.create();
  await service.start();
}
bootstrap();
