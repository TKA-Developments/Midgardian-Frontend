import { ShowcaseImage } from "./base/ShowcaseImage";

export const Specs = () => {
  return (
    <div className="my-24 mx-1 md:mx-10 max-w-5xl">
      <ShowcaseImage
        imageSource="/img/nft/11.png"
        description={`The Specs belongs to 5 job classes: Warrior, Cleric, Archer, Thief, Mage.
\n&nbsp;
\n
Each character is uniquely generated over XX different traits, including accessories, face, hair styles, and more.
\n&nbsp;
\n
All of them are stored as ERC-721 token in the Ethereum blockchain and hosted in IPFS.
\n&nbsp;
\n
Each midgardian can be bought for 0.05 ETH`}
        title="The Specs"
      />
    </div>
  );
};
