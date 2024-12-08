import type { Filter, JoinOperator } from "../types";
import { addDays, endOfDay, startOfDay } from "date-fns";
import { ObjectLiteral, SelectQueryBuilder } from "typeorm";

export function filterColumns<T extends ObjectLiteral>(
  queryBuilder: SelectQueryBuilder<T>,
  filters: Filter<T>[],
  joinOperator: JoinOperator
): SelectQueryBuilder<T> | undefined {
  const joinFn = joinOperator === "and" ? "andWhere" : "orWhere";

  filters.forEach((filter) => {
    const column = filter.id as keyof T;

    switch (filter.operator) {
      case "eq":
        if (Array.isArray(filter.value)) {
          queryBuilder[joinFn](`"${String(column)}" IN (:...values)`, {
            values: filter.value,
          });
        } else if (typeof filter.value === "boolean") {
          queryBuilder[joinFn](`"${String(column)}" = :value`, {
            value: filter.value,
          });
        } else if (filter.type === "date") {
          const date = new Date(filter.value);
          const start = startOfDay(date);
          const end = endOfDay(date);
          queryBuilder[joinFn](`"${String(column)}" BETWEEN :start AND :end`, {
            start,
            end,
          });
        } else {
          queryBuilder[joinFn](`"${String(column)}" = :value`, {
            value: filter.value,
          });
        }
        break;
      case "ne":
        if (Array.isArray(filter.value)) {
          queryBuilder[joinFn](`"${String(column)}" NOT IN (:...values)`, {
            values: filter.value,
          });
        } else if (typeof filter.value === "boolean") {
          queryBuilder[joinFn](`"${String(column)}" != :value`, {
            value: filter.value,
          });
        } else if (filter.type === "date") {
          const date = new Date(filter.value);
          const start = startOfDay(date);
          const end = endOfDay(date);
          queryBuilder[joinFn](
            `"${String(column)}" NOT BETWEEN :start AND :end`,
            { start, end }
          );
        } else {
          queryBuilder[joinFn](`"${String(column)}" != :value`, {
            value: filter.value,
          });
        }
        break;
      case "iLike":
        if (filter.type === "text" && typeof filter.value === "string") {
          queryBuilder[joinFn](`"${String(column)}" ILIKE :value`, {
            value: `%${filter.value}%`,
          });
        }
        break;
      case "notILike":
        if (filter.type === "text" && typeof filter.value === "string") {
          queryBuilder[joinFn](`"${String(column)}" NOT ILIKE :value`, {
            value: `%${filter.value}%`,
          });
        }
        break;
      case "lt":
        if (filter.type === "number") {
          queryBuilder[joinFn](`"${String(column)}" < :value`, {
            value: filter.value,
          });
        } else if (filter.type === "date" && typeof filter.value === "string") {
          queryBuilder[joinFn](`"${String(column)}" < :value`, {
            value: endOfDay(new Date(filter.value)),
          });
        }
        break;
      case "lte":
        if (filter.type === "number") {
          queryBuilder[joinFn](`"${String(column)}" <= :value`, {
            value: filter.value,
          });
        } else if (filter.type === "date" && typeof filter.value === "string") {
          queryBuilder[joinFn](`"${String(column)}" <= :value`, {
            value: endOfDay(new Date(filter.value)),
          });
        }
        break;
      case "gt":
        if (filter.type === "number") {
          queryBuilder[joinFn](`"${String(column)}" > :value`, {
            value: filter.value,
          });
        } else if (filter.type === "date" && typeof filter.value === "string") {
          queryBuilder[joinFn](`"${String(column)}" > :value`, {
            value: startOfDay(new Date(filter.value)),
          });
        }
        break;
      case "gte":
        if (filter.type === "number") {
          queryBuilder[joinFn](`"${String(column)}" >= :value`, {
            value: filter.value,
          });
        } else if (filter.type === "date" && typeof filter.value === "string") {
          queryBuilder[joinFn](`"${String(column)}" >= :value`, {
            value: startOfDay(new Date(filter.value)),
          });
        }
        break;
      case "isBetween":
        if (
          filter.type === "date" &&
          Array.isArray(filter.value) &&
          filter.value.length === 2
        ) {
          const [startDate, endDate] = filter.value;
          queryBuilder[joinFn](`"${String(column)}" BETWEEN :start AND :end`, {
            start: startOfDay(new Date(startDate)),
            end: endOfDay(new Date(endDate)),
          });
        }
        break;
      case "isRelativeToToday":
        if (filter.type === "date" && typeof filter.value === "string") {
          const today = new Date();
          const [amount, unit] = filter.value.split(" ") ?? [];
          let startDate: Date;
          let endDate: Date;

          if (!amount || !unit) return;

          switch (unit) {
            case "days":
              startDate = startOfDay(addDays(today, parseInt(amount)));
              endDate = endOfDay(startDate);
              break;
            case "weeks":
              startDate = startOfDay(addDays(today, parseInt(amount) * 7));
              endDate = endOfDay(addDays(startDate, 6));
              break;
            case "months":
              startDate = startOfDay(addDays(today, parseInt(amount) * 30));
              endDate = endOfDay(addDays(startDate, 29));
              break;
            default:
              return;
          }

          queryBuilder[joinFn](`"${String(column)}" BETWEEN :start AND :end`, {
            start: startDate,
            end: endDate,
          });
        }
        break;
      case "isEmpty":
        queryBuilder[joinFn](
          `"${String(column)}" IS NULL OR "${String(column)}" = ''`
        );
        break;
      case "isNotEmpty":
        queryBuilder[joinFn](
          `"${String(column)}" IS NOT NULL AND "${String(column)}" != ''`
        );
        break;
      default:
        throw new Error(`Unsupported operator: ${filter.operator}`);
    }
  });

  return queryBuilder;
}
