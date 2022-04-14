import Link from "next/link";
import { FaDiscord, FaTwitter } from "react-icons/fa";
import { DISCORD_URL, NAME } from "../../const";

export const Footer = () => {
  return (
    <div
      style={{
        background:
          "linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('/img/scenery.png')",
        backgroundSize: "cover",
      }}
      className="flex flex-col gap-5 items-center pt-6 pb-4 px-5"
    >
      <h2 className="text-white font-bold">{NAME}</h2>
      <Link href={DISCORD_URL}>
        <a className="bg-discord text-white font-semibold w-full max-w-xl py-2 text-center rounded shadow-xl flex flex-row justify-center items-center">
          <FaDiscord className="text-white mr-2" /> Join Discord
        </a>
      </Link>
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
