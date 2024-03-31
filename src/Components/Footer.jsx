import React from "react";
import {
  RiFacebookCircleFill,
  RiTwitterXFill,
  RiInstagramFill,
} from "react-icons/ri";
import { FaLinkedin, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-100">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6  text-black flex flex-wrap justify-center flex justify-between">
        <div className="p-5">
          <div className="text-xs uppercase text-black font-bold">Company</div>
          <Link className="my-3 block hover:underline" to="/About">
            About Us
          </Link>
          <Link className="my-3 block hover:underline" to="/services">
            Services
          </Link>
          <Link className="my-3 block hover:underline" to="/portfolio">
            Portfolio
          </Link>
          <Link className="my-3 block hover:underline" to="/Career">
            Career
          </Link>
          <Link className="my-3 block hover:underline" to="/Blog">
            Blog
          </Link>
        </div>
        <div className="p-5">
          <div className="text-xs uppercase text-black font-bold">Services</div>

          <Link
            className="my-3 block hover:underline"
            to="/services/webdevelopment-design"
          >
            Web Design & Development
          </Link>
          <Link
            className="my-3 block hover:underline"
            to="/services/moblie-application"
          >
            Mobile Applications
          </Link>
          <Link
            className="my-3 block hover:underline"
            to="/services/video-editing"
          >
            Video Editing
          </Link>
          <Link
            className="my-3 block hover:underline"
            to="/services/social-media"
          >
            Social Media Graphics
          </Link>
          <Link className="my-3 block hover:underline" to="/services/ai">
            Artificial Intelligence
          </Link>
        </div>
        <div className="p-5">
          <div className="text-xs uppercase text-black font-bold">
            Contact Info
          </div>

          <p className="my-3 block ">
            <span className="font-semibold">Email: </span>contact@website.com
          </p>
          <p className="my-3 block ">
            <span className="font-semibold">Call: </span>+91 987654321
          </p>
          <p className="my-3 block ">
            <span className="font-semibold">Call: </span>+91 987654321
          </p>
        </div>
        <div className="p-5">
          <div className="text-xs uppercase text-black font-bold">
            Follow Us
          </div>
          <div className="flex justify-center items-center gap-2 mt-3 flex-wrap cursor-pointer">
            <p className="bg-gray-200 p-3 text-black rounded font-extrabold text-xl hover:bg-gray-400 duration-300 ease-all">
              <a href="https://facebook.com" target="_blank">
                {" "}
                <RiFacebookCircleFill />
              </a>
            </p>
            <p className="bg-gray-200 p-3 text-black rounded font-extrabold text-xl hover:bg-gray-400 duration-300 ease-all ">
              <a href="https://twitter.com" target="_blank">
                <RiTwitterXFill />
              </a>
            </p>
            <p className="bg-gray-200 p-3 text-black rounded font-extrabold text-xl hover:bg-gray-400 duration-300 ease-all">
              <a href="https://instagram.com" target="_blank">
                <RiInstagramFill />
              </a>
            </p>
            <p className="bg-gray-200 p-3 text-black rounded font-extrabold text-xl hover:bg-gray-400 duration-300 ease-all">
              <a href="https://linkedin.com" target="_blank">
                <FaLinkedin />
              </a>
            </p>
            <p className="bg-gray-200 p-3 text-black rounded font-extrabold text-xl hover:bg-gray-400 duration-300 ease-all">
              <a href="https://youtube.com" target="_blank">
                <FaYoutube />
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center border-t border-gray-400 h-11 flex-wrap">
        <p className="text-xs">
          © Copyright 2024 Website Name. All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
