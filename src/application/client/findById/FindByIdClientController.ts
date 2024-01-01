import { Controller, Get, Param } from '@nestjs/common';
import { ApiParam, ApiTags } from '@nestjs/swagger';
import { FindByIdClientUseCase } from './FindByIdClientUseCase';

@ApiTags('Client')
@Controller('client')
export class FindByIdClientController {
  constructor(private readonly findByIdClientUseCase: FindByIdClientUseCase) {}

  @ApiParam({ name: 'id', type: String })
  @Get(':id')
  async handle(@Param('id') id: string) {
    return await this.findByIdClientUseCase.execute(id);
  }
}
