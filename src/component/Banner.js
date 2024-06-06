import React from 'react';
import { ReactTyped } from "react-typed";

function Banner() {
  return (
    <div className="bg-blue-300 w-full py-[50px]">
      <div className="max-w-[1240] py-[100px] mx-auto text-center font-bold">
        <div className="text-xl md:text-3xl md:p-[240]">Learn with US</div>
        <h2 className="text-white text-5xl md:text-[80px] md:p-[24px]">
          Grow with us
        </h2>
        <div className="text-[20px] md:text-[50px] md:p-[24px] text-white">
          Learn
          <ReactTyped className='text-black pl-3 text-5xl md:text-[50px] md:p-[24px]'
            strings={["Web Development", "Blockchain", "Data Structure"]}
            typeSpeed={90}
            backSpeed={90}
            loop
          ></ReactTyped>
        </div>
      </div>
    </div>
  );
}

export default Banner