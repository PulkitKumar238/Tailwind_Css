import React from 'react'
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

function Header() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="bg-blue-500 p-4">
      <div className="max-w-[1240px] py-[14px] flex justify-between mx-auto items-center">
        <div className="text-3xl font-bold">Demo Website</div>

        <div>
          {toggle ? (
            <IoClose
              onClick={() => setToggle(!toggle)}
              className="text-white text-2xl md:hidden block"
            />
          ) : (
            <IoMenu
              onClick={() => setToggle(!toggle)}
              className="text-white text-2xl md:hidden block"
            />
          )}

          <ul className="hidden md:flex text-white gap-5 text-xl">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>More</li>
          </ul>
        </div>
      </div>
      <ul
        className={` duration-700  ease-in-out md:hidden w-1/3 h-full bg-black text-white fixed ${
          toggle ? `left-0` : `left-[-100%]`
        } top-[95px] `}
      >
        <li className="p-3 pt-6">Home</li>
        <li className="p-3">About</li>
        <li className="p-3">Contact</li>
        <li className="p-3">More</li>
      </ul>
    </div>
  );
}

export default Header;