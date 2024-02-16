import "@/styles/globals.css";
import "@/styles/typography.css";

import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return(
  <>
    <Head>
      <title>Kevin Wang</title>
      <link rel="icon" href="/images/logo.png" />
    </Head>
    <Component {...pageProps} />
  </>)
}
