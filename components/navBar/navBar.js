"use client";

const NavBar = () => {
  return (
    <div
      className={`flex flex-col text-[28px] fixed top-[50%] translate-y-[-50%] ml-8`}
    >
      <a href="#Home" className="group nav">
        Home
        <div className=" bg-myGreen min-h-1 mr-[100%] group-hover:mx-0 transition-all duration-[170ms] ease-linear rounded-[1px]"></div>
      </a>
      <a href="#About" className="group nav">
        About Me
        <div className=" bg-myGreen min-h-1 mr-[100%] group-hover:mx-0 transition-all duration-[170ms] ease-linear rounded-[1px]"></div>
      </a>
      <a href="#Myskills" className="group nav">
        My Skills
        <div className=" bg-myGreen min-h-1 mr-[100%] group-hover:mx-0 transition-all duration-[170ms] ease-linear rounded-[1px]"></div>
      </a>
      <a href="#MyProjects" className="group nav">
        My Projects
        <div className=" bg-myGreen min-h-1 mr-[100%] group-hover:mx-0 transition-all duration-[170ms] ease-linear rounded-[1px]"></div>
      </a>
    </div>
  );
};

export default NavBar;
