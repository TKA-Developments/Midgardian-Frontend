import { useEffect, useState } from "react";
import { FaDiscord } from "react-icons/fa";
import { numberFormatter } from "../util/string";
import { Stats as StatsBase } from "./base/Stats";

export const Stats = () => {
  return (
    <StatsBase
      data={[
        {
          icon: () => (
            <div className="bg-discord rounded-full p-2">
              <FaDiscord size={40} className="text-white" />
            </div>
          ),
          title: `${numberFormatter.format(100)}+`,
          subtitle: "Online Discord Members",
        },
        {
          icon: () => (
            <div className="bg-opensea rounded-full p-2">
              <img
                src="https://storage.googleapis.com/opensea-static/Logomark/Logomark-Blue.svg"
                width={40}
                height={40}
              />
            </div>
          ),
          title: `${numberFormatter.format(1000)}+`,
          subtitle: "NFTs to be launched",
        },
      ]}
    />
  );
};
