import React from "react";
import salesforce from "../Images/salesforce.png";
import blog2 from "../Images/blog2.png";
import blog3 from "../Images/blog3.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

export default function BlogCarousel() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        navigation={true}
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
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        modules={[Navigation]}
        className="mySwiper m-14"
      >
        <SwiperSlide className="overflow-hidden">
          <img
            src={salesforce}
            className="rounded-xl transform transition-transform duration-300 ease-in-out hover:scale-110 cursor-pointer"
            alt="Slide 1"
          />
          <div className="absolute bottom-0 left-0 w-full bg-transparent text-white p-4 text-left ">
            <span className="font-extralight">01/01/2024</span>
            <p className="text-2xl">
              The top Salesforce trends to expect in 2023
            </p>
            <p className="font-extralight">
              It's important for businesses to keep an eye on the latest trends
              in Salesforce.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="overflow-hidden">
          <img
            src={blog2}
            className="rounded-xl transform transition-transform duration-300 ease-in-out hover:scale-110"
            alt="Slide 1"
          />
          <div className="absolute bottom-0 left-0 w-full bg-transparent text-white p-4 text-left">
            <span className="font-extralight">01/01/2024</span>
            <p className="text-2xl">Cloud testing - The Ultimate Guide</p>
            <p className="font-extralight">
              Cloud computing is an internet-based platform that provides
              computing services..
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="overflow-hidden">
          <img
            src={blog3}
            className="rounded-xl transform transition-transform duration-300 ease-in-out hover:scale-110"
            alt="Slide 1"
          />
          <div className="absolute bottom-0 left-0 w-full bg-transparent text-white p-4 text-left">
            <span className="font-extralight">01/01/2024</span>
            <p className="text-2xl">Everything you need to know about QAOps</p>
            <p className="font-extralight">
              As part of QAOps framework, QA teams get involved from the initial
              phases of SDLC
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="overflow-hidden">
          <img
            src={salesforce}
            className="rounded-xl transform transition-transform duration-300 ease-in-out hover:scale-110"
            alt="Slide 1"
          />
          <div className="absolute bottom-0 left-0 w-full bg-transparent text-white p-4 text-left">
            <span className="font-extralight">01/01/2024</span>
            <p className="text-2xl">
              The top Salesforce trends to expect in 2023
            </p>
            <p className="font-extralight">
              It's important for businesses to keep an eye on the latest trends
              in Salesforce.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="overflow-hidden">
          <img
            src={blog2}
            className="rounded-xl transform transition-transform duration-300 ease-in-out hover:scale-110"
            alt="Slide 1"
          />
          <div className="absolute bottom-0 left-0 w-full bg-transparent text-white p-4 text-left">
            <span className="font-extralight">01/01/2024</span>
            <p className="text-2xl">
              The top Salesforce trends to expect in 2023
            </p>
            <p className="font-extralight">
              It's important for businesses to keep an eye on the latest trends
              in Salesforce.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
