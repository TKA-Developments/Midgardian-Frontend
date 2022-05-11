import { NFTMetadata } from "../nft-metadata/NFTMetadata";

export type Attribute = {
  traitType: string;
  value: string;
};

export class NFTData {
  name: string;
  description: string;
  image: string;
  attributes: Array<Attribute>;
  isSold: boolean;

  constructor(nftMetadata: NFTMetadata, isSold: boolean) {
    this.name = nftMetadata.name;
    this.description = nftMetadata.description;
    this.image = nftMetadata.image;
    this.attributes = nftMetadata.attributes.map((attribute) => ({
      traitType: attribute.trait_type,
      value: attribute.value,
    }));
    this.isSold = isSold;
  }
}
