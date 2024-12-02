import { faker } from "@faker-js/faker";

export const salesByCategory = Array.from({ length: 1000 }, (_, index) => ({
  id: index + 1,
  category: faker.commerce.department(),
  units_sold: faker.number.int({ min: 10, max: 200 }),
  revenue: faker.number.float({ min: 500, max: 5000, fractionDigits: 2 }),
  date_of_sale: faker.date.past({ years: 1 }).toISOString(),
}));

export type SalesByCategory = (typeof salesByCategory)[number];
