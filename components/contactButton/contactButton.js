"use client";

const ContactButton = ({ className }) => {
  return (
    <button
      className={`w-auto transition-all duration-[199ms] hover:text-green-950 hover:border-green-950 text-myGreen border-solid border-[3px] border-myGreen font-semibold rounded-md ${className} font-poppins`}
    >
      Contact Me!
    </button>
  );
};

export default ContactButton;
