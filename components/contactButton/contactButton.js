"use client";

import { Poppins } from "next/font/google";
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600"] });

const ContactButton = ({ className }) => {
  return (
    <button
      className={`text-myGreen border-solid border-[3px] border-myGreen px-8 py-4 ${poppins.className} text-[28px] font-semibold rounded-sm ${className}`}
    >
      Contact Me!
    </button>
  );
};

export default ContactButton;
