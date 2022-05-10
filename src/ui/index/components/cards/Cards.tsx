import { Card, CardProps } from "./Card";
import { mulberry32Noise } from "../../../../util/random";

export type CardsProps = {
  cardsData: Array<CardProps>;
};

export const Cards = ({ cardsData }: CardsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {cardsData.map((cardData, idx) => {
        const rotation = mulberry32Noise(idx * 2) * 30 - 15;
        return (
          <Card
            key={idx}
            {...cardData}
            containerStyle={{
              transform: `rotate(${rotation}deg)`,
              backgroundImage: `url('/img/Paper${(idx % 3) + 1}.svg')`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          />
        );
      })}
    </div>
  );
};
