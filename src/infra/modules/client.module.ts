import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { CreateClientController } from 'src/application/client/create/CreateClientController';
import { CreateClientUseCase } from 'src/application/client/create/CreateClientUseCase';
import { DeleteClientController } from 'src/application/client/delete/DeleteClientController';
import { DeleteClientUseCase } from 'src/application/client/delete/DeleteClientUseCase';
import { FindAllClientsController } from 'src/application/client/findAll/FindAllClientsController';
import { FindAllClientsUseCase } from 'src/application/client/findAll/FindAllClientsUseCase';
import { FindByIdClientController } from 'src/application/client/findById/FindByIdClientController';
import { FindByIdClientUseCase } from 'src/application/client/findById/FindByIdClientUseCase';
import { UpdateClientController } from 'src/application/client/update/UpdateClientController';
import { UpdateClientUseCase } from 'src/application/client/update/UpdateClientUseCase';
import { ClientRepository } from '../prisma/repositories/UsersRepository';

@Module({
  imports: [PrismaModule],
  controllers: [
    FindAllClientsController,
    FindByIdClientController,
    CreateClientController,
    UpdateClientController,
    DeleteClientController,
  ],
  providers: [
    ClientRepository,
    CreateClientUseCase,
    UpdateClientUseCase,
    DeleteClientUseCase,
    FindByIdClientUseCase,
    FindAllClientsUseCase,
  ],
})
export class ClientModule {}
