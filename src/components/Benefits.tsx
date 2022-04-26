import { useEffect, useState } from "react";
import { useWindowSize } from "../hooks/useWindowSize";
import {
  FaChartBar,
  FaGhost,
  FaGlobe,
  FaNetworkWired,
  FaPen,
  FaPeopleArrows,
} from "react-icons/fa";
import { Cards } from "./base/cards/Cards";

export const Benefits = () => {
  const { width: windowWidth } = useWindowSize();

  const [styleSign, setStyleSign] = useState<object>({});

  useEffect(() => {
    if ((windowWidth ?? 0) < 1024) {
      setStyleSign({
        backgroundImage: `url('/img/board.svg')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      });
    } else {
      setStyleSign({
        backgroundImage: `url('/img/board.svg')`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      });
    }
  }, [windowWidth]);

  return (
    <div
      className="py-16 font-special-elite h-full w-full lg:w-auto"
      style={styleSign}
    >
      <div
        className="mx-auto w-96 mb-8 py-5 rotate-6 flex flex-row justify-center items-center"
        style={{
          backgroundImage: `url('/img/Sign.svg')`,
          backgroundSize: "auto",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <h3 className="align-middle py-5 text-center text-[48px] font-bold text-primary">
          The Benefits
        </h3>
      </div>
      <Cards
        cardsData={[
          {
            title: "Biggest Crypto MMORPG Community",
            icon: () => <FaPeopleArrows className="text-primary" size={30} />,
          },
          {
            title: "Expand Your Network",
            icon: () => <FaNetworkWired className="text-primary" size={30} />,
          },
          {
            title: "Own Full Commercial Rights",
            icon: () => <FaPen className="text-primary" size={30} />,
          },
          {
            title: "2000+ Provably Rare MMORPG Characters",
            icon: () => <FaGhost className="text-primary" size={30} />,
          },
          {
            title: "Grow Your Characters Through Involvement",
            icon: () => <FaChartBar className="text-primary" size={30} />,
          },
          {
            title: "Explore MMORPG Metaverses",
            icon: () => <FaGlobe className="text-primary" size={30} />,
          },
        ]}
      />
    </div>
  );
};
