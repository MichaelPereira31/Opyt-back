import { Client } from '../models/Client';

export interface FindAllClients {
  execute: () => Promise<Client[]>;
}
