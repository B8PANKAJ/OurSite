import React from "react";
import { Link } from "react-router-dom";
import salesforce from "../Images/salesforce.png";
import blog2 from "../Images/blog2.png";
import blog3 from "../Images/blog3.png";
import dms1 from "../Images/dms1.png";

const Blog = () => {
  return (
    <section>
      <div className="relative overflow-hidden object-cover object-center animate-fade animate-normal scroll-smooth">
        <img
          className="w-full h-[500px] object-cover object-center"
          src={dms1}
          alt="Your Image"
        />
        <div className="absolute top-0 w-full h-full flex flex-col justify-center text-white">
          <div className="md:left-[10%] max-w-[1100px] m-auto absolute p-4">
            <h1 className="font-light text-5xl md:text-5xl sm:text-xl">
              Blogs
            </h1>
            <p className="max-w-[600px] font-extralight py-2 text-xl ">
              Boost Your Online Presence with Expert Digital Marketing
              Strategies
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-center items-center mt-4 mb-4 bg-white gap-3 flex-wrap max-w-full">
          <Link to="/Blog/:eefg475">
            <div className="relative overflow-hidden cursor-pointer rounded">
              <img
                className="w-[300px] transition-transform duration-300 transform hover:scale-110"
                src={salesforce}
                alt="Card"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-transparent text-white p-4">
                <span>01/01/2024</span>
                <div className="font-bold text-xl mb-2">Card Title</div>
                <p className="text-gray-100 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
          </Link>
          <div className="relative overflow-hidden cursor-pointer rounded">
            <img
              className="w-[300px] transition-transform duration-300 transform hover:scale-110"
              src={blog2}
              alt="Card"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-transparent text-white p-4">
              <div className="font-bold text-xl mb-2">Card Title</div>
              <p className="text-gray-100 text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
          <div className="relative overflow-hidden cursor-pointer rounded">
            <img
              className="w-[300px] transition-transform duration-300 transform hover:scale-110"
              src={blog3}
              alt="Card"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-transparent  text-white p-4">
              <div className="font-bold text-xl mb-2">Card Title</div>
              <p className="text-gray-100 text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
