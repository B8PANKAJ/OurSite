import React, { useEffect } from "react";
import mobileapp1 from "../Images/mobileapp1.png";
import mobileapp2 from "../Images/mobileapp2.png";
import mobileapp3 from "../Images/mobileapp3.png";
import mobileapp4 from "../Images/mobileapp4.png";
import mobilleapp5 from "../Images/mobilleapp5.png";
import mobileapp6 from "../Images/mobileapp6.png";
import { TiWorld } from "react-icons/ti";
import { TbDeviceMobileMessage } from "react-icons/tb";
import { FaCartFlatbed } from "react-icons/fa6";
import { GiGamepad } from "react-icons/gi";
import TechStackCoursal from "../Components/TechstackCoursal";

const MobileApp = () => {
  const features2 = [
    {
      title: "UI/UX Design",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      icon: <TbDeviceMobileMessage size={30} color="white" />,
    },
    {
      title: "Prototyping",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      icon: <TiWorld size={30} color="white" />,
    },
    {
      title: "Native App Development",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      icon: <FaCartFlatbed size={30} color="white" />,
    },
    {
      title: "Integration Services",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      icon: <GiGamepad size={30} color="white" />,
    },
    {
      title: "Cross-Platform App Development",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      icon: <GiGamepad size={30} color="white" />,
    },
    {
      title: "Backend Development",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      icon: <GiGamepad size={30} color="white" />,
    },
    {
      title: "Quality Assurance & Testing",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      icon: <GiGamepad size={30} color="white" />,
    },
    {
      title: "Maintenance and Support",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      icon: <GiGamepad size={30} color="white" />,
    },
    {
      title: "App Store Optimization",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      icon: <GiGamepad size={30} color="white" />,
    },
  ];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section>
      <div className="relative overflow-hidden object-cover object-center">
        <img
          className="w-full h-[500px] object-cover object-center"
          src={mobileapp1}
          alt="Your Image"
        />
        <div className="absolute top-0 w-full h-full flex flex-col justify-center text-white">
          <div className="md:left-[10%] max-w-[1100px] m-auto absolute p-4">
            <h1 className="font-light text-5xl md:text-5xl sm:text-xl">
              Mobile Applications Design <br /> & Development
            </h1>
            <p className="max-w-[600px] font-extralight py-2 text-xl ">
              Crafting Apps That Transform Ideas into Reality
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto flex md:px-24 md:py-10 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full mb-5 md:mb-0 md:w-1/2 w-3/6">
          <img
            className="object-cover object-center rounded"
            alt="mobileapp2"
            src={mobileapp2}
          />
        </div>
        <div className="lg:flex-grow mt-5 md:mt-0 md:w-1/5 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center ml-8">
          <span className="text-orange-400">______ OVERVIEW</span>
          <h1 className="text-xl font-bold tracking-tight mb-3 text-black sm:text-4xl sm:leading-10 md:text-3xl md:leading-normal sm:text-left md:text-left">
            Unlock The Power of Mobile with Our Custom Solutions
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
        </div>
      </div>
      <div className="text-center bg-gray-50">
        <div className="pt-8">
          <span className="text-orange-400 mr-[10%] uppercase">
            ______ Services Offered
          </span>
          <h2 className="text-xl font-bold tracking-tight mb-3 text-black sm:text-2xl sm:leading-10 md:text-3xl md:leading-normal">
            From Concept to Launch: Your Mobile <br /> App Journey Starts Here
          </h2>
        </div>
        <div className=" max-h-fit w-full flex flex-col text-center">
          <div className=" flex flex-wrap p-8">
            {features2.map((feature, index) => (
              <div key={index} className="w-full px-4 md:w-1/2 lg:w-1/3">
                <div className="mb-9 rounded-xl py-8 px-7 shadow-md transition-all hover:shadow-lg sm:p-9 lg:px-6 xl:px-9 bg-gray-200 max-h-fit">
                  <div className="flex justify-start">
                    <div className="bg-black p-4 rounded-full h-14 w-14 flex justify-center items-center">
                      <div className=" inline-block">{feature.icon}</div>
                    </div>
                  </div>
                  <div>
                    <h3 className=" mt-1 mb-3 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl text-left">
                      {feature.title}
                    </h3>
                    <p className="text-base font-medium text-body-color text-left">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="text-center">
        <div className="pt-8">
          <span className="text-orange-400 mr-[10%] uppercase">
            ______ Portfolio
          </span>
          <h2 className="text-xl font-bold tracking-tight mb-3 text-black sm:text-2xl sm:leading-10 md:text-3xl md:leading-normal">
            Exploring our digital journey success <br /> stories & innovations
          </h2>
        </div>
        <div className="w-full flex justify-center items-center mt-2">
          <div className="flex flex-wrap max-w-[1000px] gap-5 justify-center items-center">
            {[
              {
                src: mobileapp3,
                alt: "Mobile App 3",
                text: "Text for Mobile App 3",
              },
              {
                src: mobileapp4,
                alt: "Mobile App 4",
                text: "Text for Mobile App 4",
              },
              {
                src: mobilleapp5,
                alt: "Mobile App 5",
                text: "Text for Mobile App 5",
              },
              {
                src: mobileapp6,
                alt: "Mobile App 6",
                text: "Text for Mobile App 6",
              },
            ].map((item, index) => (
              <div key={index} className="relative">
                <img
                  src={item.src}
                  className="max-w-[330px] h-auto cursor-pointer hover:scale-105 duration-300 shadow-bottom"
                  alt={item.alt}
                />
                <div className="absolute bottom-0 w-full text-white text-center bg-black bg-opacity-25 p-2">
                  {item.text}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center items-center mt-5 mb-6">
          <button className="bg-white text-black border border-black p-4 rounded-lg transition-all duration-300 hover:bg-orange-400 hover:text-white hover:border-white">
            See Full Portfolio
          </button>
        </div>
      </div>
      <div className="bg-gray-50 h-[400px] w-full flex flex-col text-center">
        <div className="pt-8">
          <span className="text-orange-400 mr-[10%] uppercase">
            ______ video editing tools
          </span>
          <h2 className="text-xl font-bold tracking-tight mb-3 text-black sm:text-2xl sm:leading-10 md:text-3xl md:leading-normal">
            Technologies we work on
          </h2>
        </div>
        <TechStackCoursal />
      </div>
    </section>
  );
};

export default MobileApp;
