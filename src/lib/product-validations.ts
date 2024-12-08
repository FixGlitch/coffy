import {
  createSearchParamsCache,
  parseAsArrayOf,
  parseAsInteger,
  parseAsString,
  parseAsStringEnum,
} from "nuqs/server"
import * as z from "zod"

import { getFiltersStateParser, getSortingStateParser } from "@/lib/parsers"
import { Product } from "@/schema/ProductSchema"

const productStatusEnum = ["todo", "in-progress", "done", "canceled"] as const;
const productPriorityEnum = ["low", "medium", "high"] as const;
const productLabelEnum = ["bug", "feature", "enhancement", "documentation"] as const;

export const searchParamsCache = createSearchParamsCache({
  flags: parseAsArrayOf(z.enum(["advancedTable", "floatingBar"])).withDefault(
    []
  ),
  page: parseAsInteger.withDefault(1),
  perPage: parseAsInteger.withDefault(10),
  sort: getSortingStateParser<Product>().withDefault([ 
    { id: "createdAt", desc: true },
  ]),
  title: parseAsString.withDefault(""),
  status: parseAsArrayOf(z.enum(productStatusEnum)).withDefault([]),
  priority: parseAsArrayOf(z.enum(productPriorityEnum)).withDefault([]),
  from: parseAsString.withDefault(""),
  to: parseAsString.withDefault(""),
  filters: getFiltersStateParser().withDefault([]),
  joinOperator: parseAsStringEnum(["and", "or"]).withDefault("and"),
})

export const createProductSchema = z.object({
  title: z.string(),
  label: z.enum(productLabelEnum),
  status: z.enum(productStatusEnum),
  priority: z.enum(productPriorityEnum),
})

export const updateProductSchema = z.object({
  title: z.string().optional(),
  label: z.enum(productLabelEnum).optional(),
  status: z.enum(productStatusEnum).optional(),
  priority: z.enum(productPriorityEnum).optional(),
})

export type GetProductsSchema = Awaited<ReturnType<typeof searchParamsCache.parse>>
export type CreateProductSchema = z.infer<typeof createProductSchema>
export type UpdateProductSchema = z.infer<typeof updateProductSchema>
