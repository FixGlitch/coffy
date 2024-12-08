import {
  createSearchParamsCache,
  parseAsArrayOf,
  parseAsInteger,
  parseAsString,
  parseAsStringEnum,
} from "nuqs/server";
import * as z from "zod";

import { getFiltersStateParser, getSortingStateParser } from "@/lib/parsers";
import { DailySales } from "@/schema/DailySalesSchema";

const dailySalesStatusEnum = ["pending", "completed", "canceled"] as const;
const dailySalesPriorityEnum = ["low", "medium", "high"] as const;
const dailySalesLabelEnum = [
  "normal",
  "promotion",
  "discount",
  "refund",
] as const;

export const searchParamsCacheDaily = createSearchParamsCache({
  flags: parseAsArrayOf(z.enum(["advancedTable", "floatingBar"])).withDefault(
    []
  ),
  page: parseAsInteger.withDefault(1),
  perPage: parseAsInteger.withDefault(10),
  sort: getSortingStateParser<DailySales>().withDefault([
    { id: "createdAt", desc: true },
  ]),
  title: parseAsString.withDefault(""),
  status: parseAsArrayOf(z.enum(dailySalesStatusEnum)).withDefault([]),
  priority: parseAsArrayOf(z.enum(dailySalesPriorityEnum)).withDefault([]),
  from: parseAsString.withDefault(""),
  to: parseAsString.withDefault(""),
  filters: getFiltersStateParser().withDefault([]),
  joinOperator: parseAsStringEnum(["and", "or"]).withDefault("and"),
});

export const createDailySalesSchema = z.object({
  code: z
    .string()
    .max(128, "The sales code cannot exceed 128 characters")
    .min(1, "The sales code is required"),
  date: z.string().min(1, "The sales date is required"),
  description: z.string().optional(),
  sale: z.number().nonnegative("Total sales must be a positive number"),
  status: z.enum(dailySalesStatusEnum).default("pending"),
  label: z.enum(dailySalesLabelEnum).default("normal"),
  priority: z.enum(dailySalesPriorityEnum).default("low"),
  archived: z.boolean().default(false),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const updateDailySalesSchema = z.object({
  code: z
    .string()
    .max(128, "The sales code cannot exceed 128 characters")
    .min(1, "The sales code is required")
    .optional(),
  date: z.string().min(1, "The sales date is required").optional(),
  description: z.string().optional(),
  sale: z
    .number()
    .nonnegative("Total sales must be a positive number")
    .optional(),
  status: z.enum(dailySalesStatusEnum).optional(),
  label: z.enum(dailySalesLabelEnum).optional(),
  priority: z.enum(dailySalesPriorityEnum).optional(),
  archived: z.boolean().optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export type GetDailySalesSchema = Awaited<
  ReturnType<typeof searchParamsCacheDaily.parse>
>;
export type CreateDailySalesSchema = z.infer<typeof createDailySalesSchema>;
export type UpdateDailySalesSchema = z.infer<typeof updateDailySalesSchema>;
