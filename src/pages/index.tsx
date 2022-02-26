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
import { Alert } from "../components/Alert";
import { Cards } from "../components/Cards/Cards";
import { ImageCarousel } from "../components/ImageCarousel";
import { Introduction } from "../components/Introduction";
import { Jumbotron } from "../components/Jumbotron";
import { Locations } from "../components/Locations";
import { ShowcaseImage } from "../components/ShowcaseImage";
import { ShowcaseImageHorizontal } from "../components/ShowcaseImageHorizontal";
import { ShowcaseMisc } from "../components/ShowcaseMisc";
import { Stats } from "../components/Stats";
import { StepsRow } from "../components/Steps/StepsRow";
import { WhoAreWe } from "../components/WhoAreWe";

const Index: NextPage = () => {
  return (
    <>
      <div className="flex flex-col items-center">
        <Jumbotron />
        <Introduction />
        <div className="my-24 mx-10 max-w-5xl font-special-elite">
          <ShowcaseImage
            imageSource="/img/avatar1.png"
            description={`Midgardian is a limited NFT collection where the token is a membership to a community of MMORPG lovers across the world

Remember the good old days in Runescape, Final Fantasy, WoW, Maple Story, or Ragnarok Online? You are not alone :)`}
            title={() => (
              <h2 className="text-4xl font-bold mt-4 mb-8 text-typography-primary font-special-elite">
                Welcome to <span className="text-primary">Midgardian</span>
              </h2>
            )}
            afterDescriptionComponent={() => (
              <Link href="https://discordapp.com">
                <a className="mt-5 bg-discord text-white font-semibold w-full max-w-xl py-2 text-center rounded flex flex-row justify-center items-center font-sans">
                  <FaDiscord className="text-white mr-2" /> Join Discord
                </a>
              </Link>
            )}
          />
        </div>
        <div className="my-14">
          <Stats
            data={[
              {
                icon: () => (
                  <div className="bg-discord rounded-full p-2">
                    <FaDiscord size={40} className="text-white" />
                  </div>
                ),
                title: "100,000+",
                subtitle: "Discord Members",
              },
              {
                icon: () => (
                  <div className="bg-opensea rounded-full p-2">
                    <img
                      src="https://storage.googleapis.com/opensea-static/Logomark/Logomark-Blue.svg"
                      width={40}
                      height={40}
                    />
                  </div>
                ),
                title: "1,000+",
                subtitle: "NFTs to be launched",
              },
            ]}
          />
        </div>
        <div className="my-24 mx-10 max-w-5xl">
          <ShowcaseImage
            imageSource="/img/avatar1.png"
            description={`The Specs belongs to 5 job classes: Warrior, Cleric, Archer, Thief, Mage.

Each character is uniquely generated over XX different traits, including accessories, face, hair styles, and more.

All of them are stored as ERC-721 token in the Ethereum blockchain and hosted in IPFS.

Each midgardian can be bought for 0.05 ETH`}
            title="The Specs"
          />
        </div>
        <div className="py-16 max-w-5xl mx-10 font-special-elite">
          <h3 className="text-center mb-8 text-3xl font-bold text-typography-primary">
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
        <div className="bg-[url('/img/wood1.png')] flex justify-center w-full py-16 font-special-elite">
          <div className="max-w-5xl mx-10">
            <h2 className="text-center mb-4 text-3xl font-bold text-typography-primary">
              Roadmap
            </h2>
            <p className="text-center text-typography-primary mb-12">
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
