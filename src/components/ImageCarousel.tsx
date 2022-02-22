import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";

export const ImageCarousel = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      modules={[Autoplay, Pagination]}
      loop={true}
      freeMode={true}
      autoplay={{
        delay: 2000,
      }}
      pagination={{
        clickable: true,
        dynamicBullets: true,
      }}
    >
      <SwiperSlide>
        <img src="/img/meka/meka_01.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/img/meka/meka_02.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/img/meka/meka_03.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/img/meka/meka_05.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/img/meka/meka_06.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/img/meka/meka_07.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/img/meka/meka_08.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/img/meka/meka_09.jpg" />
      </SwiperSlide>
    </Swiper>
  );
};
