import { Test } from "@nestjs/testing";
import { AppService } from "./app.service";

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
          const result = await appService.get();
    
          expect(result).toEqual('Hello World!');
        });
      });
});