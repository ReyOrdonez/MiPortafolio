"use client";

import ToggleThemeButtonMobile from "@/components/toggleThemeButtonMobile/toggleThemeButtonMobile";
import ContactButton from "@/components/contactButton/contactButton";

import { Poppins, Inter } from "next/font/google";
const poppins = Poppins({ subsets: ["latin"], weight: ["400"] });
const inter = Inter({ subsets: ["latin"], weight: ["400"] });

export default function Home() {
  return (
    <div className="text-center text-white snap-y overflow-y-scroll snap-mandatory h-screen">
      <ToggleThemeButtonMobile className="fixed top-0 right-0 mt-4" />
      <main
        id="Home"
        className={`h-screen flex flex-col items-center ${poppins.className} text-center snap-center`}
      >
        <div className="max-w-screen-sm ml-5 mt-40">
          <h1 className="text-myGreen">Hello!</h1>
          <h2>My name is Rey Isaac</h2>
          <h3 className="mt-3 mb-12">
            Code, design, interaction. This is my portfolio, where creativity
            meets technology.
          </h3>
          <ContactButton className="text-[1.8rem] mb-44 p-2 mt-[20%]" />
        </div>
      </main>
      <section
        id="About"
        className={`h-screen ml-5 pb-5 ${inter.className} text-left snap-center flex flex-col justify-center`}
      >
        <h2 className={` ${poppins.className} pb-8`}>About me</h2>
        <div className="flex flex-col gap-12">
          <p>
            I’m <label>Frontend Developer</label> with experience in{" "}
            <label>React, Redux, Next.js</label>. I also have knowledge of{" "}
            <label>TypeScript</label>.
          </p>
          <p>
            I'm passionate about building <label>dynamic</label> and{" "}
            <label>minimalist</label> web <label>applications </label>and I’m
            always looking for opportunities to grow.
          </p>
          <p>
            Currenty I’m studying on my own at home, I'm always working to
            improve my skills.
          </p>
          <p>Feel free to explore my projects.</p>
        </div>
      </section>
    </div>
  );
}
