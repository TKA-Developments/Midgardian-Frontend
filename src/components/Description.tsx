import { ShowcaseImage } from "./base/ShowcaseImage";
import { Carrousel } from "./Carousel";
import { SubscribeForm } from "./form/SubscribeForm";

export const Description = () => {
  return (
    <div className="mb-24 max-w-5xl mx-10 font-special-elite">
      <ShowcaseImage
        imageSource={Carrousel}
        description={`Midgardian is a limited NFT collection where the token is a membership to a community of MMORPG lovers across the world
\n&nbsp;
\n
Remember the good old days in Runescape, Final Fantasy, WoW, Maple Story, or Ragnarok Online? You are not alone :)`}
        title={() => (
          <h2 className="text-[50px] lg:text-[60px] font-bold text-typography-primary font-special-elite">
            Welcome to <span className="text-primary">Midgardian</span>
          </h2>
        )}
        afterDescriptionComponent={() => <SubscribeForm />}
      />
    </div>
  );
};
