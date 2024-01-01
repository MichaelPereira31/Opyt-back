import { Module } from '@nestjs/common';
import { PrismaModule } from './infra/prisma/prisma.module';
import { ClientModule } from './infra/modules/client.module';

@Module({
  imports: [PrismaModule, ClientModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
