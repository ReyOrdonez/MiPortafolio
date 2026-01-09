"use client";
import Image from "next/image";
import { ChevronUp, ArrowRight } from "lucide-react";
import TechnologyButton from "../technology/technologyButton";

import { useState, useRef, useEffect } from "react";

const ProjectCard = ({ title, desc, images, technologies, link }) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);
  const [index, setIndex] = useState(null);

  useEffect(() => {
    slideTo(0);
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const slideWidth = container.offsetWidth;
      const index = Math.round(scrollLeft / slideWidth);
      setIndex(index);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  function slideTo(index) {
    const container = containerRef.current;
    if (!container) return;
    const slideWidth = container.offsetWidth;
    setIndex(index);
    container.scrollTo({
      left: slideWidth * index,
      behavior: "smooth",
    });
  }

  return (
    <div
      className={`bg-white  dark:bg-zinc-900 dark:text-white px-5 py-3 rounded-[20px] max-w-[340px] lg:max-w-[870px] mb-10 overflow-hidden transition-all duration-500 ease-in-out ${
        open == true ? "max-h-[1000px]" : "max-h-[7.5rem]"
      }`}
    >
      <div className="flex justify-between items-center">
        <h3 className="text-myGreen text-[1.2rem]">{title}</h3>
        <button onClick={() => setOpen(!open)}>
          <ChevronUp
            className={`dark:text-white h-10 w-10 transition-all duration-150 ease-out ${
              open == true && "rotate-180"
            }`}
          />
        </button>
      </div>
      <p
        className={`text-black dark:text-white mb-3 transition-all duration-150 leading-8 ${
          open == true ? "" : "text-opacity-50"
        }`}
      >
        {desc}
      </p>
      <div
        ref={containerRef}
        className="flex overflow-x-scroll snap-x snap-mandatory hide-scrollbar"
      >
        {images.map((src, key) => {
          return (
            <Image
              src={src}
              width={1000}
              height={1000}
              alt="screenshot"
              className="mx-4 snap-center rounded-sm"
              key={key}
            />
          );
        })}
      </div>
      <div className="flex justify-center mt-3">
        {images.map((_, i) => {
          return (
            <button
              onClick={() => slideTo(i)}
              key={i}
              className={`${
                index == i && "bg-zinc-800 dark:bg-white"
              } transition-colors duration-150 ease-linear h-4 w-4 mx-3 rounded-[100%] border-solid border-[3px] dark:border-white border-zinc-800`}
            ></button>
          );
        })}
      </div>
      <div className="flex items-center text-myGreen mt-3">
        <a href={link} target="_blank" className="font-medium">
          Open project
        </a>
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
