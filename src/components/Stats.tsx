import { useEffect, useState } from "react";
import { FaDiscord } from "react-icons/fa";
import { numberFormatter } from "../util/string";
import { Stats as StatsBase } from "./Stats";

export const Stats = () => {
  const [discordMemberCount, setDiscordMemberCount] = useState<null | number>(
    null
  );

  useEffect(() => {
    fetch("https://discord.com/api/guilds/953662307483926648/widget.json")
      .then((data) => data.json())
      .then((data) => {
        setDiscordMemberCount(data?.presence_count);
      })
      .catch(console.error);
  }, []);

  return (
    <StatsBase
      data={[
        {
          icon: () => (
            <div className="bg-discord rounded-full p-2">
              <FaDiscord size={40} className="text-white" />
            </div>
          ),
          title:
            discordMemberCount !== null
              ? numberFormatter.format(discordMemberCount)
              : "Loading...",
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
