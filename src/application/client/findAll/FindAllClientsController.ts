import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { FindAllClientsUseCase } from './FindAllClientsUseCase';

@ApiTags('Client')
@Controller('client')
export class FindAllClientsController {
  constructor(private readonly findAllClientsUseCase: FindAllClientsUseCase) {}

  @Get()
  async handle() {
    return await this.findAllClientsUseCase.execute();
  }
}
