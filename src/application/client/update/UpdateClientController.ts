import { Body, Controller, Param, Put, UsePipes } from '@nestjs/common';

import { ApiParam, ApiTags } from '@nestjs/swagger';
import { UpdateClientUseCase } from './UpdateClientUseCase';
import { UpdateClientParams } from 'src/domain/client/usecases/UpdateClient';
import { UpdateClientSchema } from './validation';
import { ZodValidationAdapter } from 'src/infra/adpaters/ZodValidationAdapter';

@ApiTags('Client')
@Controller('client')
export class UpdateClientController {
  constructor(private readonly updateClientUseCase: UpdateClientUseCase) {}

  @Put(':id')
  @ApiParam({ name: 'id', type: String })
  @UsePipes(new ZodValidationAdapter(UpdateClientSchema))
  async handle(
    @Param('id') id: string,
    @Body() updateUserBody: UpdateClientParams,
  ) {
    return await this.updateClientUseCase.execute(id, updateUserBody);
  }
}
