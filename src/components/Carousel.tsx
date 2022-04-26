import { useEffect, useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import SwiperInstance, { Autoplay } from "swiper";

export const Carrousel = () => {
  const [controlledSwiper, setControlledSwiper] =
    useState<SwiperInstance | null>(null);
  const [controlledSwiper2, setControlledSwiper2] =
    useState<SwiperInstance | null>(null);
  useEffect(() => {
    function handleResize() {
      controlledSwiper?.autoplay.start();
      controlledSwiper2?.autoplay.start();
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [controlledSwiper, controlledSwiper2]);

  return (
    <>
      <style>{`
        .swiper-wrapper {
          transition-timing-function: linear;
        }
      `}</style>
      <div className="flex flex-col md:flex-row gap-5">
        <div
          style={{
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 0%, black 30%, black 70%, transparent 100%)",
            maskImage:
              "linear-gradient(to bottom, transparent 0%, black 30%, black 70%, transparent 100%)",
          }}
          className="flex max-h-[650px] max-w-[200px]"
        >
          <Swiper
            onSwiper={setControlledSwiper}
            direction="vertical"
            preventInteractionOnTransition={true}
            slidesPerView={3}
            spaceBetween={5}
            loop={true}
            speed={5000}
            modules={[Autoplay]}
            autoplay={{ delay: 0 }}
            freeMode={false}
            observer={true}
            observeParents={true}
          >
            <SwiperSlide>
              <img src="/img/nft/1.png" className="object-cover" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/img/nft/2.png" className="object-cover" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/img/nft/3.png" className="object-cover" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/img/nft/4.png" className="object-cover" />
            </SwiperSlide>
          </Swiper>
        </div>
        <div
          style={{
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 0%, black 30%, black 70%, transparent 100%)",
            maskImage:
              "linear-gradient(to bottom, transparent 0%, black 30%, black 70%, transparent 100%)",
          }}
          className="hidden md:flex max-h-[650px] max-w-[200px]"
        >
          <Swiper
            onSwiper={setControlledSwiper2}
            direction="vertical"
            preventInteractionOnTransition={true}
            slidesPerView={3}
            spaceBetween={5}
            loop={true}
            speed={5000}
            modules={[Autoplay]}
            autoplay={{ delay: 0, reverseDirection: true }}
            freeMode={false}
            observer={true}
            observeParents={true}
          >
            <SwiperSlide>
              <img src="/img/nft/5.png" className="object-cover" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/img/nft/6.png" className="object-cover" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/img/nft/7.png" className="object-cover" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/img/nft/8.png" className="object-cover" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};
