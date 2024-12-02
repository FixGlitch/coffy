import { faker } from "@faker-js/faker";

export const people = Array.from({ length: 1000 }, (_, index) => ({
  id: index + 1,
  first_name: faker.name.firstName(),
  last_name: faker.name.lastName(),
  email: faker.internet.email(),
  date_of_birth: faker.date
    .birthdate({ min: 1950, max: 2000, mode: "year" })
    .toISOString(),
}));

export type Person = (typeof people)[number];
