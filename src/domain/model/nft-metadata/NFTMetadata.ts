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
