import { customAlphabet } from "nanoid";

const prefixes = {
  dailySales: "sale",
};

interface GenerateIdOptions {
  length?: number;
  separator?: string;
}

export function generateDailySaleId(options: GenerateIdOptions = {}) {
  const { length = 4, separator = "-" } = options;
  const id = customAlphabet(
    "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
    length
  )();

  return `${prefixes.dailySales}${separator}${id}`;
}
