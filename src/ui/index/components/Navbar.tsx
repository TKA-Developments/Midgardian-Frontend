import { FaDiscord, FaInstagram, FaTwitter } from "react-icons/fa";
import { DISCORD_URL, INSTAGRAM_URL, NAME, TWITTER_URL } from "../../../const";
import {
  BaseNavbar as BaseNavbar,
  NavbarLinkType,
} from "../../../common/components/base/Navbar";

export const Navbar = () => {
  return (
    <BaseNavbar
      logo={{
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
