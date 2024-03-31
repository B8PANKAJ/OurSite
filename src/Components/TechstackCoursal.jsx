import React from "react";
import html from "../Images/html.png";
import nextjs from "../Images/nextjs.png";
import AE from "../Images/AE.png";
import nodejs from "../Images/nodejs.png";
import reactjs from "../Images/react.png";
import python from "../Images/python.png";
import WordPress from "../Images/WordPress.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";

export default function TechStackCoursal() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        navigation={true}
        autoplay={{
          delay: 3000, // Delay in milliseconds between slides
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 30,
          },
        }}
        modules={[Autoplay, Navigation]}
        className="mySwiper m-14"
      >
        <SwiperSlide className="overflow-hidden">
          <div className="bg-white border border-slate-300">
            <img
              src={nodejs}
              className="rounded-xl w-full h-full object-cover object-center transform transition-transform duration-300 ease-in-out hover:scale-110 cursor-pointer"
              alt="Node.js"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="overflow-hidden">
          <div className="bg-white border border-slate-300">
            <img
              src={AE}
              className="rounded-xl w-full h-full object-cover object-center transform transition-transform duration-300 ease-in-out hover:scale-110"
              alt="Adobe After Effects"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="overflow-hidden">
          <div className="bg-white border border-slate-300">
            <img
              src={reactjs}
              className="rounded-xl w-full h-full object-cover object-center transform transition-transform duration-300 ease-in-out hover:scale-110"
              alt="React.js"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="overflow-hidden">
          <div className="bg-white border border-slate-300">
            <img
              src={nextjs}
              className="rounded-xl w-full h-full object-cover object-center transform transition-transform duration-300 ease-in-out hover:scale-110"
              alt="Next.js"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="overflow-hidden">
          <div className="bg-white border border-slate-300">
            <img
              src={WordPress}
              className="rounded-xl w-full h-full object-cover object-center transform transition-transform duration-300 ease-in-out hover:scale-110"
              alt="WordPress"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="overflow-hidden">
          <div className="bg-white border border-slate-300">
            <img
              src={python}
              className="rounded-xl w-full h-full object-cover object-center transform transition-transform duration-300 ease-in-out hover:scale-110"
              alt="Python"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="overflow-hidden">
          <div className="bg-white border border-slate-300">
            <img
              src={html}
              className="rounded-xl w-full h-full object-cover object-center transform transition-transform duration-300 ease-in-out hover:scale-110"
              alt="HTML"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
