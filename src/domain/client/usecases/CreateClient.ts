import { ApiProperty } from '@nestjs/swagger';
import { Client } from '../models/Client';

export class CreateClientParams implements Client {
  @ApiProperty({ type: String })
  name: string;

  @ApiProperty({ type: String })
  email: string;

  @ApiProperty({ type: String })
  phone: string;

  @ApiProperty({ type: String })
  city: string;
}

export interface CreateClient {
  execute: (client: CreateClientParams) => Promise<Client>;
}
