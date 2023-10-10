"use client";
import React, { useState } from "react";
import { Link } from "react-scroll";

function Navbar() {
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
  };
  return (
    <nav>
      <div className="bg-[white]  h-[20vh] z-[400] sticky top-0 flex flex-row  justify-between  items-center p-5">
        <div className="logo  ">
          <img src="/brainz.png" alt="" style={{ height: "23vh" }} />
        </div>
        <div className="md:block hidden">
          <ul className=" mr-10 flex flex-row  gap-8 items-center  ">
            <Link
              activeClass="active"
              to="hero"
              spy={true}
              smooth={true}
              offset={-70}
              className=" cursor-pointer"
              duration={500}
            >
              <li>Course</li>
            </Link>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              className=" cursor-pointer"
              duration={500}
            >
              <li>Career</li>
            </Link>
            <Link
              activeClass="active"
              to="service"
              spy={true}
              smooth={true}
              offset={-70}
              className=" cursor-pointer"
              duration={500}
            >
              <li>About us</li>
            </Link>
            <a
              href="/signin"
              class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              Sign in
            </a>
          </ul>
        </div>

        <button
          onClick={toggleMenu}
          className={`lg:hidden z-[500] ${menu ? "toggle open" : "toggle"}`}
        >
          <div className="first"></div>
          <div className="second"></div>
          <div className="third"></div>
        </button>
      </div>
      <div className="w-full">
        <div
          className={`flex  z-[500]  w-[250px]  transition-[all,3s,ease-linear] ${
            menu ? "ml-0" : " ml-[-550px]"
          } flex-col px-5 bg-white md:hidden fixed top-0 left-0 bottom-0 items-start gap-4`}
        >
          <ul className=" flex flex-col pt-32 gap-8 items-start  ">
            <Link
              activeClass="active"
              to="hero"
              spy={true}
              smooth={true}
              offset={-70}
              className=" cursor-pointer"
              duration={500}
            >
              <li>Course</li>
            </Link>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              className=" cursor-pointer"
              duration={500}
            >
              <li>Career</li>
            </Link>
            <Link
              activeClass="active"
              to="service"
              spy={true}
              smooth={true}
              offset={-70}
              className=" cursor-pointer"
              duration={500}
            >
              <li>About us</li>
            </Link>
             <a href="/signin" class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Sign in
             </a>
          
            
          </ul>
        
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
