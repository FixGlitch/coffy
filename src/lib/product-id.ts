import { customAlphabet } from "nanoid";

const prefixes = {
  products: "pdts",
  dailySales: "dysl",
};

interface GenerateIdOptions {
  length?: number;
  separator?: string;
}

export function generateId(options: GenerateIdOptions = {}) {
  const { length = 4, separator = "-" } = options;
  const id = customAlphabet(
    "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
    length
  )();

  return `${prefixes.products}${separator}${id}`;
}
