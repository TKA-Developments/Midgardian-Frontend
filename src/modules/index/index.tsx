import type { NextPage } from "next";
import Head from "next/head";
import { Benefits } from "./components/Benefits";
import { Club } from "./components/Club";
import { Classes } from "./components/Classes";
import { Roadmap } from "./components/Roadmap";
import { Specs } from "./components/Specs";
import { Description } from "./components/Description";
import { Jumbotron } from "./components/Jumbotron";
import { Stats } from "./components/Stats";
import { WhoAreWe } from "./components/WhoAreWe";
import { Navbar } from "./components/Navbar";
import { Introduction } from "../../common/components/base/Introduction";
import { Footer } from "../../common/components/base/Footer";

export const Index = () => {
  return (
    <>
      <Head>
        <title>Welcome to Midgardian - Midgardian</title>
      </Head>
      <Navbar />
      <div className="pt-[76px] flex flex-col items-center">
        <Jumbotron />
        <Introduction />
        <Description />
        <Stats />
        <Specs />
        <Classes />
        <Club />
        <Benefits />
        <Roadmap />
        <WhoAreWe />
      </div>
      <Footer />
    </>
  );
};
