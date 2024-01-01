import { Injectable, NotFoundException } from '@nestjs/common';

import { ClientRepository } from 'src/infra/prisma/repositories/ClientRepository';
import { Client } from 'src/domain/client/models/Client';
import {
  UpdateClient,
  UpdateClientParams,
} from 'src/domain/client/usecases/UpdateClient';

@Injectable()
export class UpdateClientUseCase implements UpdateClient {
  constructor(private readonly clientRepository: ClientRepository) { }

  async execute(
    id: string,
    Client: Partial<UpdateClientParams>,
  ): Promise<Client> {
    const ClientInstance = await this.clientRepository.findById(id);

    if (!ClientInstance) {
      throw new NotFoundException('Client not found');
    }

    return await this.clientRepository.update(id, Client);
  }
}
