"use client";

const NavBar = ({ className }) => {
  return (
    <div className={`flex flex-col text-white text-[28px] ${className}`}>
      <a className="group">
        Home
        <div className=" bg-myGreen min-h-1 mr-[100%] group-hover:mx-0 transition-all duration-[170ms] ease-linear rounded-[1px]"></div>
      </a>
      <a className="group">
        About Me
        <div className=" bg-myGreen min-h-1 mr-[100%] group-hover:mx-0 transition-all duration-[170ms] ease-linear rounded-[1px]"></div>
      </a>
      <a className="group">
        My Skills
        <div className=" bg-myGreen min-h-1 mr-[100%] group-hover:mx-0 transition-all duration-[170ms] ease-linear rounded-[1px]"></div>
      </a>
      <a className="group">
        My Projects
        <div className=" bg-myGreen min-h-1 mr-[100%] group-hover:mx-0 transition-all duration-[170ms] ease-linear rounded-[1px]"></div>
      </a>
    </div>
  );
};

export default NavBar;
