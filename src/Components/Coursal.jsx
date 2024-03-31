import React from "react";
import coursal from "../Images/coursal.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "tailwindcss/tailwind.css";

export default function Coursal() {
  return (
    <div className="w-full h-full">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="text-center text-2xl bg-white flex justify-center items-center">
          <img src={coursal} />
        </SwiperSlide>
        <SwiperSlide className="text-center text-2xl bg-white flex justify-center items-center">
          <img src={coursal} />
        </SwiperSlide>
        <SwiperSlide className="text-center text-2xl bg-white flex justify-center items-center">
          <img src={coursal} />
        </SwiperSlide>
        <SwiperSlide className="text-center text-2xl bg-white flex justify-center items-center">
          <img src={coursal} />
        </SwiperSlide>
        <SwiperSlide className="text-center text-2xl bg-white flex justify-center items-center">
          <img src={coursal} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
