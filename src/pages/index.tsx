import type { NextPage } from "next";
import { Alert } from "../components/Alert";
import { ImageCarousel } from "../components/ImageCarousel";
import { Jumbotron } from "../components/Jumbotron";
import { ShowcaseImage } from "../components/ShowcaseImage";
import { ShowcaseImageHorizontal } from "../components/ShowcaseImageHorizontal";
import { ShowcaseMisc } from "../components/ShowcaseMisc";
import { WhoAreWe } from "../components/WhoAreWe";

const Index: NextPage = () => {
  return (
    <>
      <style jsx global>{`
        body {
          background-color: black;
        }
      `}</style>
      <div className="flex flex-col items-center">
        <div className="max-w-7xl">
          <Jumbotron />
          <div className="my-12 mx-10">
            <ShowcaseImage
              title="WELCOME TO THE BORED APE YACHT CLUB"
              description="BAYC is a collection of 10,000 Bored Ape NFTs—unique digital collectibles living on the Ethereum blockchain. Your Bored Ape doubles as your Yacht Club membership card, and grants access to members-only benefits, the first of which is access to THE BATHROOM, a collaborative graffiti board. Future areas and perks can be unlocked by the community through roadmap activation."
              imageSource={[
                "https://ik.imagekit.io/bayc/assets/ape1.png",
                "https://ik.imagekit.io/bayc/assets/ape2.png",
                "https://ik.imagekit.io/bayc/assets/ape3.png",
                "https://ik.imagekit.io/bayc/assets/ape4.png",
              ]}
            />
          </div>
          <div className="my-12 max-w-xs sm:max-w-sm md:max-w-3xl  lg:max-w-fit mx-auto">
            <ImageCarousel />
          </div>
          <div className="my-12 mx-10">
            <Alert
              title="BUY AN APE"
              containerProps={{
                className: "bg-[#bfc500]",
              }}
              message="The initial sale has sold out. To get your Bored Ape, check out the collection on OpenSea."
              componentBelow={() => (
                <button className="bg-black text-white mt-4 rounded px-9 py-8 text-xl">
                  {"BUY AN APE ON OPENSEA"}
                </button>
              )}
            />
          </div>
          <hr />
          <div className="my-12 mx-10">
            <ShowcaseImage
              title="THE SPECS"
              description={`
Each Bored Ape is unique and programmatically generated from over 170 possible traits, including expression, headwear, clothing, and more. All apes are dope, but some are rarer than others.

The apes are stored as ERC-721 tokens on the Ethereum blockchain and hosted on IPFS. (See Record and Proof.) Purchasing an ape costs 0.08 ETH.

To access members-only areas such as THE BATHROOM, Apeholders will need to be signed into their Metamask Wallet.`}
              imageSource="https://ik.imagekit.io/bayc/assets/mystery-ape.gif"
            />
          </div>
          <hr />
          <div className="my-24 mx-10">
            <ShowcaseImageHorizontal
              title="WELCOME TO THE CLUB"
              description="When you buy a Bored Ape, you’re not simply buying an avatar or a provably-rare piece of art. You are gaining membership access to a club whose benefits and offerings will increase over time. Your Bored Ape can serve as your digital identity, and open digital doors for you."
              images={[
                {
                  imageSource: "https://ik.imagekit.io/bayc/assets/icon1.png",
                  caption: "10,000 Provably-rare Bored Ape tokens",
                },
                {
                  imageSource: "https://ik.imagekit.io/bayc/assets/icon2.png",
                  caption:
                    "Fair Launch, fair distribution: All apes cost 0.08 ETH",
                },
                {
                  imageSource: "https://ik.imagekit.io/bayc/assets/icon3.png",
                  caption:
                    "Ownership and commercial usage rights given to the consumer over their NFT",
                },
                {
                  imageSource: "https://ik.imagekit.io/bayc/assets/icon4.png",
                  caption: "The Bathroom: A member's-only graffiti board",
                },
                {
                  imageSource: "https://ik.imagekit.io/bayc/assets/icon5.png",
                  caption:
                    "Gain additional benefits through roadmap activations",
                },
              ]}
            />
          </div>
          <hr />
          <div className="my-24 mx-10">
            <ShowcaseMisc
              title="COMMUNITY TOOLS"
              description="Here are some helpful tools created by the Bored Ape Yacht Club community. Please note that these are unofficial in nature. Every assignment of an ape's overall value or rarity is inherently subjective."
              miscComponent={() => (
                <div className="flex flex-col gap-3 w-full">
                  <button className="text-black rounded-lg font-bold py-2 bg-[#bfc500]">
                    NFTEXP.IO
                  </button>
                  <button className="text-black rounded-lg font-bold py-2 bg-[#bfc500]">
                    RARITY.TOOLS
                  </button>
                </div>
              )}
            />
          </div>
          <hr />
          <div className="my-24 mx-10">
            <WhoAreWe />
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
