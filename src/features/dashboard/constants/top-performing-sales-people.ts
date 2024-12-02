import { faker } from "@faker-js/faker";

export const topPerformingSalesPeople = Array.from(
  { length: 1000 },
  (_, index) => ({
    id: index + 1,
    sales_person: faker.person.fullName(),
    total_sales: faker.number.int({ min: 500, max: 5000 }),
    total_commission: parseFloat(
      faker.number.float({ min: 50, max: 500, fractionDigits: 2 }).toFixed(2)
    ),
    date_of_sales: faker.date.past({ years: 1 }).toISOString(),
  })
);

export type TopPerformingSalesPeople =
  (typeof topPerformingSalesPeople)[number];
