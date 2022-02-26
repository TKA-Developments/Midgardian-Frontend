import "../../styles/globals.css";
import type { AppProps } from "next/app";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { Head } from "next/document";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
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
