import { useEffect, useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import SwiperInstance from "swiper";

export const Carrousel = () => {
  const [controlledSwiper, setControlledSwiper] =
    useState<SwiperInstance | null>(null);
  const [controlledSwiper2, setControlledSwiper2] =
    useState<SwiperInstance | null>(null);
  useEffect(() => {
    if (controlledSwiper) {
      controlledSwiper.wrapperEl.classList.add("ease-linear");
      controlledSwiper.on("slideNextTransitionEnd", () => {
        controlledSwiper.slideNext(5000);
      });
      controlledSwiper.slideNext(5000);
    }
  }, [controlledSwiper]);
  useEffect(() => {
    if (controlledSwiper2) {
      controlledSwiper2.wrapperEl.classList.add("ease-linear");
      controlledSwiper2.on("slidePrevTransitionEnd", () => {
        controlledSwiper2.slidePrev(5000);
      });
      controlledSwiper2.slidePrev(5000);
    }
  }, [controlledSwiper2]);

  return (
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
          freeMode={false}
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
          freeMode={false}
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
  );
};
