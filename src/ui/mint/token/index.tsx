import { useWeb3React } from "@web3-react/core";
import { BigNumber } from "ethers";
import { useCallback, useEffect, useState } from "react";
import { useMidgardianContract } from "../../../contract/midgardian";
import { providerRPC } from "../../../data/source/ethereum-rpc/provider";
import {
  Resource,
  resourceLoading,
  resourceSuccess,
} from "../../../util/resource";

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
        <div className="mx-10 flex flex-row gap-5">
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
          </div>
        </div>
      );
    }
  }

  return <div>{content}</div>;
};
