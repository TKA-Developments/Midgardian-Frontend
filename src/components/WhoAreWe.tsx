import ReactMarkdown from "react-markdown";

export const WhoAreWe = () => {
  const members = [
    {
      name: "XXX",
      quote: "STARCRAFT OBSESSED. EATS SMURFS.",
      imageSource: "/img/Warrior (M).jpg",
    },
    {
      name: "YYY",
      quote: "REFORMED LEVERAGE ADDICT.",
      imageSource: "/img/Thief (M).jpg",
    },
  ];
  return (
    <div className="flex flex-col lg:flex-row items-center gap-10 mb-12">
      <div>
        <h2 className="text-[48px]  text-typography-primary text-center font-bold mb-5">
          The <span className="text-primary">The Midgardian Team</span> Team
        </h2>
        <div className="flex flex-row gap-5">
          {members.map((member, idx) => {
            return (
              <div key={idx} className="w-full">
                <img
                  src={member.imageSource}
                  className="object-cover w-full aspect-square"
                />
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <h3 className="text-typography-primary text-[18px]">
          <ReactMarkdown>{`Midgardian was created by two friends who felt nostalgic about the good old days playing MMORPG games
\n &nbsp;
\n
Since XXX is a crypto researcher and YYY is an artist, they set out to start midgardian project as an effort to connect with other MMORPG lovers
\n &nbsp;
\n
They hope, one day, the metaverse will relive these days`}</ReactMarkdown>
        </h3>
      </div>
    </div>
  );
};
