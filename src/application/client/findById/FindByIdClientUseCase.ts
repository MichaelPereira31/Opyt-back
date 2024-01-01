import { Injectable, NotFoundException } from '@nestjs/common';
import { Client } from 'src/domain/client/models/Client';
import { FindByIdClient } from 'src/domain/client/usecases/FindByIdClient';
import { ClientRepository } from 'src/infra/prisma/repositories/UsersRepository';

@Injectable()
export class FindByIdClientUseCase implements FindByIdClient {
  constructor(private readonly clientRepository: ClientRepository) {}

  async execute(id: string): Promise<Client> {
    const client = await this.clientRepository.findById(id);

    if (!client) throw new NotFoundException('client not found.');

    return client;
  }
}
