import React, { useState } from "react";
import { RiMenu4Fill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";

const Navbar = () => {
  let Links = [
    { name: "About Us", link: "/About" },
    { name: "Services", link: "/services" },
    { name: "Portfolio", link: "/portfolio" },
    { name: "Blog", link: "/Blog" },
    { name: "Contact Us", link: "/contact" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className=" w-full sticky top-0 left-0 z-50 animate-fade-down animate-normal">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center gap-1">
          <Link to="/">
            <span>Logo</span>
          </Link>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-6 cursor-pointer md:hidden w-9 h-9 text-xl"
        >
          {open ? <RxCross2 /> : <RiMenu4Fill />}
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-12" : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li className="md:ml-8 md:my-0 my-7 font-semibold" key={link.name}>
              <Link
                to={link.link}
                className="text-black hover:text-orange-400 duration-500 focus:text-orange-400"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
