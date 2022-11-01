import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';
import { ExampleEntity } from './entities/example.entity';

@ApiTags('Example API')
@Controller('example')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiOperation({
    summary: 'Asynchronously fetch an object by its identifier.',
  })
  @ApiResponse({
    status: 200,
    description: 'Success',
    type: ExampleEntity,
  })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  @ApiResponse({ status: 404, description: 'Not Found' })
  @ApiResponse({ status: 500, description: 'Internal Server Error' })
  @Get(':id')
  async get(
    @Param('id', new ParseIntPipe()) id: number,
  ): Promise<ExampleEntity> {
    return await this.appService.get(id);
  }
}
