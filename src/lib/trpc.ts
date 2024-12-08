import { initTRPC } from '@trpc/server';
import { Context } from '@/lib/context';

const t = initTRPC.context<Context>().create();

const isAuthenticated = t.middleware(({ ctx, next }) => {
  if (!ctx.auth.userId) {
    throw new Error('No estás autenticado');
  }
  return next();
});

export const publicProcedure = t.procedure;
export const protectedProcedure = t.procedure.use(isAuthenticated);
export const router = t.router;

export const appRouter = router({
  example: publicProcedure.query(() => {
    return { message: '¡Hola desde tRPC!' };
  }),
  protectedExample: protectedProcedure.query(({ ctx }) => {
    return { message: `¡Hola, usuario ${ctx.auth.userId}!` };
  }),
});

export type AppRouter = typeof appRouter;
