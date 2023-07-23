import type { AppType, AppProps } from 'next/app';
import React from 'react';
import { trpc } from '../utils/trpc';
import { ClerkProvider } from "@clerk/nextjs";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps}: AppProps) => {

  return (
    <ClerkProvider {...pageProps}>
      <Component {...pageProps} />
    </ClerkProvider>
  )
};

export default trpc.withTRPC(MyApp);