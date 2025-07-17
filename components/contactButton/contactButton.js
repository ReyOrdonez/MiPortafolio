"use client";

const ContactButton = ({ className }) => {
  return (
    <a
      href="#ContactMe"
      className={` w-auto relative transition-all duration-[199ms] group hover:text-slate-200 text-myGreen border-solid border-[3px] border-myGreen font-semibold rounded-md ${className} font-poppins`}
    >
      Contact Me!
      <div className="absolute inset-0 w-[0] h-[100%] bg-myGreen z-[-2] group-hover:w-[100%] transition-all duration-150"></div>
    </a>
  );
};

export default ContactButton;
