import React from "react";
import alert2 from "../Images/alert2.png";
import { Link } from "react-router-dom";

const Alert2 = () => {
  return (
    <div className="relative max-w-full h-auto overflow-hidden">
      <img
        className="w-full h-[200px] object-cover object-center"
        src={alert2}
        alt="Alert Image"
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full">
        <p className="text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl text-white">
          Reach out, let's innovate together
        </p>
        <div className="flex justify-center items-center mt-3">
          <Link
            to="/contact"
            className="bg-transparent border duration-300 transition-all border-gray-50 rounded-md border-solid px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm text-white hover:bg-orange-500 hover:text-white hover:border-transparent"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Alert2;
