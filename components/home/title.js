"use client";

import ContactButton from "@/components/contactButton/contactButton";

const Title = () => {
  return (
    <section
      id="Home"
      className={`h-screen flex flex-col items-center text-center snap-center`}
    >
      <div className="ml-5 max-w-screen-sm mt-[25vh] text-left">
        <div className="bg-[rgb(235,235,235)] dark:bg-black transition-colors duration-200">
          <h1 className="inline text-myGreen ">Hello!</h1>
          <h2>My name is Rey Isaac</h2>
          <h3 className="mt-3 mb-12 ">
            Code, design, interaction. This is my portfolio, where creativity
            meets technology.
          </h3>
        </div>

        <ContactButton className="ml-0 lg:ml-[50%] text-[1.8rem] mb-44 p-4 mt-[10vh]" />
      </div>
    </section>
  );
};

export default Title;
