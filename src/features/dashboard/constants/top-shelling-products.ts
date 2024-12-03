import { faker } from "@faker-js/faker";

export const topSellingProducts = Array.from({ length: 1000 }, (_, index) => ({
  id: index + 1,
  name: faker.commerce.productName(),
  sold_units: faker.number.int({ min: 1, max: 200 }),
  category: faker.helpers.arrayElement(["Drinks", "Food", "Desserts"]),
  image: faker.image.url({ width: 400, height: 300 }),
}));

export type TopSellingProducts = (typeof topSellingProducts)[number];
