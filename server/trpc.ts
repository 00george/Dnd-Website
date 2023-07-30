import { initTRPC } from '@trpc/server';
import { CreateNextContextOptions } from "@trpc/server/adapters/next";
import { getAuth } from "@clerk/nextjs/server";
import type { SignedInAuthObject,SignedOutAuthObject } from "@clerk/nextjs/api";

interface AuthContext {
    auth: SignedInAuthObject | SignedOutAuthObject;
  }
  /**
   * This helper generates the "internals" for a tRPC context. If you need to use
   * it, you can export it from here
   *
   * Examples of things you may need it for:
   * - testing, so we dont have to mock Next.js' req/res
   * - trpc's `createSSGHelpers` where we don't have req/res
   * @see https://create.t3.gg/en/usage/trpc#-servertrpccontextts
   */
  const createInnerTRPCContext = ({ auth }: AuthContext  ) => {
    return {
      auth,
    };
  };
  
  /**
   * This is the actual context you'll use in your router. It will be used to
   * process every request that goes through your tRPC endpoint
   * @link https://trpc.io/docs/context
   */
  export const createTRPCContext = async (opts: CreateNextContextOptions) => {
    
  
    return createInnerTRPCContext({ auth: getAuth(opts.req) });
  };


// Avoid exporting the entire t-object
// since it's not very descriptive.
// For instance, the use of a t variable
// is common in i18n libraries.
const t = initTRPC.context<typeof createTRPCContext>().create({
    errorFormatter({ shape }) {
      return shape;
    },
  });
  
// Base router and procedure helpers
export const router = t.router;
export const procedure = t.procedure;