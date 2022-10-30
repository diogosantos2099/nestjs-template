import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';

@ApiTags('Example API')
@Controller('example')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiOperation({
    summary: 'Asynchronously fetch an object.',
  })
  @ApiResponse({
    status: 200,
    description: 'Success',
    type: String,
  })
  @Get()
  async get(): Promise<string> {
    return await this.appService.get();
  }
}
