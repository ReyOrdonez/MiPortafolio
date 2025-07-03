"use client";

import Title from "@/components/home/title";
import AboutMe from "@/components/aboutMe/aboutMe";
import ToggleThemeButtonMobile from "@/components/toggleThemeButtonMobile/toggleThemeButtonMobile";
import Skills from "@/components/skills/skills";
import Projects from "@/components/projects/projects";

export default function Home() {
  return (
    <main className="text-center text-white snap-y overflow-y-scroll snap-mandatory h-screen hide-scrollbar lg:ml-[6vw]">
      <ToggleThemeButtonMobile className="fixed top-0 right-0 mt-4" />
      <Title />
      <AboutMe />
      <Skills />
      <Projects />
    </main>
  );
}
