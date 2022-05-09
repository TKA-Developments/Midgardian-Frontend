import { FaGamepad, FaRocket } from "react-icons/fa";
import { StepsRow } from "../../../common/components/base/steps/StepsRow";

export const Roadmap = () => {
  return (
    <div
      id="roadmap"
      style={{
        background:
          "linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url('/img/roadmap-min.png')",
        backgroundSize: "cover",
      }}
      className=" flex justify-center w-full py-16 font-special-elite"
    >
      <div className="py-16 max-w-5xl mx-10">
        <h2 className="text-center mb-4 text-[48px] font-bold text-primary">
          Roadmap
        </h2>
        <p className="text-center text-on-background mb-12 text-[18px]">
          {`This roadmap outlines our goals and where we want to take
            Midgardian. We have a lot of ideas and concepts that we are working
            on. It may evolve over time and hopefully become even better!`}
        </p>
        <StepsRow
          steps={[
            {
              title: "Launch 1",
              description:
                "5000 NFT of Midgardian base class: Warrior, Cleric, Archer, Thief, Mage",
              icon: () => <FaRocket className="text-primary" size={35} />,
            },
            {
              title: "Launch 2",
              description:
                "10000 NFT of 2nd Job evolution of the base classes: Knight, Paladin, Priest, Monk, Hunter, Bard, Assassin, Rogue, Wizard, Sage",
              icon: () => <FaRocket className="text-primary" size={35} />,
            },
            {
              title: "Launch Games?",
              description:
                "We work hard with the community to launch any projects or initiatives that is of interest to the community. Be it meetups, products, services, or maybe even games!",
              icon: () => <FaGamepad className="text-primary" size={35} />,
            },
          ]}
        />
      </div>
    </div>
  );
};
