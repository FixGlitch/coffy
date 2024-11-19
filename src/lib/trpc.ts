import { initTRPC } from '@trpc/server';
import { Context } from '@/lib/context';

// Inicializa tRPC
const t = initTRPC.context<Context>().create();

// Define middlewares
const isAuthenticated = t.middleware(({ ctx, next }) => {
  if (!ctx.auth.userId) {
    throw new Error('No estás autenticado');
  }
  return next();
});

// Define procedimientos base
export const publicProcedure = t.procedure;
export const protectedProcedure = t.procedure.use(isAuthenticated);
export const router = t.router;

// Definición del router de la aplicación
export const appRouter = router({
  example: publicProcedure.query(() => {
    return { message: '¡Hola desde tRPC!' };
  }),
  protectedExample: protectedProcedure.query(({ ctx }) => {
    return { message: `¡Hola, usuario ${ctx.auth.userId}!` };
  }),
});

// Exporta el tipo de AppRouter
export type AppRouter = typeof appRouter;
