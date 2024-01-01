export interface DeleteClient {
  execute: (id: string) => Promise<void>;
}
