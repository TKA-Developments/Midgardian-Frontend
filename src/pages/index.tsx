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
import { Alert } from "../components/base/Alert";
import { Cards } from "../components/base/Cards/Cards";
import { Introduction } from "../components/base/Introduction";
import { Jumbotron } from "../components/base/Jumbotron";
import { Locations } from "../components/base/Locations";
import { ShowcaseImage } from "../components/base/ShowcaseImage";
import { ShowcaseImageHorizontal } from "../components/base/ShowcaseImageHorizontal";
import { ShowcaseMisc } from "../components/base/ShowcaseMisc";
import { Stats } from "../components/Stats";
import { StepsRow } from "../components/base/Steps/StepsRow";
import { WhoAreWe } from "../components/base/WhoAreWe";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import SwiperInstance from "swiper";
("swiper");
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { useEffect, useState } from "react";
import { DISCORD_URL } from "../const";

export const Carrousel = () => {
  const [controlledSwiper, setControlledSwiper] =
    useState<SwiperInstance | null>(null);
  const [controlledSwiper2, setControlledSwiper2] =
    useState<SwiperInstance | null>(null);
  useEffect(() => {
    if (controlledSwiper) {
      controlledSwiper.wrapperEl.classList.add("ease-linear");
      controlledSwiper.on("slideNextTransitionEnd", () => {
        controlledSwiper.slideNext(5000);
      });
      controlledSwiper.slideNext(5000);
    }
  }, [controlledSwiper]);
  useEffect(() => {
    if (controlledSwiper2) {
      controlledSwiper2.wrapperEl.classList.add("ease-linear");
      controlledSwiper2.on("slidePrevTransitionEnd", () => {
        controlledSwiper2.slidePrev(5000);
      });
      controlledSwiper2.slidePrev(5000);
    }
  }, [controlledSwiper2]);
  return (
    <div className="flex flex-col md:flex-row gap-5">
      <div
        style={{
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, black 30%, black 70%, transparent 100%)",
          maskImage:
            "linear-gradient(to bottom, transparent 0%, black 30%, black 70%, transparent 100%)",
        }}
        className="flex max-h-[650px] max-w-[200px]"
      >
        <Swiper
          onSwiper={setControlledSwiper}
          direction="vertical"
          preventInteractionOnTransition={true}
          slidesPerView={3}
          spaceBetween={5}
          loop={true}
          freeMode={false}
        >
          <SwiperSlide>
            <img src="/img/nft/1.png" className="object-cover" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/img/nft/2.png" className="object-cover" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/img/nft/3.png" className="object-cover" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/img/nft/4.png" className="object-cover" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div
        style={{
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, black 30%, black 70%, transparent 100%)",
          maskImage:
            "linear-gradient(to bottom, transparent 0%, black 30%, black 70%, transparent 100%)",
        }}
        className="hidden md:flex max-h-[650px] max-w-[200px]"
      >
        <Swiper
          onSwiper={setControlledSwiper2}
          direction="vertical"
          preventInteractionOnTransition={true}
          slidesPerView={3}
          spaceBetween={5}
          loop={true}
          freeMode={false}
        >
          <SwiperSlide>
            <img src="/img/nft/5.png" className="object-cover" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/img/nft/6.png" className="object-cover" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/img/nft/7.png" className="object-cover" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/img/nft/8.png" className="object-cover" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

const Index: NextPage = () => {
  return (
    <>
      <div
        style={{
          background:
            "linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.8)),url('/img/pavestone.jpg')",
          backgroundSize: "cover",
        }}
        className="flex flex-col items-center"
      >
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
            afterDescriptionComponent={() => (
              <Link href={DISCORD_URL}>
                <a className="mt-5 bg-discord text-[24px] text-white font-semibold w-full max-w-xl py-2 text-center rounded flex flex-row justify-center items-center font-sans">
                  <FaDiscord className="text-white mr-2" /> Join Discord
                </a>
              </Link>
            )}
          />
        </div>
        <div className="my-14">
          <Stats />
        </div>
        <div className="my-24 mx-10 max-w-5xl">
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
        <div className="py-16 max-w-5xl mx-10 font-special-elite">
          <h3 className="text-center mb-8 text-[48px] font-bold text-primary rotate-6">
            The Benefits
          </h3>
          <Cards
            cardsData={[
              {
                title: "Biggest Crypto MMORPG Community",
                icon: () => (
                  <FaPeopleArrows className="text-primary" size={30} />
                ),
              },
              {
                title: "Expand Your Network",
                icon: () => (
                  <FaNetworkWired className="text-primary" size={30} />
                ),
              },
              {
                title: "Own Full Commercial Rights",
                icon: () => <FaPen className="text-primary" size={30} />,
              },
              {
                title: "2000+ Provably Rare MMORPG Characters",
                icon: () => <FaGhost className="text-primary" size={30} />,
              },
              {
                title: "Grow Your Characters Through Involvement",
                icon: () => <FaChartBar className="text-primary" size={30} />,
              },
              {
                title: "Explore MMORPG Metaverses",
                icon: () => <FaGlobe className="text-primary" size={30} />,
              },
            ]}
          />
        </div>
        <div
          style={{
            background:
              "linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url('/img/wood1.png')",
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
