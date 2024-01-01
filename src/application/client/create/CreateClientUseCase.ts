import { ConflictException, Injectable } from '@nestjs/common';
import { Client } from 'src/domain/client/models/Client';
import {
  CreateClient,
  CreateClientParams,
} from 'src/domain/client/usecases/CreateClient';
import { ClientRepository } from 'src/infra/prisma/repositories/UsersRepository';

@Injectable()
export class CreateClientUseCase implements CreateClient {
  constructor(private readonly clientService: ClientRepository) {}
  async execute({
    email,
    city,
    name,
    phone,
  }: CreateClientParams): Promise<Client> {
    const ClientAlreadyExists = await this.clientService.findByEmail(email);

    if (ClientAlreadyExists) {
      throw new ConflictException('Client already exists');
    }

    const client = await this.clientService.create({
      email,
      phone,
      city,
      name,
    });

    return client;
  }
}
