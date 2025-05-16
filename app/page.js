"use client";

import Main from "@/components/main/main";
import AboutMe from "@/components/aboutMe/aboutMe";
import ToggleThemeButtonMobile from "@/components/toggleThemeButtonMobile/toggleThemeButtonMobile";

import { Poppins, Inter } from "next/font/google";

export default function Home() {
  return (
    <div className="text-center text-white snap-y overflow-y-scroll snap-mandatory h-screen">
      <ToggleThemeButtonMobile className="fixed top-0 right-0 mt-4" />
      <Main />
      <AboutMe />
    </div>
  );
}
