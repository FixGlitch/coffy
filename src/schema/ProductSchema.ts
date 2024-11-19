import { z } from 'zod';

export const ProductSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(1, 'El nombre del producto es obligatorio'),
  description: z.string().optional(),
  price: z.number().nonnegative('El precio debe ser un número positivo'),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type Product = z.infer<typeof ProductSchema>;
