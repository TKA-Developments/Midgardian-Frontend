import { useWeb3React } from "@web3-react/core";
import { BigNumber } from "ethers";
import Lottie from "lottie-react";
import Head from "next/head";
import { useCallback, useEffect, useState } from "react";
import { Button } from "../../../common/components/base/button/Button";
import { Card } from "../../../common/components/base/Card";
import { useMidgardianContract } from "../../../contract/midgardian";
import { providerRPC } from "../../../data/source/ethereum-rpc/provider";
import { NFTData } from "../../../domain/model/nft-data/NFTData";
import { NFTMetadata } from "../../../domain/model/nft-metadata/NFTMetadata";
import {
  Resource,
  resourceLoading,
  resourceSuccess,
} from "../../../util/resource";
import { Navbar } from "../../index/components/Navbar";
import { AttributeCard } from "./components/AttributeCard";
import swordsAnimation from "../../../../public/img/swords.json";

export type TokenProps = {
  idRes: Resource<BigNumber>;
};

export const Token = ({ idRes }: TokenProps) => {
  const { library } = useWeb3React();

  const midgardianContractUser = useMidgardianContract(library);
  const midgardianContractRPC = useMidgardianContract(providerRPC);

  const fetchNFTData = useCallback(
    async (id: BigNumber) => {
      const isTokenAlreadyMintedProm =
        midgardianContractRPC.isTokenAlreadyMinted(id);
      const respMetadataProm = fetch(
        `https://gateway.pinata.cloud/ipfs/QmenMY5suDjf9xEDZYGQuqMRbQ4GKUnhwwnVZD8ZUjheJK/${id}.json`
      ).then((data) => data.json()) as Promise<NFTMetadata>;
      const [respMetadata, isTokenAlreadyMinted] = await Promise.all([
        respMetadataProm,
        isTokenAlreadyMintedProm,
      ]);

      return new NFTData(respMetadata, isTokenAlreadyMinted);
    },
    [midgardianContractRPC]
  );

  const [nftMetadataRes, setNFTMetadata] = useState<Resource<NFTData>>(
    resourceLoading()
  );

  useEffect(() => {
    if (idRes.isLoading) return;
    fetchNFTData(idRes.data!!)
      .then((nftMetadata) => {
        setNFTMetadata(resourceSuccess(nftMetadata));
      })
      .catch(console.error);
  }, [idRes.isLoading]);

  let content = null;
  if (!nftMetadataRes.isLoading) {
    if (nftMetadataRes.data != null) {
      const nftMetadata = nftMetadataRes.data;
      content = (
        <div className="py-6 flex flex-col lg:flex-row gap-5 w-full px-10">
          <div className="lg:flex-1">
            <img
              className="w-full h-full bg-on-background rounded-lg object-contain"
              src={nftMetadata.image.replace(
                "ipfs://",
                "https://gateway.pinata.cloud/ipfs/"
              )}
            />
          </div>
          <div className="lg:flex-[2] flex flex-col gap-5">
            <h2 className="text-primary font-special-elite text-5xl">
              {nftMetadata.name}
            </h2>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
                <Card
                  title="Current Price"
                  outerContainerProps={{
                    className: "flex-[1]",
                  }}
                  className="flex flex-col gap-4 justify-center items-center py-4 px-4"
                >
                  <div className="flex flex-row">
                    <img src="/img/icon/ethereum.png" className="w-7 h-8" />
                    <h4 className="text-2xl">0.0005</h4>
                  </div>
                  {nftMetadataRes.data.isSold ? (
                    <Button iconUrl="/img/icon/wallet.png" disabled={true}>
                      Sold Out
                    </Button>
                  ) : (
                    <Button iconUrl="/img/icon/wallet.png">Buy Now</Button>
                  )}
                </Card>
                <Card
                  title="Details"
                  outerContainerProps={{
                    className: "flex-[2]",
                  }}
                  className="px-4 py-4"
                >
                  <ul>
                    <li className="flex flex-row justify-between">
                      <p>Contract Address</p>
                      <p>0xbad6...f731</p>
                    </li>
                    <li className="flex flex-row justify-between">
                      <p>Token ID</p>
                      <p>123</p>
                    </li>
                  </ul>
                </Card>
              </div>
              <Card
                title="Traits"
                className="grid grid-cols-1 lg:grid-cols-3 gap-3 px-8 py-4"
              >
                {nftMetadata.attributes.map((attribute, index) => (
                  <AttributeCard
                    key={index}
                    imgUrl="/img/icon/mage.png"
                    value={attribute.value}
                    title={attribute.traitType}
                  />
                ))}
                {nftMetadata.attributes.map((attribute, index) => (
                  <AttributeCard
                    key={index}
                    imgUrl="/img/icon/thief.png"
                    value={attribute.value}
                    title={attribute.traitType}
                  />
                ))}
                {nftMetadata.attributes.map((attribute, index) => (
                  <AttributeCard
                    key={index}
                    imgUrl="/img/icon/warrior.png"
                    value={attribute.value}
                    title={attribute.traitType}
                  />
                ))}
              </Card>
            </div>
          </div>
        </div>
      );
    }
  } else {
    content = (
      <div className="flex flex-col items-center w-full pt-16">
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
    <>
      <Head>
        <title>Mint - Midgardian</title>
      </Head>
      <Navbar />
      <div className="pt-[76px] mb-32 flex flex-col items-center">
        {content}
      </div>
    </>
  );
};
