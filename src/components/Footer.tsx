import Link from "next/link";
import { FaDiscord, FaTwitter } from "react-icons/fa";

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
      <h2 className="text-white font-bold">Brand</h2>
      <Link href="https://discordapp.com">
        <a className="bg-discord text-white font-semibold w-full max-w-xl py-2 text-center rounded shadow-xl flex flex-row justify-center items-center">
          <FaDiscord className="text-white mr-2" /> Join Discord
        </a>
      </Link>
      <p className="text-center text-white">
        VERIFIED SMART CONTRACT ADDRESS:
        0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D
      </p>
      <p className="text-white text-xs">
        {"© 2021 Midgardian. All rights reserved"}
      </p>
    </div>
  );
};
