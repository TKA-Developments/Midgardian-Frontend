import Link from "next/link";
import { FaDiscord } from "react-icons/fa";
import { DISCORD_URL } from "../../../const";

export const JoinDiscordButton = () => {
  return (
    <Link href={DISCORD_URL}>
      <a className="bg-discord text-[24px] max-w-xl py-2 text-center rounded flex flex-row justify-center items-center font-sans">
        <FaDiscord className="text-white mr-2" /> Join Discord
      </a>
    </Link>
  );
};
