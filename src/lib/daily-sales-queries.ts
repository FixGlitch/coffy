import { faker } from "@faker-js/faker";
import { generateDailySaleId } from "./daily-sales-id";
import { DailySales } from "@/schema/DailySalesSchema";
import { type GetDailySalesSchema } from "./daily-sales-validations";

const dailySalesCode = generateDailySaleId();

function generateFakeDailySales(): DailySales {
  return {
    id: faker.string.uuid(),
    code: dailySalesCode,
    date: faker.date.past().toISOString().split("T")[0],
    description: faker.lorem.sentence(),
    sale: faker.number.float({ min: 0, max: 1000, fractionDigits: 2 }),
    status: faker.helpers.arrayElement(["pending", "completed", "canceled"]),
    label: faker.helpers.arrayElement([
      "normal",
      "promotion",
      "discount",
      "refund",
    ]),
    priority: faker.helpers.arrayElement(["low", "medium", "high"]),
    archived: faker.datatype.boolean(),
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent(),
  };
}

export async function getDailySales(input: GetDailySalesSchema) {
  try {
    const offset = (input.page - 1) * input.perPage;

    const fakeSales = Array.from({ length: 50 }, generateFakeDailySales);

    const paginatedSales = fakeSales.slice(offset, offset + input.perPage);
    const pageCount = Math.ceil(fakeSales.length / input.perPage);

    return { data: paginatedSales, pageCount };
  } catch (err) {
    return { data: [], pageCount: 0 };
  }
}

export async function getDailySalesStatusCounts() {
  try {
    const fakeCounts = {
      pending: faker.number.int({ min: 1, max: 20 }),
      completed: faker.number.int({ min: 1, max: 20 }),
      canceled: faker.number.int({ min: 1, max: 20 }),
    };

    return fakeCounts as Record<DailySales["status"], number>;
  } catch (err) {
    return {} as Record<DailySales["status"], number>;
  }
}

export async function getDailySalesPriorityCounts() {
  try {
    const fakeCounts = {
      low: faker.number.int({ min: 1, max: 20 }),
      medium: faker.number.int({ min: 1, max: 20 }),
      high: faker.number.int({ min: 1, max: 20 }),
    };

    return fakeCounts as Record<DailySales["priority"], number>;
  } catch (err) {
    return {} as Record<DailySales["priority"], number>;
  }
}
