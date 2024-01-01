import { Client } from '../models/Client';

export interface FindByIdClient {
  execute: (id: string) => Promise<Client>;
}
