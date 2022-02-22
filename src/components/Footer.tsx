import Link from "next/link";
import { FaDiscord, FaTwitter } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="bg-blue-900 flex justify-center px-10">
      <div className="flex flex-col lg:flex-row gap-10 justify-between w-full max-w-6xl my-12 py-8">
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-white text-3xl">RPGVerse</h2>
            <h3 className="text-white">8,888 unique mekas who need drivers.</h3>
          </div>
          <div>
            <p className="text-gray-400">
              ©2021 MekaVerse. All rights reserved.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-14">
          <div>
            <ul>
              <li className="text-white">Home</li>
              <li className="text-indigo-300">Team</li>
              <li className="text-indigo-300">Terms and Condition</li>
            </ul>
          </div>
          <div>
            <ul className="flex flex-row gap-2">
              <li>
                <div className="p-2 border-2 border-blue-500">
                  <Link href="/">
                    <a>
                      <FaTwitter size={25} className="text-white" />
                    </a>
                  </Link>
                </div>
              </li>
              <li>
                <div className="p-2 border-2 border-blue-500">
                  <Link href="/">
                    <a>
                      <FaDiscord size={25} className="text-white" />
                    </a>
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
