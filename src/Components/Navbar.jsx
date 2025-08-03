import React, { useState } from "react";
import { NavLink } from "react-router";
import { Link } from "react-scroll";

const Navbar = () => {
  const [activLink, setActivLink] = useState("");

  const link = (
    <>
      <li>
        <Link
          to="home"
          smooth={true}
          duration={500}
          offset={-70}
          spy={true}
          onClick={() => setActivLink("home")}
          activeClass={
            activLink === "home"
              ? "font-bold border-b-2 border-[#e65309] pb-1"
              : ""
          }
          className=" cursor-pointer"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          to="about"
          smooth={true}
          duration={500}
          offset={-70}
          spy={true}
          onClick={() => setActivLink("about")}
          activeClass={
            activLink === "about"
              ? "font-bold border-b-2 border-[#e65309] pb-1"
              : ""
          }
          className="cursor-pointer"
        >
          About
        </Link>
      </li>
      <li>
        <Link
          to="projects"
          smooth={true}
          duration={500}
          offset={-70}
          spy={true}
          onClick={() => setActivLink("projects")}
          activeClass={
            activLink === "projects"
              ? "font-bold border-b-2 border-[#e65309] pb-1"
              : ""
          }
          className=" cursor-pointer"
        >
          Projects
        </Link>
      </li>
      <li>
        <Link
          to="skills"
          smooth={true}
          duration={500}
          offset={-70}
          spy={true}
          onClick={() => setActivLink("skills")}
          activeClass={
            activLink === "skills"
              ? "font-bold border-b-2 border-[#e65309] pb-1"
              : ""
          }
          className=" cursor-pointer"
        >
          Skills
        </Link>
      </li>
      <li>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          offset={-70}
          spy={true}
          onClick={() => setActivLink("contact")}
          activeClass={
            activLink === "contact"
              ? "font-bold border-b-2 border-[#e65309] pb-1"
              : ""
          }
          className=" cursor-pointer"
        >
          Contact
        </Link>
      </li>
    </>
  );

  return (
    <div className="navbar sticky top-0 z-50 bg-white bg-opacity-5 backdrop-blur-lg border-opacity-20  shadow-sm border-b border-gray-100">
      <div className="lg:w-10/12 w-full mx-auto flex justify-between items-center">
        {/* Navbar Start */}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
            >
              {link}
            </ul>
          </div>
          <div className="hidden lg:block">
            <img sizes="" src="/logo.png" alt="" />
          </div>
        </div>

        {/* Navbar Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 flex gap-6">
            {link}
            <div className="block lg:hidden">
              <img sizes="" src="/favicontow.png" alt="" />
            </div>
          </ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end">
          <button className="hover:bg-[#e65309] px-4 py-2 text-sm bg-black text-white rounded cursor-pointer">
            <a href="/Resume of Md Soriful Hasan.pdf" download>
              Download CV
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
