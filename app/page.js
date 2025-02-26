"use client";
import ContactButton from "@/components/contactButton/contactButton";
import { Poppins } from "next/font/google";
const poppins = Poppins({ subsets: ["latin"], weight: ["400"] });

export default function Home() {
  return (
    <div className="text-center text-white">
      <main className={`mt-[12%] ${poppins.className} w-[100%]`}>
        <h1 className="text-left ml-[40%] text-[64px]">
          Hello!!, <br />
          my name is Rey Isaac.
        </h1>
        <h6 className="text-left ml-[40%] mt-[3%]">
          Code, design, interaction. This is my portfolio, where creativity
          meets technology.
        </h6>
        <ContactButton className="mt-[3%] right-0 absolute mr-[13%]" />
      </main>
      <section></section>
    </div>
  );
}
