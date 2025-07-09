"use client";
import Image from "next/image";
import { ChevronUp, ArrowRight } from "lucide-react";
import TechnologyButton from "../technology/technologyButton";

import { useState } from "react";

const ProjectCard = ({ title, desc, images, technologies }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`bg-zinc-900 px-5 py-3 rounded-[20px] max-w-[340px] lg:max-w-[470px] mb-10 overflow-hidden transition-all duration-500 ease-in-out ${
        open == true ? "max-h-[1000px]" : "max-h-[7.5rem]"
      }`}
    >
      <div className="flex justify-between items-center">
        <h3 className="text-myGreen text-[1.2rem]">{title}</h3>
        <button onClick={() => setOpen(!open)}>
          <ChevronUp className="text-white h-10 w-10 " />
        </button>
      </div>

      <p
        className={`text-white mb-3 transition-all duration-150 leading-8 ${
          open == true ? "" : "text-opacity-65"
        }`}
      >
        {desc}
      </p>
      <div className="imageContainer flex overflow-x-scroll snap-x snap-mandatory">
        {images.map((src, key) => {
          return (
            <Image
              src={src}
              width={500}
              height={500}
              alt="screenshot"
              className="mx-4 snap-center flex-none"
              key={key}
            />
          );
        })}
      </div>
      <div className="flex items-center text-myGreen mt-6">
        <a className="font-medium">Open project </a>
        <ArrowRight className=" ml-1" />
      </div>
      <div className="technologies mt-6 flex flex-wrap justify-center">
        {technologies.map((name, key) => {
          return (
            <TechnologyButton name={name} className="mr-5 mb-5" key={key} />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectCard;
