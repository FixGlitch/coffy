import { faker } from "@faker-js/faker";

export const dailyRevenue = Array.from({ length: 1000 }, (_, index) => ({
  id: index + 1,
  hour: faker.date
    .between({
      from: new Date("2024-12-02T00:00:00.000Z"),
      to: new Date("2024-12-02T23:59:59.999Z"),
    })
    .toISOString(),
  products: Array.from(
    { length: faker.number.int({ min: 1, max: 5 }) }, 
    () => ({
      name: faker.commerce.productName(),
      price: parseFloat(faker.commerce.price({ min: 1, max: 10 })),
      quantity: faker.number.int({ min: 1, max: 3 }),
    })
  ),
  amount: faker.number.int({ min: 1, max: 5 }),
  total: parseFloat(
    faker.commerce.price({ min: 5, max: 50 })
  ),
  payment_method: faker.helpers.arrayElement(["Cash", "Card", "Digital"]),
  category: faker.helpers.arrayElement(["Drinks", "Food", "Desserts"]),
  date: faker.date.past({ years: 1 }).toISOString(),
}));

export type DailyRevenue = (typeof dailyRevenue)[number];
