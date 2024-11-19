import { createNextApiHandler } from "@trpc/server/adapters/next";
import { appRouter } from "@/lib/trpc";
import { createContext } from "@/lib/context";

export default createNextApiHandler({
  router: appRouter,
  createContext,
});
