import "../../styles/globals.css";
import type { AppProps } from "next/app";
import { Footer } from "../components/base/Footer";
import { Navbar } from "../components/Navbar";
import Script from "next/script";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <Script
          id="google-analytics-load"
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-R17B73YXBQ"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-R17B73YXBQ');
          `,
          }}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/img/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/img/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/img/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/img/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/img/favicon/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <main className="flex justify-center items-center bg-background overflow-hidden">
        <div className=" max-w-[1920px] w-full">
          <Navbar />
          <div className="pt-[76px]">
            <Component {...pageProps} />
            <Footer />
          </div>
        </div>
      </main>
    </>
  );
}

export default MyApp;
