import { Body, Controller, Param, Put } from '@nestjs/common';

import { ApiParam, ApiTags } from '@nestjs/swagger';
import { UpdateClientUseCase } from './UpdateClientUseCase';
import { UpdateClientParams } from 'src/domain/client/usecases/UpdateClient';

@ApiTags('Client')
@Controller('client')
export class UpdateClientController {
  constructor(private readonly updateClientUseCase: UpdateClientUseCase) {}

  @Put(':id')
  @ApiParam({ name: 'id', type: String })
  async handle(
    @Param('id') id: string,
    @Body() updateUserBody: UpdateClientParams,
  ) {
    return await this.updateClientUseCase.execute(id, updateUserBody);
  }
}
