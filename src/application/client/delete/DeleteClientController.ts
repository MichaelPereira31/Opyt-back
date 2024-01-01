import { Controller, Delete, Param } from '@nestjs/common';
import { ApiTags, ApiParam } from '@nestjs/swagger';
import { DeleteClientUseCase } from './DeleteClientUseCase';

@ApiTags('Client')
@Controller('client')
export class DeleteClientController {
  constructor(private readonly deleteClientUseCase: DeleteClientUseCase) {}

  @ApiParam({ name: 'id', type: String })
  @Delete(':id')
  async handle(@Param('id') id: string) {
    return await this.deleteClientUseCase.execute(id);
  }
}
