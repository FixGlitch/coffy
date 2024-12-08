import { inferAsyncReturnType } from "@trpc/server";
import { CreateNextContextOptions } from "@trpc/server/adapters/next";
import { supabase } from "./supabase";

export const createContext = async (opts: CreateNextContextOptions) => {
  const { req } = opts;
  const token = req.headers.authorization?.split(" ")[1] || null;

  let userId: string | null = null;

  if (token) {
    const { data, error } = await supabase.auth.getUser(token);
    if (error) {
      console.error("Error getting user from token:", error.message);
    } else {
      userId = data?.user?.id || null;
    }
  }

  return {
    req,
    supabase,
    auth: { userId },
  };
};

export type Context = inferAsyncReturnType<typeof createContext>;
