import { useWeb3React } from "@web3-react/core";
import { BigNumber } from "ethers";
import Head from "next/head";
import { useCallback, useEffect, useState } from "react";
import { Button } from "../../../common/components/base/button/Button";
import { Card } from "../../../common/components/base/Card";
import { useMidgardianContract } from "../../../contract/midgardian";
import { providerRPC } from "../../../data/source/ethereum-rpc/provider";
import {
  Resource,
  resourceLoading,
  resourceSuccess,
} from "../../../util/resource";
import { Navbar } from "../../index/components/Navbar";

export type TokenProps = {
  idRes: Resource<BigNumber>;
};

export type Attribute = {
  trait_type: string;
  value: string;
};

export type NFTMetadata = {
  name: string;
  description: string;
  image: string;
  attributes: Array<Attribute>;
};

export const Token = ({ idRes }: TokenProps) => {
  const { library } = useWeb3React();

  const midgardianContractUser = useMidgardianContract(library);
  const midgardianContractRPC = useMidgardianContract(providerRPC);

  const fetchImageMetadata = useCallback(
    async (id: BigNumber) => {
      const metadataURI = await midgardianContractRPC.uri(id);
      const resp = await fetch(metadataURI);
      return (await resp.json()) as NFTMetadata;
    },
    [midgardianContractRPC]
  );

  const [nftMetadataRes, setNFTMetadata] = useState<Resource<NFTMetadata>>(
    resourceLoading()
  );

  useEffect(() => {
    if (idRes.isLoading) return;
    fetchImageMetadata(idRes.data!!)
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
        <div className="flex flex-row gap-5 w-full">
          <div className="flex-1">
            <img
              className="w-full h-full bg-on-background"
              src={nftMetadata.image.replace(
                "ipfs://",
                "https://gateway.pinata.cloud/ipfs/"
              )}
            />
          </div>
          <div className="flex-[2]">
            <h2 className="text-primary font-special-elite text-2xl">
              {nftMetadata.name}
            </h2>
            <div className="flex flex-col gap-4">
              <div className="flex flex-row gap-8">
                <Card title="Current Price" className="flex-[1]">
                  <h4>0.0005</h4>
                  <Button>Buy Now</Button>
                </Card>
                <Card title="Details" className="flex-[2]">
                  <ul>
                    <li>
                      <p>Contract Address</p>
                      <p>0xbad6...f731</p>
                    </li>
                    <li>
                      <p>Token ID</p>
                      <p>123</p>
                    </li>
                  </ul>
                </Card>
              </div>
              <Card title="Traits"></Card>
            </div>
          </div>
        </div>
      );
    }
  }

  return (
    <>
      <Head>
        <title>Mint - Midgardian</title>
      </Head>
      <Navbar />
      <div className="pt-[76px] max-w-6xl mx-10 flex flex-col items-center bg-red-400">
        {content}
      </div>
    </>
  );
};
