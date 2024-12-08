"use server";

import { customAlphabet } from "nanoid";
import { getErrorMessage } from "@/lib/handle-error";
import { z } from "zod";
import { DailySales, DailySalesSchema } from "@/schema/DailySalesSchema";

export async function seedDailySales(input: { count: number }) {
  const count = input.count ?? 100;

  try {
    const allDailySales: DailySales[] = [];

    for (let i = 0; i < count; i++) {
      allDailySales.push(generateRandomDailySale());
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

export async function createDailySale(input: z.infer<typeof DailySalesSchema>) {
  try {
    const newDailySale: DailySales = {
      id: `DAILY-SALE-${customAlphabet("0123456789", 4)()}`,
      code: `CODE-${customAlphabet("0123456789", 4)()}`,
      description: input.description ?? "No description",
      createdAt: new Date(),
      updatedAt: new Date(),
      sale: input.sale ?? 0,
      date: input.date ?? new Date().toISOString().split("T")[0],
      label: input.label,
      status: input.status,
      priority: input.priority ?? "low",
      archived: input.archived ?? false,
    };

    return {
      data: newDailySale,
      error: null,
    };
  } catch (err) {
    return {
      data: null,
      error: getErrorMessage(err),
    };
  }
}

export async function updateDailySale(
  input: Partial<z.infer<typeof DailySalesSchema>> & {
    ids?: string[];
    label?: DailySales["label"];
    status?: DailySales["status"];
    priority?: DailySales["priority"];
  }
) {
  try {
    const updatedDailySales = input.ids?.map((id) => {
      const updatedDailySale: DailySales = {
        id,
        code: input.code ?? "default-code",
        description: input.description ?? "Updated description",
        sale: input.sale ?? 0,
        date: input.date ?? new Date().toISOString().split("T")[0],
        createdAt: input.createdAt ?? new Date(),
        updatedAt: new Date(),
        label: input.label ?? "normal",
        status: input.status ?? "pending",
        priority: input.priority ?? "medium",
        archived: input.archived ?? false,
      };
      return updatedDailySale;
    });

    return {
      data: updatedDailySales,
      error: null,
    };
  } catch (err) {
    return {
      data: null,
      error: getErrorMessage(err),
    };
  }
}

export async function updateDailySales(input: {
  ids: string[];
  label?: DailySales["label"];
  status?: DailySales["status"];
  priority?: DailySales["priority"];
}) {
  try {
    const updatedDailySales = input.ids.map((id) => ({
      id,
      label: input.label ?? "normal",
      status: input.status ?? "pending",
      priority: input.priority ?? "medium",
      archived: false,
    }));

    return {
      data: updatedDailySales,
      error: null,
    };
  } catch (err) {
    return {
      data: null,
      error: getErrorMessage(err),
    };
  }
}

export async function deleteDailySale(input: { ids: string[] }) {
  try {
    const newDailySale = input.ids.map(() => generateRandomDailySale());

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

export async function deleteDailySales(input: { ids: string[] }) {
  try {
    const newDailySales = input.ids.map(() => generateRandomDailySale());

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

function generateRandomDailySale(): DailySales {
  return {
    id: customAlphabet("abcdefghijklmnopqrstuvwxyz1234567890", 8)(),
    code: customAlphabet("abcdefghijklmnopqrstuvwxyz1234567890", 8)(),
    sale: Math.floor(Math.random() * 100) + 1,
    description: "Random Daily Sale description",
    date: new Date().toISOString().split("T")[0],
    createdAt: new Date(),
    updatedAt: new Date(),
    label: "normal",
    status: "pending",
    priority: "low",
    archived: false,
  };
}
