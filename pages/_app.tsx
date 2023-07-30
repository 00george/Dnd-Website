import type { AppType, AppProps } from 'next/app';
import React from 'react';
import { trpc } from '../utils/trpc';
import { ClerkProvider } from "@clerk/nextjs";
import "../styles/globals.css";
import Layout from '@/components/layout';

const MyApp = ({ Component, pageProps}: AppProps) => {

  return (
    <ClerkProvider {...pageProps}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ClerkProvider>
  )
};

export default trpc.withTRPC(MyApp);