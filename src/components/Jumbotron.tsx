import { useEffect, useState } from "react";

export const Jumbotron = () => {
  const [layers, setLayers] = useState({
    layer3: 0,
    layer2: 0,
  });

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      console.log(y);
      setLayers({
        layer3: y * 0.5,
        layer2: y * 0.25,
      });
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative flex justify-center w-full h-full">
      <img
        className="absolute bottom-0 w-full"
        src="/img/parallax/3.png"
        style={{
          top: layers.layer3,
        }}
      />
      <img
        className="absolute bottom-0 w-full"
        src="/img/parallax/2.png"
        style={{
          top: layers.layer2,
        }}
      />
      <img className="w-full z-10" src="/img/parallax/1.png" />
    </section>
  );
};
