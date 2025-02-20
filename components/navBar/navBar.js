"use client";

const NavBar = () => {
  return (
    <div className="flex flex-col text-white text-[28px] ml-[150px] fixed top-1/2 -translate-y-1/2 -mt-16 space-y-16">
      <a className="group block">
        Home
        <div className=" bg-myGreen min-h-1 mr-[100%] group-hover:mx-0 transition-all duration-[170ms] ease-linear rounded-[1px]"></div>
      </a>
      <a className="group block">
        About Me
        <div className=" bg-myGreen min-h-1 mr-[100%] group-hover:mx-0 transition-all duration-[170ms] ease-linear rounded-[1px]"></div>
      </a>
      <a className="group block">
        My Skills
        <div className=" bg-myGreen min-h-1 mr-[100%] group-hover:mx-0 transition-all duration-[170ms] ease-linear rounded-[1px]"></div>
      </a>
      <a className="group block">
        My Projects
        <div className=" bg-myGreen min-h-1 mr-[100%] group-hover:mx-0 transition-all duration-[170ms] ease-linear rounded-[1px]"></div>
      </a>
    </div>
  );
};

export default NavBar;
