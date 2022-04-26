import type { NextPage } from "next";
import { Introduction } from "../components/base/Introduction";
import { Jumbotron } from "../components/Jumbotron";
import { Stats } from "../components/Stats";
import { WhoAreWe } from "../components/WhoAreWe";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import Head from "next/head";
import { Benefits } from "../components/Benefits";
import { Club } from "../components/Club";
import { Classes } from "../components/Classes";
import { Roadmap } from "../components/Roadmap";
import { Specs } from "../components/Specs";
import { Description } from "../components/Description";

const Index: NextPage = () => {
  return (
    <>
      <Head>
        <title>Welcome to Midgardian - Midgardian</title>
      </Head>
      <div className="flex flex-col items-center">
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
    </>
  );
};

export default Index;
