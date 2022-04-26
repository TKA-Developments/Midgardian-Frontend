import { useEffect, useState } from "react";
import { FaDiscord } from "react-icons/fa";
import { numberFormatter } from "../util/string";
import { Stats as StatsBase } from "./base/Stats";
import { IconOpenSea } from "./base/icons/IconOpenSea";

export const Stats = () => {
  return (
    <div className="my-14">
      <StatsBase
        data={[
          {
            icon: () => (
              <div className="bg-discord rounded-full p-2">
                <FaDiscord size={40} className="text-white" />
              </div>
            ),
            title: `${numberFormatter.format(100)}+`,
            subtitle: "Discord Members",
          },
          {
            icon: () => (
              <div className="bg-opensea rounded-full p-2">
                <IconOpenSea />
              </div>
            ),
            title: `${numberFormatter.format(1000)}+`,
            subtitle: "NFTs to be launched",
          },
        ]}
      />
    </div>
  );
};
