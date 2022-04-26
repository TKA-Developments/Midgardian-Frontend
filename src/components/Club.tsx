import { JoinDiscordButton } from "./JoinDiscordButton";

export const Club = () => {
  return (
    <div className="bg-cobblestone-dimmed bg-cover max-w-5xl md:mx-10 py-16 my-12 flex flex-col justify-center items-center text-center gap-8">
      <div>
        <h2 className="text-primary font-special-elite text-4xl font-bold">
          Midguardian Club
        </h2>
        <h3 className="text-typography-primary font-special-elite">
          {
            "It's more than just an Art of NFT .... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud"
          }
        </h3>
      </div>
      <JoinDiscordButton />
    </div>
  );
};
