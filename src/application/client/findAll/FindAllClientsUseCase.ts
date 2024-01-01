import { Injectable } from '@nestjs/common';
import { Client } from 'src/domain/client/models/Client';
import { FindAllClients } from 'src/domain/client/usecases/FindAllClients';
import { ClientRepository } from 'src/infra/prisma/repositories/ClientRepository';

@Injectable()
export class FindAllClientsUseCase implements FindAllClients {
  constructor(private readonly clientRepository: ClientRepository) { }

  async execute(): Promise<Client[]> {
    return await this.clientRepository.findAll();
  }
}
