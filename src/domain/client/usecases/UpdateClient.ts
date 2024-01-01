import { ApiPropertyOptional } from '@nestjs/swagger';
import { Client } from '../models/Client';

export class UpdateClientParams implements Client {
  @ApiPropertyOptional({ type: String })
  name: string;

  @ApiPropertyOptional({ type: String })
  email: string;

  @ApiPropertyOptional({ type: String })
  phone: string;

  @ApiPropertyOptional({ type: String })
  city: string;
}

export interface UpdateClient {
  execute: (id: string, client: UpdateClientParams) => Promise<Client>;
}
