import { Card, CardProps } from "./Card";

export type CardsProps = {
  cardsData: Array<CardProps>;
};

export const Cards = ({ cardsData }: CardsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {cardsData.map((cardData) => (
        <Card {...cardData} />
      ))}
    </div>
  );
};
