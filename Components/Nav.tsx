"use client";
import { Bars3Icon } from "@heroicons/react/16/solid";
import React from "react";
import { Link } from "react-scroll";

interface Props {
  openNav: () => void;
}

const Navbar = ({ openNav }: Props) => {
  return (
    <>
      <div className="w-[100%] fixed z-[10000] top-0 h-[12vh] bg-[#141c27] shadow-md font-primary">
        <div className="flex items-center justify-between w-[80%] mx-auto h-[100%]">
          <h1 className="flex-[0.6] cursor-pointer text=[25px] text-white font-bold">
            WEB
            <span className="text-yellow-300">DEV</span>
          </h1>
          <Link
            to={"hero"}
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="nav-link"
          >
            Home
          </Link>
          <Link
            to={"about"}
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="nav-link"
          >
            About
          </Link>
          <Link
            to={"skills"}
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="nav-link"
          >
            Skills
          </Link>
          <Link
            to={"contact"}
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="nav-link"
          >
            Contact
          </Link>
          <div onClick={openNav}>
            <Bars3Icon className="w-[2rem] md:hidden h-[2rem] cursor-pointer text-yellow-300" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
