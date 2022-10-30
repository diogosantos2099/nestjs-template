import { Injectable } from '@nestjs/common';
import { ExampleEntity } from './entities/example.entity';

@Injectable()
export class AppService {
  get(id: number): Promise<ExampleEntity> {
    const exampleEntity: ExampleEntity = { id, value: 'some value' };
    return Promise.resolve(exampleEntity);
  }
}
