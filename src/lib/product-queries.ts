import { faker } from "@faker-js/faker";
import { Product } from "@/schema/ProductSchema";
import { type GetProductsSchema } from "./product-validations";
import { generateId } from "./product-id";

const productCode = generateId();

function generateFakeProduct(): Product {
  return {
    id: faker.string.uuid(),
    code: productCode,
    title: faker.commerce.productName(),
    description: faker.lorem.sentence(),
    price: faker.number.float({ min: 0, max: 1000, fractionDigits: 2 }),
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent(),
    status: faker.helpers.arrayElement([
      "todo",
      "in-progress",
      "done",
      "canceled",
    ]),
    label: faker.helpers.arrayElement([
      "bug",
      "feature",
      "enhancement",
      "documentation",
    ]),
    priority: faker.helpers.arrayElement(["low", "medium", "high"]),
    archived: faker.datatype.boolean(),
  };
}

export async function getProducts(input: GetProductsSchema) {
  try {
    const offset = (input.page - 1) * input.perPage;

    const fakeProducts = Array.from({ length: 50 }, generateFakeProduct);

    const paginatedProducts = fakeProducts.slice(
      offset,
      offset + input.perPage
    );
    const pageCount = Math.ceil(fakeProducts.length / input.perPage);

    return { data: paginatedProducts, pageCount };
  } catch (err) {
    return { data: [], pageCount: 0 };
  }
}

export async function getProductStatusCounts() {
  try {
    const fakeCounts = {
      todo: faker.number.int({ min: 1, max: 20 }),
      "in-progress": faker.number.int({ min: 1, max: 20 }),
      done: faker.number.int({ min: 1, max: 20 }),
      canceled: faker.number.int({ min: 1, max: 20 }),
    };

    return fakeCounts as Record<Product["status"], number>;
  } catch (err) {
    return {} as Record<Product["status"], number>;
  }
}

export async function getProductPriorityCounts() {
  try {
    const fakeCounts = {
      low: faker.number.int({ min: 1, max: 20 }),
      medium: faker.number.int({ min: 1, max: 20 }),
      high: faker.number.int({ min: 1, max: 20 }),
    };

    return fakeCounts as Record<Product["priority"], number>;
  } catch (err) {
    return {} as Record<Product["priority"], number>;
  }
}
