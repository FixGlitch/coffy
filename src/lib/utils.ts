import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import { faker } from "@faker-js/faker";
import {
  ArrowDownIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  CheckCircle,
  CheckCircle2,
  Circle,
  CircleHelp,
  CircleIcon,
  CircleX,
  Timer,
  XCircle,
} from "lucide-react";

import { Product } from "@/schema/ProductSchema";
import { databasePrefix } from "./constants";
import { DailySales } from "@/schema/DailySalesSchema";

export function generateRandomProduct(): Product {
  return {
    id: faker.commerce.product(),
    code: faker.string.alphanumeric(8),
    title: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    price: parseFloat(faker.commerce.price()),
    status:
      faker.helpers.shuffle(["todo", "in-progress", "done", "canceled"])[0] ??
      "todo",
    label:
      faker.helpers.shuffle([
        "bug",
        "feature",
        "enhancement",
        "documentation",
      ])[0] ?? "bug",
    priority: faker.helpers.shuffle(["low", "medium", "high"])[0] ?? "low",
    archived: faker.datatype.boolean({ probability: 0.2 }),
    createdAt: new Date(),
    updatedAt: new Date(),
  };
}

export function getStatusIcon(status: Product["status"]) {
  const statusIcons = {
    canceled: CircleX,
    done: CheckCircle2,
    "in-progress": Timer,
    todo: CircleHelp,
  };

  return statusIcons[status as keyof typeof statusIcons] || CircleIcon;
}

export function getStatusIconDailySales(status: DailySales["status"]) {
  const statusIcons = {
    pending: Timer,
    completed: CheckCircle,
    canceled: XCircle,
  };

  return statusIcons[status as keyof typeof statusIcons] || Circle;
}

export function getPriorityIconDailySales(priority: Product["priority"]) {
  const priorityIcons = {
    high: ArrowUpIcon,
    low: ArrowDownIcon,
    medium: ArrowRightIcon,
  };

  return priorityIcons[priority] || CircleIcon;
}

export function getPriorityIcon(priority: Product["priority"]) {
  const priorityIcons = {
    high: ArrowUpIcon,
    low: ArrowDownIcon,
    medium: ArrowRightIcon,
  };

  return priorityIcons[priority] || CircleIcon;
}

export const pgTable = (name: string) => `${databasePrefix}_${name}`;

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(
  date: Date | string | number,
  opts: Intl.DateTimeFormatOptions = {}
) {
  return new Intl.DateTimeFormat("en-US", {
    month: opts.month ?? "long",
    day: opts.day ?? "numeric",
    year: opts.year ?? "numeric",
    ...opts,
  }).format(new Date(date));
}

export function toSentenceCase(str: string) {
  return str
    .replace(/_/g, " ")
    .replace(/([A-Z])/g, " $1")
    .toLowerCase()
    .replace(/^\w/, (c) => c.toUpperCase())
    .replace(/\s+/g, " ")
    .trim();
}

export function composeEventHandlers<E>(
  originalEventHandler?: (event: E) => void,
  ourEventHandler?: (event: E) => void,
  { checkForDefaultPrevented = true } = {}
) {
  return function handleEvent(event: E) {
    originalEventHandler?.(event);

    if (
      checkForDefaultPrevented === false ||
      !(event as unknown as Event).defaultPrevented
    ) {
      return ourEventHandler?.(event);
    }
  };
}

export function takeFirst<TData>(items: TData[]) {
  return items.at(0);
}

export function takeFirstOrNull<TData>(items: TData[]) {
  return takeFirst(items) ?? null;
}

export function takeFirstOrThrow<TData>(items: TData[]) {
  const first = takeFirst(items);

  if (!first) {
    throw new Error("First item not found");
  }

  return first;
}

export function coalesce<TData>(value: any, defaultValue: any) {
  return `COALESCE(${value}, ${defaultValue})`;
}

export function jsonBuildObject<TFields extends Record<string, any>>(
  shape: TFields
) {
  const chunks: string[] = [];

  Object.entries(shape).forEach(([key, value]) => {
    if (chunks.length > 0) {
      chunks.push(",");
    }
    chunks.push(`'${key}', ${value}`);
  });

  return `json_build_object(${chunks.join(", ")})`;
}

export function jsonAgg(column: string) {
  return `json_agg(${column})`;
}

export function arrayAggBuildObject<Fields extends Record<string, any>>(
  fields: Fields,
  options: any = {}
) {
  const jsonbBuildObject = `jsonb_build_object(${Object.entries(fields)
    .map(([key, value]) => `'${key}', ${value}`)
    .join(", ")})`;

  const distinctClause = options.distinct ? "distinct " : "";
  const orderByClause = options.orderBy ? ` order by ${options.orderBy}` : "";
  const whereClause = options.where ? ` filter (where ${options.where})` : "";

  return `coalesce(
    array_agg(${distinctClause}${jsonbBuildObject}${orderByClause})${whereClause},
    array[]::jsonb[]
  )`;
}

export function caseWhen<TColumn extends any>(
  cases: { when: any; then: any }[],
  elseValue: TColumn
) {
  const chunks: string[] = [];

  cases.forEach(({ when, then }) => {
    chunks.push(`when ${when} then ${then}`);
  });

  chunks.push(`else ${elseValue}`);

  return `case ${chunks.join(" ")} end`;
}

export function compose<TColumn extends any>(
  columns: TColumn[],
  separator = ""
) {
  const chunks = columns.map((column) => `${column}::text`);

  return `(${chunks.join(` || ${separator} || `)})`;
}

export function isEmpty(column: string) {
  return `
    case
      when ${column} is null then true
      when ${column} = '' then true
      when ${column}::text = '[]' then true
      else false
    end
  `;
}

export function isNotEmpty(column: string) {
  return `
    case
      when ${column} is null then false
      when ${column} = '' then false
      when ${column}::text = '[]' then false
      else true
    end
  `;
}
