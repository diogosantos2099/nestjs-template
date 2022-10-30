import { Test } from '@nestjs/testing';
import { AppService } from './app.service';
import { ExampleEntity } from './entities/example.entity';

describe('AppService', () => {
  let appService: AppService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [AppService],
    }).compile();

    appService = module.get<AppService>(AppService);
  });

  describe('get', () => {
    it('should resolve successfully', async () => {
      const id = 1;
      const expected: ExampleEntity = { id, value: 'some value' };
      const result = await appService.get(id);

      expect(result).toEqual(expected);
    });
  });
});
