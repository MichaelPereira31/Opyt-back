import { z } from 'zod';

export const createClientSchema = z
  .object({
    name: z.string({ required_error: 'Nome  é obrigatório' }),
    email: z
      .string({ required_error: 'E-mail é obrigatório' })
      .email('Endereço de e-mail inválido'),
    phone: z.string({ required_error: 'Telefone  é obrigatório' }).min(11),
    city: z.string({ required_error: 'Cidade  é obrigatório' }),
  })
  .required();
