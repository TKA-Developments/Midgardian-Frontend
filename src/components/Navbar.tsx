import { FaDiscord, FaInstagram, FaTwitter } from "react-icons/fa";
import { DISCORD_URL, INSTAGRAM_URL, NAME, TWITTER_URL } from "../const";
import { Navbar as BaseNavbar, NavbarLinkType } from "./base/Navbar";

export const Navbar = () => {
  return (
    <BaseNavbar
      logo={{
        style: {
          filter: "brightness(0) invert(1)",
        },
        url: "/img/Logo.svg",
      }}
      name={NAME}
      links={[
        {
          destination: "specs",
          text: "Specs",
          type: NavbarLinkType.Scroll,
        },
        {
          destination: "benefits",
          text: "Benefits",
          type: NavbarLinkType.Scroll,
        },
        {
          destination: "roadmap",
          text: "Roadmap",
          type: NavbarLinkType.Scroll,
        },
        {
          destination: "team",
          text: "Team",
          type: NavbarLinkType.Scroll,
        },
      ]}
      socials={[
        {
          destination: INSTAGRAM_URL,
          icon: FaInstagram,
        },
        {
          destination: DISCORD_URL,
          icon: FaDiscord,
        },
        {
          destination: TWITTER_URL,
          icon: FaTwitter,
        },
      ]}
    />
  );
};
