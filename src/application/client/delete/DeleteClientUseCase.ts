import { Injectable, NotFoundException } from '@nestjs/common';
import { DeleteClient } from 'src/domain/client/usecases/DeleteByIdClient';
import { ClientRepository } from 'src/infra/prisma/repositories/ClientRepository';

@Injectable()
export class DeleteClientUseCase implements DeleteClient {
  constructor(private readonly clientRepository: ClientRepository) { }

  async execute(id: string): Promise<void> {
    const instance = this.clientRepository.findById(id);

    if (!instance) throw new NotFoundException('Clients does not exist.');

    return await this.clientRepository.delete(id);
  }
}
