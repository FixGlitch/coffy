import { faker } from "@faker-js/faker";

export const salesPerformance = Array.from({ length: 1000 }, (_, index) => ({
  id: index + 1,
  hour: faker.date
    .between({
      from: new Date("2024-12-02T00:00:00.000Z"),
      to: new Date("2024-12-02T23:59:59.999Z"),
    })
    .toISOString(),
  product: faker.commerce.productName(),
  amount: faker.number.int({ min: 1, max: 5 }),
  total: parseFloat(faker.commerce.price({ min: 5, max: 50 })),
  payment_method: faker.helpers.arrayElement(["Cash", "Card", "Digital"]),
  date: faker.date.past({ years: 1 }).toISOString(),
}));

export type SalesPerformance = (typeof salesPerformance)[number];
