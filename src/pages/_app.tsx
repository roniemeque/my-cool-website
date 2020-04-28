import "../styles.css";
import { AppProps } from "next/app";
import TagManager from "react-gtm-module";
import { useEffect } from "react";
import Head from "next/head";

export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    TagManager.initialize({
      gtmId: "GTM-PX8BVHZ",
    });
  }, []);

  return (
    <>
      <Head>
        <title>🧙‍♂️Ronie Meque</title>
        <meta
          name="description"
          key="description"
          content="Web Developer. Loves to help people and hopes to one day actually finish a side project or travel the world, whichever comes firts"
        />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          href="/favicon-32x32.png"
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href="/favicon-16x16.png"
          sizes="16x16"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
