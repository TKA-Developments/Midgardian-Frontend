import ReactMarkdown from "react-markdown";

export const WhoAreWe = () => {
  const members = [
    {
      name: "XXX",
      quote: "STARCRAFT OBSESSED. EATS SMURFS.",
      imageSource: "/img/nft/9.png",
    },
    {
      name: "YYY",
      quote: "REFORMED LEVERAGE ADDICT.",
      imageSource: "/img/nft/10.png",
    },
  ];
  return (
    <div className="py-16 max-w-5xl mx-10 font-special-elite flex flex-col lg:flex-row items-center gap-[42px] lg:gap-[144px] my-20">
      <div className="flex-1">
        <h2 className="text-[48px]  text-typography-primary text-center font-bold mb-5">
          The <span className="text-primary">Midgardian</span> Team
        </h2>
        <div className="flex flex-row gap-5">
          {members.map((member, idx) => {
            return (
              <div key={idx} className="w-full">
                <img
                  src={member.imageSource}
                  className="object-cover w-full max-w-[233px] aspect-square"
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex-1">
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
