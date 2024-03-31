import React, { useEffect } from "react";
import mobileapps from "../Images/mobileapps.png";
import videoediting from "../Images/videoediting.png";
import socialmediagraphics from "../Images/socialmediagraphics.png";
import seo from "../Images/seo.png";
import ArtificialIntelligence from "../Images/ArtificialIntelligence.png";
import webdesign from "../Images/webdesign.png";
import homehero from "../Images/homehero.png";
import { IoPlay } from "react-icons/io5";
import Coursal from "../Components/Coursal";
import BlogCoursal from "../Components/BlogCoursal";
import TechStackCoursal from "../Components/TechstackCoursal";
import { Link } from "react-router-dom";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="h-fit">
      <div className="top-bar flex justify-around items-center border-t border-solid border-gray-300 mt-5 mb-5 animate-fade-down">
        <div className="head-txt">
          <h2 className="text-2xl">
            Enabling Enterprises To <br /> Become Intelligent and{" "}
            <span className="bg-black text-orange-500 p-1">Futuristic</span>{" "}
          </h2>
        </div>
        <div className="read-icon flex justify-center items-center">
          <p>Learn More</p>
          <div className="icon-play ml-6 flex justify-center items-center h-9 w-9 border border-solid border-black rounded-full cursor-pointer transition-all ease-in-out duration-300 hover:border-orange-500 text-black hover:text-orange-500">
            <IoPlay />
          </div>
        </div>
      </div>
      <Coursal />
      <div className="container mx-auto flex md:px-24 md:py-10 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full mb-5 md:mb-0 md:w-1/2 w-3/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={homehero}
          />
        </div>
        <div className="lg:flex-grow mt-5 md:mt-0 md:w-1/5 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center ml-8">
          <span className="text-orange-400">______ ABOUT US</span>
          <h1 className="text-xl font-bold leading-9 tracking-tight mb-3 text-black sm:text-4xl sm:leading-10 md:text-5xl md:leading-normal">
            We add integrations that power your business
          </h1>
          <p className="mb-8 md:pl-0 pl-2 pr-2 leading-relaxed text-black">
            We design business-specific solutions to achieve tangible business
            impacts for our clients. We are striving to create synergy between
            new business challenges and emerging technologies and synergy
            between people internally and externally.
          </p>
          <div className="flex justify-center">
            <button className="bg-white text-black border border-black p-4 rounded-lg">
              Learn More
            </button>
          </div>
        </div>
      </div>

      <div className="grid bg-gray-50">
        <div className="col-span-2">
          <div className=" flex justify-center items-center">
            <div className="max-w-[330px]">
              <span className="text-orange-400">______ SERVICES</span>
              <h2 className="text-xl font-bold tracking-tight text-black sm:text-2xl sm:leading-10 md:text-xl md:leading-normal">
                Every new business milestone is an opportunity to create a
                compelling solution.
              </h2>
            </div>
          </div>
        </div>
        <div className="col-start-3">
          {" "}
          <img src={webdesign} alt="" />
        </div>
        <div className="col-start-4">
          {" "}
          <img src={mobileapps} alt="" />
        </div>
        <div className="col-start-4 row-start-2">
          <img src={seo} alt="" />
        </div>
        <div className="col-start-3 row-start-2">
          {" "}
          <img src={videoediting} alt="" />
        </div>
        <div className="col-start-2 row-start-2">
          {" "}
          <img src={socialmediagraphics} alt="" />
        </div>
        <div className="col-start-1 row-start-2">
          {" "}
          <img src={ArtificialIntelligence} alt="" />
        </div>
      </div>

      <div className="bg-gray-50 h-[400px] w-full flex flex-col text-center">
        <div className="pt-8">
          <span className="text-orange-400">______ Technology stacks</span>
          <h2 className="text-xl font-bold tracking-tight mb-3 text-black sm:text-2xl sm:leading-10 md:text-3xl md:leading-normal">
            Technologies we work on
          </h2>
        </div>
        <TechStackCoursal />
      </div>
      <div className="">
        <div className="text-center pt-5">
          <span className="text-orange-400">______ Blogs & articles</span>
          <h1 className="text-xl font-bold tracking-tight mb-3 text-black sm:text-2xl sm:leading-10 md:text-3xl md:leading-normal">
            Unraveling innovation dive into our blogosphere
          </h1>
        </div>
        <BlogCoursal />
        <div className="flex justify-center mb-3">
          <Link to="/Blog">
            <button className="bg-white text-black border border-black p-4 rounded-lg transition-all duration-300 hover:bg-orange-400 hover:text-white hover:border-white">
              Read More Blogs
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
