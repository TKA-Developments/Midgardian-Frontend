import ReactMarkdown from "react-markdown";

export const WhoAreWe = () => {
  const members = [
    {
      name: "XXX",
      quote: "STARCRAFT OBSESSED. EATS SMURFS.",
      imageSource: "/img/avatar2.png",
    },
    {
      name: "YYY",
      quote: "REFORMED LEVERAGE ADDICT.",
      imageSource: "/img/avatar3.png",
    },
  ];
  return (
    <div className="flex flex-col lg:flex-row items-center gap-5 mb-12">
      <div>
        <h2 className="text-3xl  text-typography-primary text-center font-bold mb-5">
          The <span className="text-primary">NomadDAO</span> Team
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
        <h3 className="text-typography-primary text-xl">
          <ReactMarkdown>{`Midgardian was created by two friends who felt nostalgic about the good old days playing MMORPG games

Since XXX is a crypto researcher and YYY is an artist, they set out to start midgardian project as an effort to connect with other MMORPG lovers

They hope, one day, the metaverse will relive these days`}</ReactMarkdown>
        </h3>
      </div>
    </div>
  );
};
