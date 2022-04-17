import "../../styles/globals.css";
import type { AppProps } from "next/app";
import { Footer } from "../components/base/Footer";
import { Navbar } from "../components/base/Navbar";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
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
      <div className="flex flex-col bg-[#141e27]">
        <div className="max-w-[1920px] self-center w-full">
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default MyApp;
