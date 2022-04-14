import { Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";

const Document = () => {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Special+Elite&display=swap"
          rel="stylesheet"
        />
        <link href="/font/DragonwickRegular.ttf" rel="stylesheet" />
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-R17B73YXBQ"
        />
        <Script
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
      </Head>
      <NextScript />
      <Main />
    </Html>
  );
};

export default Document;
