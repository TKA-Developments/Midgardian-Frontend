import { mulberry32Noise } from "../../../util/random";
import { Card, CardProps } from "./Card";

export type CardsProps = {
  cardsData: Array<CardProps>;
};

export const Cards = ({ cardsData }: CardsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {cardsData.map((cardData, idx) => {
        return (
          <Card
            key={idx}
            {...cardData}
            containerStyle={{
              transform: `rotate(${mulberry32Noise(idx * 2) * 30 - 15}deg)`,
            }}
          />
        );
      })}
    </div>
  );
};
