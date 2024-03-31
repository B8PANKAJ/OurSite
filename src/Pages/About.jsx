import React, { useEffect } from "react";
import { TiWorld } from "react-icons/ti";
import { TbDeviceMobileMessage } from "react-icons/tb";
import { FaCartFlatbed } from "react-icons/fa6";
import { GiGamepad } from "react-icons/gi";
import aboutus from "../Images/aboutus.png";
import aboout from "../Images/aboout.png";
import purpose from "../Images/purpose.png";

const About = () => {
  const features = [
    {
      title: "Cutting-Edge Technology",
      description:
        "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.",
      icon: <TbDeviceMobileMessage size={30} color="white" />,
    },
    {
      title: "Proven Expertise",
      description:
        "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.",
      icon: <TiWorld size={30} color="white" />,
    },
    {
      title: "Reliable Support",
      description:
        "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.",
      icon: <FaCartFlatbed size={30} color="white" />,
    },
    {
      title: "Innovation with Purpose",
      description:
        "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.",
      icon: <GiGamepad size={30} color="white" />,
    },
  ];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section>
      <div className="relative object-cover object-center h-auto">
        <img
          className="w-full h-[500px] object-cover object-center"
          src={aboutus}
          alt="Your Image"
        />
        <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 text-white z-10">
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-light">
            About Us
          </p>
          <p className="text-base sm:text-[8px] md:text-[12px] lg:text-[16px] xl:text-[20px] font-extralight">
            Empowering Dreams, Inspiring Change – Unveiling <br /> the Story
            Behind Our Passion.
          </p>
        </div>
      </div>
      <div className="container mx-auto flex md:px-24 md:py-10 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full mb-5 md:mb-0 md:w-1/2 w-3/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={aboout}
          />
        </div>
        <div className="lg:flex-grow mt-5 md:mt-0 md:w-1/5 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center ml-8">
          <span className="text-orange-400">______ OUR STORY</span>
          <h1 className="text-xl font-bold tracking-tight mb-3 text-black sm:text-4xl sm:leading-10 md:text-3xl md:leading-normal sm:text-left md:text-left">
            Navigating Innovation our journey in redefining the digital
            Landscape
          </h1>
          <p className="mb-8 md:pl-0 pl-2 pr-2 leading-none text-black sm:text-left md:text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p className="mb-5 md:pl-0 pl-2 pr-2 leading-none text-black">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <p className="mb-8 md:pl-0 pl-2 pr-2 leading-none text-black">
            The purpose of lorem ipsum is to create a natural looking block of
            text (sentence, paragraph, page, etc.) that doesn't distract from
            the layout.
          </p>
        </div>
      </div>
      <div className="">
        <span className="text-orange-400 pl-[30%]">______ why choose us</span>
        <h1 className="text-xl font-bold tracking-tight mb-3 text-black sm:text-4xl sm:leading-10 md:text-3xl md:leading-normal text-center">
          Elevate your digital experience choosing <br /> excellence, trusting
          innovation
        </h1>
        <div className=" flex flex-wrap p-8">
          {features.map((feature, index) => (
            <div key={index} className="w-full px-4 md:w-1/2 lg:w-1/4">
              <div className="mb-9 rounded-xl py-8 px-7 shadow-md transition-all hover:shadow-lg sm:p-9 lg:px-6 xl:px-9 bg-gray-200 h-80">
                <div className="bg-black p-4 rounded-full h-14 w-14 flex justify-center items-center">
                  <div className=" inline-block">{feature.icon}</div>
                </div>
                <div>
                  <h3 className="mb-4 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
                    {feature.title}
                  </h3>
                  <p className="text-base font-medium text-body-color">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="relative">
        <img className="w-full h-auto" src={purpose} alt="Your Image" />
        <div className="absolute top-1/2 left-1/4 sm:left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white z-10 text-center">
          <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-light">
            _____ Delivering Passionately
          </p>
          <h1 className="text-xs sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold tracking-tight mb-3">
            Navigating Innovation our journey in redefining the digital
            Landscape
          </h1>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-lg font-extralight">
            We believe that by understanding each other, engaging and
            collaborating consistently with each other, even at the most
            challenging moments of our journey together, we can create
            opportunities and bring happiness to people internally, externally,
            and beyond!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
