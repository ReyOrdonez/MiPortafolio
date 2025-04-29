"use client";

import { Poppins } from "next/font/google";
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600"] });

const ContactButton = ({ className }) => {
  return (
    <button
      className={`w-auto transition-all duration-[199ms] hover:text-green-950 hover:border-green-950 text-myGreen border-solid border-[3px] border-myGreen ${poppins.className} font-semibold rounded-md ${className}`}
    >
      Contact Me!
    </button>
  );
};

export default ContactButton;
