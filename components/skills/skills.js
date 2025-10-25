"use client";

import Image from "next/image";

const Skills = () => {
  return (
    <section
      id="Myskills"
      className={`h-screen mx-5 text-left snap-center flex flex-col justify-center lg:max-w-[90vw]`}
    >
      <h2 className="pb-10 lg:ml-[20vw]">My skills</h2>
      <div className="flex flex-wrap justify-between lg:ml-[10vw] lg:justify-center">
        <div className="container inline-block size-auto mx-3 my-6 lg:mx-12">
          <Image
            src={"/images/html.svg"}
            width={200}
            height={200}
            alt="html"
            className="max-w-[75px] md:max-w-[100px] lg:max-w-[120px]"
          />
          <h3 className="text-center">HTML</h3>
        </div>
        <div className="container inline-block size-auto mx-3 my-6 lg:mx-14">
          <Image
            src={"/images/css.svg"}
            width={200}
            height={200}
            alt="css"
            className="max-w-[75px] md:max-w-[100px] lg:max-w-[120px]"
          />
          <h3 className="text-center">CSS</h3>
        </div>
        <div className="container inline-block size-auto mx-3 my-6 lg:mx-14">
          <Image
            src={"/images/js.svg"}
            width={200}
            height={200}
            alt="javascript"
            className="max-w-[75px] md:max-w-[100px] lg:max-w-[120px]"
          />
          <h3 className="text-center">Javascript</h3>
        </div>
        <div className="container inline-block size-auto mx-3 my-6 lg:mx-14">
          <Image
            src={"/images/nextjs.svg"}
            width={200}
            height={200}
            alt="next js"
            className="max-w-[75px] md:max-w-[100px] lg:max-w-[120px]"
          />
          <h3 className="text-center">Nextjs</h3>
        </div>
        <div className="container inline-block size-auto mx-3 my-6 lg:mx-14">
          <Image
            src={"/images/react.svg"}
            width={200}
            height={200}
            alt="react"
            className="max-w-[75px] md:max-w-[100px] lg:max-w-[120px]"
          />
          <h3 className="text-center">React</h3>
        </div>
        <div className="container inline-block size-auto mx-3 my-6 lg:mx-14">
          <Image
            src={"/images/redux.svg"}
            width={200}
            height={200}
            alt="redux"
            className="max-w-[75px] md:max-w-[100px] lg:max-w-[120px]"
          />
          <h3 className="text-center">Redux</h3>
        </div>
        <div className="container inline-block size-auto mx-3 my-6 lg:mx-14">
          <Image
            src={"/images/tailwind.svg"}
            width={200}
            height={200}
            alt="tailwind"
            className="max-w-[75px] md:max-w-[100px] lg:max-w-[120px]"
          />
          <h3 className="text-center">Tailwind</h3>
        </div>
      </div>
    </section>
  );
};

export default Skills;
