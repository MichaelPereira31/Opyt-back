import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { BaseRepository } from '.';
import { Prisma } from '@prisma/client';
import { DefaultArgs } from '@prisma/client/runtime/library';
import { Client } from 'src/domain/client/models/Client';

@Injectable()
export class ClientRepository extends BaseRepository<
  Client,
  Prisma.ClientDelegate<DefaultArgs>
> {
  constructor(private readonly prisma: PrismaService) {
    super(prisma.client);
  }

  async findByEmail(id: string): Promise<Client> {
    return await this.prisma.client.findUnique({
      where: { id },
    });
  }
}
