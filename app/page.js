"use client";

import ToggleThemeButtonMobile from "@/components/toggleThemeButtonMobile/toggleThemeButtonMobile";
import ContactButton from "@/components/contactButton/contactButton";

import { Poppins } from "next/font/google";
const poppins = Poppins({ subsets: ["latin"], weight: ["400"] });

export default function Home() {
  return (
    <div className="text-center text-white">
      <ToggleThemeButtonMobile className="fixed top-0 right-0 mt-4" />
      <main
        className={`flex flex-col items-center ${poppins.className} text-center`}
      >
        <div className="max-w-screen-sm ml-5 mt-48">
          <h1 className="text-[3rem] text-left text-myGreen max-w-[600px]">
            Hello!
          </h1>
          <h2 className="text-left text-[1.5rem] max-w-[600px]">
            My name is Rey Isaac
          </h2>
          <h3 className="text-[0.6rem] text-left mt-3 mb-12 max-w-[600px]">
            Code, design, interaction. This is my portfolio, where creativity
            meets technology.
          </h3>
          <ContactButton className="text-[1.8rem] mb-44 p-2 mt-[20%]" />
        </div>
      </main>
    </div>
  );
}
