import "@component/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@component/components/layout/Layout";
import Head from 'next/head';
import { AppCacheProvider } from '@mui/material-nextjs/v14-pagesRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from "@component/theme";
import AuthInit from "@component/components/AuthInit";

export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props;
  return (
    <AppCacheProvider {...props}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <AuthInit>
        <Component {...pageProps} />
        </AuthInit>
      </ThemeProvider>
    </AppCacheProvider>
  );
}
