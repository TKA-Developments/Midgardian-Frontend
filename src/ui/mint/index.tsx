import Head from "next/head";
import { Navbar } from "../index/components/Navbar";
import { Footer } from "../../common/components/base/Footer";
import { Button } from "../../common/components/base/button/Button";

export type NFTListing = {
  id: number;
  price: number;
  imgUrl: string;
  soldOut: boolean;
};

const nfts = new Array<NFTListing>(12)
  .fill({
    id: 0,
    price: 0.0006,
    imgUrl: "/img/classes/archer.png",
    soldOut: false,
  })
  .fill(
    {
      id: 0,
      price: 0.0006,
      imgUrl: "/img/classes/archer.png",
      soldOut: true,
    },
    3,
    5
  );

export const Mint = () => {
  return (
    <>
      <Head>
        <title>Mint - Midgardian</title>
      </Head>
      <Navbar />
      <div className="pt-[76px] max-w-5xl mx-10 flex flex-col items-center">
        <h2 className="text-primary font-bold text-3xl mt-4 mb-2">
          Mint a Midgardian
        </h2>
        <div className="flex">
          <div className="flex-1">
            <div className="bg-secondary"></div>
          </div>
          <div className="flex-[3] grid grid-cols-3 gap-4">
            {nfts.map((nft, idx) => (
              <div
                onClick={() => {}}
                key={idx}
                className="flex flex-col gap-4 rounded-xl border-2 border-on-background"
              >
                <img src={nft.imgUrl} className="rounded-t-xl" />
                <div className="flex flex-row justify-between px-6">
                  <h3 className="text-primary text-lg">Midgardian #{nft.id}</h3>
                  <h3 className="text-on-background text-lg">{nft.price}</h3>
                </div>
                <Button disabled={nft.soldOut} className="text-background">
                  {nft.soldOut ? "Sold Out" : "Buy Now"}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
