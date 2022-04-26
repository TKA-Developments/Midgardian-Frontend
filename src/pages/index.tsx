import type { NextPage } from "next";
import Link from "next/link";
import {
  FaChartBar,
  FaDiscord,
  FaGamepad,
  FaGhost,
  FaGlobe,
  FaNetworkWired,
  FaPen,
  FaPeopleArrows,
  FaRocket,
} from "react-icons/fa";
import { Cards } from "../components/base/cards/Cards";
import { Introduction } from "../components/base/Introduction";
import { Jumbotron } from "../components/Jumbotron";
import { ShowcaseImage } from "../components/base/ShowcaseImage";
import { Stats } from "../components/Stats";
import { StepsRow } from "../components/base/Steps/StepsRow";
import { WhoAreWe } from "../components/base/WhoAreWe";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { useEffect, useState } from "react";
import { useWindowSize } from "../hooks/useWindowSize";
import { JoinDiscordButton } from "../components/JoinDiscordButton";
import { Carrousel } from "../components/Carousel";
import Head from "next/head";
import { SubscribeForm } from "../components/form/SubscribeForm";
import { Benefits } from "../components/Benefits";
import { Club } from "../components/Club";
import { Classes } from "../components/Classes";

const Index: NextPage = () => {
  return (
    <>
      <Head>
        <title>Welcome to Midgardian - Midgardian</title>
      </Head>
      <div className="flex flex-col items-center">
        <Jumbotron />
        <Introduction />
        <div className="my-24 mx-10 max-w-5xl font-special-elite">
          <ShowcaseImage
            imageSource={Carrousel}
            description={`Midgardian is a limited NFT collection where the token is a membership to a community of MMORPG lovers across the world
\n&nbsp;
\n
Remember the good old days in Runescape, Final Fantasy, WoW, Maple Story, or Ragnarok Online? You are not alone :)`}
            title={() => (
              <h2 className="text-[60px] font-bold mt-4 mb-8 text-typography-primary font-special-elite">
                Welcome to <span className="text-primary">Midgardian</span>
              </h2>
            )}
            afterDescriptionComponent={() => <SubscribeForm />}
          />
        </div>
        <div className="my-14">
          <Stats />
        </div>
        <div className="my-24 mx-1 md:mx-10 max-w-5xl">
          <ShowcaseImage
            imageSource="/img/nft/11.png"
            description={`The Specs belongs to 5 job classes: Warrior, Cleric, Archer, Thief, Mage.
\n&nbsp;
\n
Each character is uniquely generated over XX different traits, including accessories, face, hair styles, and more.
\n&nbsp;
\n
All of them are stored as ERC-721 token in the Ethereum blockchain and hosted in IPFS.
\n&nbsp;
\n
Each midgardian can be bought for 0.05 ETH`}
            title="The Specs"
          />
        </div>
        <Classes />
        <Club />
        <Benefits />
        <div
          id="roadmap"
          style={{
            background:
              "linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url('/img/roadmap-min.png')",
            backgroundSize: "cover",
          }}
          className=" flex justify-center w-full py-16 font-special-elite"
        >
          <div className="max-w-5xl mx-10">
            <h2 className="text-center mb-4 text-[48px] font-bold text-primary">
              Roadmap
            </h2>
            <p className="text-center text-typography-primary mb-12 text-[18px]">
              {`This roadmap outlines our goals and where we want to take
            Midgardian. We have a lot of ideas and concepts that we are working
            on. It may evolve over time and hopefully become even better!`}
            </p>
            <StepsRow
              steps={[
                {
                  title: "Launch 1",
                  description:
                    "5000 NFT of Midgardian base class: Warrior, Cleric, Archer, Thief, Mage",
                  icon: () => <FaRocket className="text-primary" size={35} />,
                },
                {
                  title: "Launch 2",
                  description:
                    "10000 NFT of 2nd Job evolution of the base classes: Knight, Paladin, Priest, Monk, Hunter, Bard, Assassin, Rogue, Wizard, Sage",
                  icon: () => <FaRocket className="text-primary" size={35} />,
                },
                {
                  title: "Launch Games?",
                  description:
                    "We work hard with the community to launch any projects or initiatives that is of interest to the community. Be it meetups, products, services, or maybe even games!",
                  icon: () => <FaGamepad className="text-primary" size={35} />,
                },
              ]}
            />
          </div>
        </div>
        <div className="py-16 max-w-5xl mx-10 font-special-elite">
          <WhoAreWe />
        </div>
      </div>
    </>
  );
};

export default Index;
