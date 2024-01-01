import { Controller, Post, Body, UsePipes } from '@nestjs/common';
import { ApiTags, ApiBody } from '@nestjs/swagger';
import { CreateClientUseCase } from './CreateClientUseCase';
import { CreateClientParams } from 'src/domain/client/usecases/CreateClient';
import { createClientSchema } from './validation';
import { ZodValidationAdapter } from 'src/infra/adpaters/ZodValidationAdapter';

@ApiTags('Client')
@Controller('client')
export class CreateClientController {
  constructor(private readonly createClientUseCase: CreateClientUseCase) {}

  @Post()
  @UsePipes(new ZodValidationAdapter(createClientSchema))
  @ApiBody({ type: CreateClientParams })
  async handle(@Body() createClientBody: CreateClientParams) {
    return await this.createClientUseCase.execute(createClientBody);
  }
}
