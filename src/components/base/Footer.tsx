import Link from "next/link";
import { FaDiscord, FaTwitter } from "react-icons/fa";
import { DISCORD_URL, NAME } from "../../const";
import { JoinDiscordButton } from "../JoinDiscordButton";
import Image from "next/image";

export const Footer = () => {
  return (
    <div className="bg-scenery-dimmed bg-cover backdrop-brightness-50 flex flex-col gap-5 items-center pt-6 pb-4 px-5">
      <div className="flex flex-row gap-3 justify-center items-center">
        <Image
          src="/img/Logo.svg"
          width={30}
          height={30}
          className="brightness-0 invert"
        />
        <h2 className="text-white font-bold text-xl">{NAME}</h2>
      </div>
      <JoinDiscordButton />
      <p className="text-center text-white">
        VERIFIED SMART CONTRACT ADDRESS:
        0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D
      </p>
      <p className="text-white text-xs">
        {`© 2021 ${NAME}. All rights reserved`}
      </p>
    </div>
  );
};
