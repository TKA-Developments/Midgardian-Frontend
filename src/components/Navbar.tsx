import { useCallback, useState } from "react";
import {
  FaDiscord,
  FaInstagram,
  FaTwitch,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { classNames } from "../util/string";

export const Navbar = () => {
  const [isNavbarOpened, setIsNavbarOpened] = useState(false);
  return (
    <nav className="px-5">
      <div className="flex flex-wrap flex-row justify-between mx-auto">
        <div>
          <img
            src="https://ik.imagekit.io/bayc/assets/bayc-logo-z.png"
            className="h-[76px]"
          />
        </div>
        <button
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          onClick={() => setIsNavbarOpened(!isNavbarOpened)}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <svg
            className="hidden w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <div
          className={classNames(
            `md:flex w-full md:w-auto justify-end gap-10 items-center md-auto`,
            isNavbarOpened ? "" : "hidden"
          )}
        >
          <ul className="flex flex-col md:flex-row gap-1 md:gap-3">
            <li className="flex">
              <a className="text-white pl-2 py-2 w-full">Buy an ape</a>
            </li>
            <li className="flex">
              <a className="text-white pl-2 py-2 w-full">Roadmap</a>
            </li>
            <li className="flex">
              <a className="text-white pl-2 py-2 w-full">Team</a>
            </li>
            <li className="flex">
              <a className="text-white pl-2 py-2 w-full">Gallery</a>
            </li>
            <li className="flex">
              <a className="text-white pl-2 py-2 w-full">Members</a>
            </li>
          </ul>
          <ul className="my-6 md:my-0 justify-center flex flex-row gap-10 md:gap-4">
            <li>
              <a>
                <FaYoutube className="text-white" />
              </a>
            </li>
            <li>
              <a>
                <FaInstagram className="text-white" />
              </a>
            </li>
            <li>
              <a>
                <FaDiscord className="text-white" />
              </a>
            </li>
            <li>
              <a>
                <FaTwitter className="text-white" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
