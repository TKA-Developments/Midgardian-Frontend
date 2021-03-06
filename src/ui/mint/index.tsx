import Head from "next/head";
import { Footer } from "../../common/components/base/Footer";
import { Button } from "../../common/components/base/button/Button";
import { NFTMetadata } from "../../domain/model/nft-metadata/NFTMetadata";
import { useEffect, useState } from "react";
import { Mint } from "./mint";
import {
  Resource,
  resourceLoading,
  resourceSuccess,
} from "../../util/resource";
import { useMidgardianContract } from "../../contract/midgardian";
import { rpcConnector } from "../../data/source/ethereum-rpc/connector";
import Lottie, { LottiePlayer } from "lottie-react";
import swordsAnimation from "../../../public/img/swords.json";
import { Navbar } from "./components/navbar";
import { NFT } from "./components/nft";
import { Sidebar } from "./components/sidebar";

export type NFTListing = {
  id: number;
  price: number;
  imgUrl: string;
  soldOut: boolean;
};

export const MintUI = () => {
  const [nfts, setNFTs] = useState<Resource<Array<NFTMetadata>>>(
    resourceLoading()
  );

  useEffect(() => {
    fetch("/misc/_metadata.json")
      .then((resp) => resp.json())
      .then((data) => {
        setNFTs(resourceSuccess(data as Array<NFTMetadata>));
      })
      .catch(console.error);
  }, []);

  let content = null;
  if (!nfts.isLoading) {
    if (nfts.data !== null) {
      content = (
        <div className="flex flex-col lg:flex-row w-full">
          <div className="flex-1">
            <div className="bg-secondary">
              <Sidebar />
            </div>
          </div>
          <div className="flex-[3] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-6">
            {nfts.data.map((nft, idx) => (
              <NFT nft={nft} id={idx} key={idx} />
            ))}
          </div>
        </div>
      );
    }
  } else {
    content = (
      <div className="flex flex-col items-center w-full">
        <h2 className="text-on-background text-4xl">Loading...</h2>
        <Lottie
          animationData={swordsAnimation}
          className="w-56 h-56"
          loop={true}
        />
      </div>
    );
  }

  return (
    <Mint>
      <Head>
        <title>Mint - Midgardian</title>
      </Head>
      <div className="pt-[76px]">
        <div className="w-full px-10 flex flex-col items-center">
          <h2 className="text-primary font-bold text-5xl my-6">
            Mint a Midgardian
          </h2>
          {content}
        </div>
      </div>
    </Mint>
  );
};
