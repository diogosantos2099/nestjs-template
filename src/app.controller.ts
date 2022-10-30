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
  @Get(':id')
  async get(@Param('id', new ParseIntPipe()) id: number
  ): Promise<ExampleEntity> {
    return await this.appService.get(id);
  }
}
