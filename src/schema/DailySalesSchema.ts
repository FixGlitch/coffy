import { z } from "zod";

export const DailySalesSchema = z.object({
  id: z.union([z.string().uuid(), z.array(z.string().uuid())]).optional(),
  code: z
    .string()
    .max(128, "The sales code cannot exceed 128 characters")
    .min(1, "The sales code is required"),
  date: z.string().min(1, "The sales date is required"),
  description: z.string().optional(),
  sale: z.number().nonnegative("Total sales must be a positive number"),
  status: z.enum(["pending", "completed", "canceled"]).default("pending"),
  label: z
    .enum(["normal", "promotion", "discount", "refund"])
    .default("normal"),
  priority: z.enum(["low", "medium", "high"]).default("low"),
  archived: z.boolean().default(false),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type DailySales = z.infer<typeof DailySalesSchema>;
