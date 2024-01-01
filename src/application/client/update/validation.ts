import { z } from 'zod';

export const UpdateClientSchema = z
  .object({
    name: z.string(),
    email: z.string().email('Endereço de e-mail inválido'),
    phone: z.string().min(11),
    city: z.string(),
  })
  .partial();
