import { JoinDiscordButton } from "../../../common/components/button/JoinDiscordButton";

export const Club = () => {
  return (
    <div className="bg-cobblestone-dimmed bg-cover py-16 max-w-5xl px-10 my-12 flex flex-col justify-center items-center text-center gap-8">
      <div>
        <h2 className="text-primary font-special-elite text-4xl font-bold">
          Midguardian Club
        </h2>
        <h3 className="text-on-background font-special-elite">
          {
            "It's more than just an Art of NFT .... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud"
          }
        </h3>
      </div>
      <div className="flex justify-center w-full px-[32px] md:mx-auto">
        <JoinDiscordButton />
      </div>
    </div>
  );
};
