"use server";

import { customAlphabet } from "nanoid";
import { getErrorMessage } from "@/lib/handle-error";
import { Product, ProductSchema } from "@/schema/ProductSchema";
import { z } from "zod";

export async function seedProducts(input: { count: number }) {
  const count = input.count ?? 100;

  try {
    const allProducts: Product[] = [];

    for (let i = 0; i < count; i++) {
      allProducts.push(generateRandomProduct());
    }

    return {
      data: null,
      error: null,
    };
  } catch (err) {
    return {
      data: null,
      error: getErrorMessage(err),
    };
  }
}

export async function createProduct(input: z.infer<typeof ProductSchema>) {
  try {
    const newProduct: Product = {
      id: `PRODUCT-${customAlphabet("0123456789", 4)()}`,
      code: `CODE-${customAlphabet("0123456789", 4)()}`,
      title: input.title,
      description: input.description ?? "No description",
      price: input.price,
      createdAt: new Date(),
      updatedAt: new Date(),
      label: input.label,
      status: input.status,
      priority: input.priority ?? "low",
      archived: input.archived ?? false,
    };

    return {
      data: newProduct,
      error: null,
    };
  } catch (err) {
    return {
      data: null,
      error: getErrorMessage(err),
    };
  }
}

export async function updateProduct(
  input: Partial<z.infer<typeof ProductSchema>> & { ids?: string[] }
) {
  try {
    const updatedProducts = input.ids?.map((id) => {
      const updatedProduct: Product = {
        id,
        code: input.code ?? "default-code",
        title: input.title ?? "default-title",
        description: input.description ?? "Updated description",
        price: input.price ?? 0,
        createdAt: input.createdAt ?? new Date(),
        updatedAt: new Date(),
        label: input.label ?? "enhancement",
        status: input.status ?? "in-progress",
        priority: input.priority ?? "medium",
        archived: input.archived ?? false,
      };
      return updatedProduct;
    });

    return {
      data: updatedProducts,
      error: null,
    };
  } catch (err) {
    return {
      data: null,
      error: getErrorMessage(err),
    };
  }
}

export async function updateProducts(input: {
  ids: string[];
  label?: Product["label"];
  status?: Product["status"];
  priority?: Product["priority"];
}) {
  try {
    const updatedProducts = input.ids.map((id) => ({
      id,
      label: input.label ?? "Updated label",
      status: input.status ?? "in-progress",
      priority: input.priority ?? "medium",
      archived: false,
    }));

    return {
      data: updatedProducts,
      error: null,
    };
  } catch (err) {
    return {
      data: null,
      error: getErrorMessage(err),
    };
  }
}

export async function deleteProduct(input: { ids: string[] }) {
  try {
    const newProduct = input.ids.map(() => generateRandomProduct());

    return {
      data: null,
      error: null,
    };
  } catch (err) {
    return {
      data: null,
      error: getErrorMessage(err),
    };
  }
}

export async function deleteProducts(input: { ids: string[] }) {
  try {
    const newProducts = input.ids.map(() => generateRandomProduct());

    return {
      data: null,
      error: null,
    };
  } catch (err) {
    return {
      data: null,
      error: getErrorMessage(err),
    };
  }
}

function generateRandomProduct(): Product {
  return {
    id: customAlphabet("abcdefghijklmnopqrstuvwxyz1234567890", 8)(),
    code: customAlphabet("abcdefghijklmnopqrstuvwxyz1234567890", 8)(),
    title: "Random Product",
    description: "Random product description",
    price: Math.floor(Math.random() * 100) + 1,
    createdAt: new Date(),
    updatedAt: new Date(),
    label: "feature",
    status: "todo",
    priority: "low",
    archived: false,
  };
}
