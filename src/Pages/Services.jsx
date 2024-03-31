import React, { useEffect } from "react";
import servicebanner from "../Images/services.png";
import webdesign from "../Images/webdesign.png";
import mobileapps from "../Images/mobileapps.png";
import videoediting from "../Images/videoediting.png";
import ArtificialIntelligence from "../Images/ArtificialIntelligence.png";
import seo from "../Images/seo.png";
import socialmediagraphics from "../Images/socialmediagraphics.png";
import { Link } from "react-router-dom";

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section>
      <div className="relative overflow-hidden object-cover object-center">
        <img
          className="w-full h-[500px] object-cover object-center"
          src={servicebanner}
          alt="Your Image"
        />
        <div className="absolute top-0 w-full h-full flex flex-col justify-center text-white">
          <div className="md:left-[10%] max-w-[1100px] m-auto absolute p-4">
            <h1 className="font-light text-5xl md:text-7xl sm:text-xl">
              Services
            </h1>
            <p className="max-w-[600px] font-extralight py-2 text-xl ">
              Tech Solutions Tailored to Your Ambitions – Unleashing the Power
              of Seamless Services.
            </p>
          </div>
        </div>
      </div>
      <div className="text-center font-bold text-2xl mt-4 mb-4">
        <h2>
          Elevate your possibilities unleashing next-gen IT <br /> services for
          a digitally empowered future
        </h2>
        <div className="p-1 flex flex-wrap items-center justify-center gap-3 ">
          <Link to="/services/Webdevelopment-design">
            <img
              src={webdesign}
              alt="webdesign"
              className="rounded-md h-80 hover:scale-105 transform transition-all duration-300 cursor-pointer"
            />
          </Link>

          <Link to="/services/Moblie-Application">
            <img
              src={mobileapps}
              alt="mobileapps"
              className="rounded-md  hover:scale-105 h-80 transform transition-all duration-300 cursor-pointer"
            />
          </Link>
          <Link to="/services/Video-Editing">
            <img
              src={videoediting}
              alt="videoediting"
              className="rounded-md h-80 hover:scale-105 transform transition-all duration-300 cursor-pointer"
            />
          </Link>
          <Link to="/services/Ai">
            <img
              src={ArtificialIntelligence}
              alt="ArtificialIntelligence"
              className="rounded-md h-80 hover:scale-105 transform transition-all duration-300 cursor-pointer"
            />
          </Link>
          <Link to="/services/Social-Media">
            <img
              src={seo}
              alt="socialmediagraphics"
              className="rounded-md h-80 hover:scale-105 transform transition-all duration-300 cursor-pointer"
            />
          </Link>
          <Link to="/services/DigitalMarketing">
            <img
              src={socialmediagraphics}
              alt="seo"
              className="rounded-md h-80 hover:scale-105 transform transition-all duration-300 cursor-pointer"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
