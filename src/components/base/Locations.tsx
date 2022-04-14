import { useState } from "react";
import { ButtonChoice } from "./ButtonChoice";
import { ImageCarousel } from "./ImageCarousel";

export enum ContinentChoice {
  All,
  Asia,
  Europe,
  Africa,
  America,
  Australia,
}

export const Locations = () => {
  return (
    <div className="w-full flex flex-col justify-between items-center max-h-[1080px] bg-[url('/img/world-map.jpg')] bg-cover py-4">
      <ButtonChoice choice={ContinentChoice} value={ContinentChoice.All} />
      <div className="max-w-5xl my-5">{/* <ImageCarousel /> */}</div>
      <button className="bg-background-root rounded font-semibold px-5 py-1">
        See More
      </button>
    </div>
  );
};
