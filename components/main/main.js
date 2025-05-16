import React from "react";

import ContactButton from "@/components/contactButton/contactButton";

const Main = () => {
  return (
    <main
      id="Home"
      className={`h-screen flex flex-col items-center text-center snap-center`}
    >
      <div className="max-w-screen-sm mt-40">
        <h1 className="text-myGreen ml-5">Hello!</h1>
        <h2 className="ml-5">My name is Rey Isaac</h2>
        <h3 className="mt-3 mb-12 ml-5">
          Code, design, interaction. This is my portfolio, where creativity
          meets technology.
        </h3>
        <ContactButton className="ml-0 text-[1.8rem] mb-44 p-2 mt-[20%]" />
      </div>
    </main>
  );
};

export default Main;
