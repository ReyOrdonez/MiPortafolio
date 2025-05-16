"use client";
import { useState } from "react";

const NavBarMobile = () => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={` z-40 fixed flex transform transition-left duration-[120ms] ease-in left-[-70%] ${
        open == false ? "left-[-70%]" : "left-[0]"
      }`}
    >
      <div
        className={`opacity-90 flex flex-col text-white bg-darkTheme p-12 h-screen w-[70vw] font-inter`}
      >
        <a className="group mb-12 text-[20px] hover:text-myGreen">
          Home
          <div className="bg-myGreen min-h-1 mr-[100%] group-hover:mx-0 transition-all duration-[190ms] ease-linear rounded-[1px]"></div>
        </a>
        <a className="group mb-12 text-[20px] hover:text-myGreen">
          About
          <div className="bg-myGreen min-h-1 mr-[100%] group-hover:mx-0 transition-all duration-[190ms] ease-linear rounded-[1px]"></div>
        </a>
        <a className="group mb-12 text-[20px] hover:text-myGreen">
          My skills
          <div className="bg-myGreen min-h-1 mr-[100%] group-hover:mx-0 transition-all duration-[190ms] ease-linear rounded-[1px]"></div>
        </a>
        <a className="group mb-12 text-[20px] hover:text-myGreen">
          Projects
          <div className="bg-myGreen min-h-1 mr-[100%] group-hover:mx-0 transition-all duration-[190ms] ease-linear rounded-[1px]"></div>
        </a>
      </div>
      <button
        onClick={() => setOpen(!open)}
        className={`transform ${
          open == false ? "rotate-0" : "rotate-[300deg]"
        } ml-5 mt-4 w-0 h-0 border-t-[22px] border-b-[22px] border-l-[38px] border-l-myGreen border-t-transparent border-b-transparent transition-rotate duration-[200ms] ease-in`}
      ></button>
    </div>
  );
};

export default NavBarMobile;
