import { useEffect, useState } from "react";
import { Button } from "../../../common/components/base/button/Button";
import { useMidgardianContract } from "../../../contract/midgardian";
import { rpcConnector } from "../../../data/source/ethereum-rpc/connector";
import { NFTMetadata } from "../../../domain/model/nft-metadata/NFTMetadata";

export type NFTProps = {
  id: number;
  nft: NFTMetadata;
  showBuyButton?: boolean;
};

export const NFT = ({ id, nft, showBuyButton = true }: NFTProps) => {
  const [isSoldOut, setIsSoldOut] = useState(false);

  const midgardianContractRPC = useMidgardianContract(rpcConnector);

  useEffect(() => {
    midgardianContractRPC
      .isTokenAlreadyMinted(id)
      .then((isTokenAlreadyMinted: boolean) => {
        setIsSoldOut(isTokenAlreadyMinted);
      });
  }, [setIsSoldOut]);

  return (
    <a
      href={`/mint/token/${id}`}
      className="flex flex-col gap-4 rounded-xl border-2 border-on-background"
    >
      <img
        src={nft.image.replace("ipfs://", "https://gateway.pinata.cloud/ipfs/")}
        className="rounded-t-xl"
      />
      <div className="flex flex-row justify-between px-6">
        <h3 className="text-primary text-lg">Midgardian #{id}</h3>
        <div className="flex flex-row items-center gap-2">
          <img src="/img/icon/ethereum.png" className="w-4 h-4" />
          <h3 className="text-on-background text-lg">0.0006</h3>
        </div>
      </div>
      {showBuyButton && (
        <Button disabled={isSoldOut} className="text-background">
          {isSoldOut ? "Sold Out" : "Buy Now"}
        </Button>
      )}
    </a>
  );
};
