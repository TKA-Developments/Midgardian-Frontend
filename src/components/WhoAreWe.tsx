export const WhoAreWe = () => {
  const members = [
    {
      name: "GARGAMEL",
      quote: "STARCRAFT OBSESSED. EATS SMURFS.",
      imageSource: "https://ik.imagekit.io/bayc/assets/garga.png",
    },
    {
      name: "GORDON GONER",
      quote: "REFORMED LEVERAGE ADDICT.",
      imageSource: "https://ik.imagekit.io/bayc/assets/gordy.png",
    },
    {
      name: "EMPEROR TOMATO KETCHUP",
      quote: "SPENT ALL THEIR MONEY ON FIRST PRESSES AND PET-NAT.",
      imageSource: "https://ik.imagekit.io/bayc/assets/tomato.png",
    },
    {
      name: "NO SASS",
      quote: "HERE FOR THE APES. NOT FOR THE SASS.",
      imageSource: "https://ik.imagekit.io/bayc/assets/sass.png",
    },
  ];
  return (
    <div>
      <div className="flex flex-col lg:flex-row items-center gap-4 mb-12">
        <div className="flex-[4]">
          <h2 className="text-4xl text-gray-500 text-right font-bold">
            Who are we?
          </h2>
        </div>
        <div className="flex-[6]">
          <h3 className="text-gray-500 text-xl">
            {
              "BAYC was created by four friends who set out to make some dope apes, test our skills, and try to build something (ridiculous)."
            }
          </h3>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {members.map((member, idx) => {
          return (
            <div key={idx}>
              <div>
                <img src={member.imageSource} />
              </div>
              <h3 className="text-xl text-white text-center mt-4">
                {member.name}
              </h3>
              <h4 className="italic text-gray-300 text-center">
                {member.quote}
              </h4>
            </div>
          );
        })}
      </div>
    </div>
  );
};
