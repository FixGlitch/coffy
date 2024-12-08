import { z } from "zod";

export const ProductSchema = z.object({
  id: z.union([z.string().uuid(), z.array(z.string().uuid())]).optional(),
  code: z
    .string()
    .max(128, "El código no puede tener más de 128 caracteres")
    .min(1, "El código es obligatorio"),
  title: z.string().min(1, "El nombre del producto es obligatorio"),
  description: z.string().optional(),
  price: z.number().nonnegative("El precio debe ser un número positivo"),
  status: z.enum(["todo", "in-progress", "done", "canceled"]).default("todo"),
  label: z
    .enum(["bug", "feature", "enhancement", "documentation"])
    .default("bug"),
  priority: z.enum(["low", "medium", "high"]).default("low"),
  archived: z.boolean().default(false),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type Product = z.infer<typeof ProductSchema>;
