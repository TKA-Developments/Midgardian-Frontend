import { useEffect, useState } from "react";

export const Jumbotron = () => {
  const [layers, setLayers] = useState({
    layer1: 0,
    layer2: 0,
  });

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setLayers({
        layer1: y * 0.4,
        layer2: y * 0.2,
      });
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative overflow-y-hidden flex justify-center w-full h-full">
      <img
        className="w-full"
        src="/img/parallax/3-min.png"
        alt="Sky and mountains"
      />
      <img
        className="absolute bottom-0 w-full"
        src="/img/parallax/2-min.png"
        alt="Town and mountains"
        style={{
          bottom: layers.layer2,
        }}
      />
      <img
        className="absolute z-10"
        alt="Wizard sitting on the cliff edge"
        src="/img/parallax/1-min.png"
        style={{
          bottom: layers.layer1,
        }}
      />
    </section>
  );
};
