import Lottie from "lottie-react";
import Head from "next/head";
import { useEffect, useState } from "react";
import { NFTMetadata } from "../../../domain/model/nft-metadata/NFTMetadata";
import { Mint } from "../mint";
import swordsAnimation from "../../../../public/img/swords.json";
import {
  Resource,
  resourceLoading,
  resourceSuccess,
} from "../../../util/resource";
import { NFT } from "../components/nft";

export type NFTListing = {
  id: number;
  price: number;
  imgUrl: string;
  soldOut: boolean;
};

export const MyCollectionUI = () => {
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 my-6 w-full">
          {nfts.data.map((nft, idx) => (
            <NFT nft={nft} id={idx} key={idx} showBuyButton={false} />
          ))}
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
            My Collection
          </h2>
          {content}
        </div>
      </div>
    </Mint>
  );
};
