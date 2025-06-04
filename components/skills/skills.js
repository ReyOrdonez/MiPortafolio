"use client";

import Image from "next/image";

const Skills = () => {
  return (
    <section
      id="Myskills"
      className={`h-screen mx-5 pb- text-left snap-center flex flex-col justify-center`}
    >
      <h2 className="pb-10">My skills</h2>
      <div className="flex flex-wrap justify-between">
        <div className="container inline-block size-auto mx-3 my-6">
          <Image src={"/images/html.svg"} width={75} height={75} alt="html" />
          <h3 className="text-center">HTML</h3>
        </div>
        <div className="container inline-block size-auto mx-3 my-6">
          <Image src={"/images/css.svg"} width={75} height={75} alt="css" />
          <h3 className="text-center">CSS</h3>
        </div>
        <div className="container inline-block size-auto mx-3 my-6">
          <Image
            src={"/images/js.svg"}
            width={75}
            height={75}
            alt="javascript"
          />
          <h3 className="text-center">Javascript</h3>
        </div>
        <div className="container inline-block size-auto mx-3 my-6">
          <Image
            src={"/images/nextjs.svg"}
            width={75}
            height={75}
            alt="next js"
          />
          <h3 className="text-center">Nextjs</h3>
        </div>
        <div className="container inline-block size-auto mx-3 my-6">
          <Image src={"/images/react.svg"} width={75} height={75} alt="react" />
          <h3 className="text-center">React</h3>
        </div>
        <div className="container inline-block size-auto mx-3 my-6">
          <Image src={"/images/redux.svg"} width={75} height={75} alt="redux" />
          <h3 className="text-center">Redux</h3>
        </div>
        <div className="container inline-block size-auto mx-3 my-6">
          <Image
            src={"/images/tailwind.svg"}
            width={75}
            height={75}
            alt="tailwind"
          />
          <h3 className="text-center">Tailwind</h3>
        </div>
      </div>
    </section>
  );
};

export default Skills;
