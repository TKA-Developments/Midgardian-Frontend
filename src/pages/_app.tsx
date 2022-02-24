import "../../styles/globals.css";
import type { AppProps } from "next/app";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        body {
          background-color: #141e27;
        }
      `}</style>
      <div className="flex flex-col">
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
