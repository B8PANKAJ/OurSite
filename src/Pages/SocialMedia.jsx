import React, { useEffect } from "react";
import webdev1 from "../Images/webdev1.png";
import webdev2 from "../Images/webdev2.png";
import portfolio1 from "../Images/portfolio1.png";
import portfolio2 from "../Images/portfolio2.png";
import portfolio3 from "../Images/portfolio3.png";
import portfolio4 from "../Images/portfolio4.png";
import { TiWorld } from "react-icons/ti";
import { TbDeviceMobileMessage } from "react-icons/tb";
import { FaCartFlatbed } from "react-icons/fa6";
import { GiGamepad } from "react-icons/gi";
import TechStackCoursal from "../Components/TechstackCoursal";

const SocialMedia = () => {
  const features = [
    {
      title: "Discovery and Planning",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      icon: <TbDeviceMobileMessage size={30} color="white" />,
    },
    {
      title: "Design Prototyping",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      icon: <TiWorld size={30} color="white" />,
    },
    {
      title: "Development and Testing",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      icon: <FaCartFlatbed size={30} color="white" />,
    },
    {
      title: "Deployment and Launch",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      icon: <GiGamepad size={30} color="white" />,
    },
    {
      title: "Post-launch Support",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      icon: <GiGamepad size={30} color="white" />,
    },
  ];
  const features2 = [
    {
      title: "Custom Website Design",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      icon: <TbDeviceMobileMessage size={30} color="white" />,
    },
    {
      title: "Design Prototyping",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      icon: <TiWorld size={30} color="white" />,
    },
    {
      title: "Development and Testing",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      icon: <FaCartFlatbed size={30} color="white" />,
    },
    {
      title: "Deployment and Launch",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      icon: <GiGamepad size={30} color="white" />,
    },
    {
      title: "Post-launch Support",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      icon: <GiGamepad size={30} color="white" />,
    },
    {
      title: "Post-launch Support",
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
      <div className="relative overflow-hidden object-cover object-center animate-fade animate-normal scroll-smooth">
        <img
          className="w-full h-[500px] object-cover object-center"
          src={webdev2}
          alt="Your Image"
        />
        <div className="absolute top-0 w-full h-full flex flex-col justify-center text-white">
          <div className="md:left-[10%] max-w-[1100px] m-auto absolute p-4">
            <h1 className="font-light text-5xl md:text-5xl sm:text-xl">
              SOCIAL MEDIA GRAPHICS
            </h1>
            <p className="max-w-[600px] font-extralight py-2 text-xl ">
              Crafting Digital Experiences, One Click at a Time.
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto flex md:px-24 md:py-10 md:flex-row flex-col items-center animate-fade-right animate-normal">
        <div className="lg:max-w-lg lg:w-full mb-5 md:mb-0 md:w-1/2 w-3/6">
          <img
            className="object-cover object-center rounded"
            alt="webdev1"
            src={webdev1}
          />
        </div>
        <div className="lg:flex-grow mt-5 md:mt-0 md:w-1/5 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center ml-8 animate-fade-left animate-normal">
          <span className="text-orange-400">______ OVERVIEW</span>
          <h1 className="text-xl font-bold tracking-tight mb-3 text-black sm:text-4xl sm:leading-10 md:text-3xl md:leading-normal sm:text-left md:text-left">
            Empowering your digital presence with innovative solutions.
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
      <div className="text-center bg-gray-50">
        <div className="pt-8">
          <span className="text-orange-400 mr-[10%] uppercase">
            ______ Services Offered
          </span>
          <h2 className="text-xl font-bold tracking-tight mb-3 text-black sm:text-2xl sm:leading-10 md:text-3xl md:leading-normal">
            Elevating your digital landscape <br /> with tailored solutions.
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
            <img
              src={portfolio1}
              className="max-w-[330px] h-auto cursor-pointer hover:scale-105 duration-300"
            />
            <img
              src={portfolio2}
              className="max-w-[330px] h-auto cursor-pointer hover:scale-105 duration-300"
            />
            <img
              src={portfolio3}
              className="max-w-[330px] h-auto cursor-pointer hover:scale-105 duration-300"
            />
            <img
              src={portfolio4}
              className="max-w-[330px] h-auto cursor-pointer hover:scale-105 duration-300"
            />
          </div>
        </div>

        <div className="flex justify-center items-center mt-5">
          <button className="bg-white text-black border border-black p-4 rounded-lg transition-all duration-300 hover:bg-orange-400 hover:text-white hover:border-white">
            See Full Portfolio
          </button>
        </div>
      </div>
      <div className="text-center">
        <div className="pt-8">
          <span className="text-orange-400 mr-[10%] uppercase">
            ______ the process
          </span>
          <h2 className="text-xl font-bold tracking-tight mb-3 text-black sm:text-2xl sm:leading-10 md:text-3xl md:leading-normal">
            Navigating your vision to reality <br /> our proven process
          </h2>
        </div>
        <div className=" flex flex-wrap p-8">
          {features.map((feature, index) => (
            <div key={index} className="w-full px-4 md:w-1/2 lg:w-1/5">
              <div className="mb-9 rounded-xl py-8 px-7 shadow-md transition-all hover:shadow-lg sm:p-9 lg:px-6 xl:px-9 bg-gray-200 max-h-fit">
                <div className="bg-black p-4 rounded-full h-14 w-14 flex justify-center items-center">
                  <div className=" inline-block">{feature.icon}</div>
                </div>
                <div>
                  <h3 className="mb-4 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl text-left">
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
      <div className="bg-gray-50 h-[400px] w-full flex flex-col text-center">
        <div className="pt-8">
          <span className="text-orange-400 mr-[10%] uppercase">
            ______ Web Design & Development tools
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

export default SocialMedia;
