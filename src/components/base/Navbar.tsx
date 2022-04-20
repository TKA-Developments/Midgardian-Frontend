import { useState } from "react";
import { FaDiscord, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-scroll";
import { DISCORD_URL, INSTAGRAM_URL, NAME, TWITTER_URL } from "../../const";
import { classNames } from "../../util/string";
import { Icon } from "../icons/Icon";
import { IconHamburger } from "../icons/IconHamburger";

export enum NavbarLinkType {
  Scroll,
  Href,
}

export type NavbarLink = {
  destination: string;
  type: NavbarLinkType;
  text: string;
};

export type NavbarSocial = {
  icon: (icon: Icon) => JSX.Element;
  destination: string;
};

export type NavbarProps = {
  name: string;
  links: Array<NavbarLink>;
  socials?: Array<NavbarSocial>;
};

export const Navbar = ({ name, links, socials }: NavbarProps) => {
  const [isNavbarOpened, setIsNavbarOpened] = useState(false);
  return (
    <nav className="px-7 absolute z-50 w-full max-w-[1920px] bg-secondary min-h-[76px] pt-4">
      <div className="flex flex-row flex-wrap justify-between w-full">
        <div>
          <h1 className="text-typography-primary font-bold text-4xl">{name}</h1>
        </div>
        <button
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          onClick={() => setIsNavbarOpened(!isNavbarOpened)}
        >
          <span className="sr-only">Open main menu</span>
          <IconHamburger color="white" />
        </button>
        <div
          className={classNames(
            `md:flex w-full md:w-auto justify-end gap-10 items-center md-auto`,
            isNavbarOpened ? "" : "hidden"
          )}
        >
          <ul className="flex flex-col md:flex-row gap-1 md:gap-3 text-[14px]">
            {links.map((link) => {
              switch (link.type) {
                case NavbarLinkType.Href:
                  return (
                    <li className="flex">
                      <a
                        className="text-white pl-2 py-2 w-full"
                        href={link.destination}
                      >
                        {link.text}
                      </a>
                    </li>
                  );
                case NavbarLinkType.Scroll:
                  return (
                    <li className="flex">
                      <Link
                        smooth={true}
                        className="text-white pl-2 py-2 w-full cursor-pointer"
                        to={link.destination}
                      >
                        {link.text}
                      </Link>
                    </li>
                  );
                default:
                  console.error("UNREACHABLE!");
              }
            })}
          </ul>
          {socials && (
            <ul className="my-6 md:my-0 justify-center flex flex-row gap-10 md:gap-4">
              {socials.map((social) => (
                <li>
                  <a href={social.destination}>
                    <social.icon color="white" />
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};
