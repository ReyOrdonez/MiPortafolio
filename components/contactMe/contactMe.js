"use client";

const ContactMe = () => {
  return (
    <section
      id="ContactMe"
      className="h-screen flex flex-col snap-center text-left mx-5"
    >
      <div className="max-w-[800px] lg:ml-[20vw] mt-[25vh] bg-[rgb(235,235,235)] dark:bg-black transition-colors duration-100">
        <h2>Let's work together!</h2>
        <p className="mt-5">
          I'm open to both <label>remote</label> and <label>on-site </label>
          opportunities.
        </p>
        <div className="flex items-center mt-12">
          <img src="/gmail.svg" alt="gmail logo" className="w-10 h-10 mr-3" />
          <a href="mailto:rey55isaac@gmail.com">rey55isaac@gmail.com</a>
        </div>
        <div className="flex items-center mt-10">
          <img
            src="/linkedin.svg"
            alt="linkedin logo"
            className="w-10 h-10 mr-3"
          />
          <a
            href="https://www.linkedin.com/in/rey-isaac/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.linkedin.com/in/rey-isaac/
          </a>
        </div>
        <div className="flex items-center mt-10">
          <img src="/github.svg" alt="gmail logo" className="w-10 h-10 mr-3" />
          <a
            href="https://github.com/ReyOrdonez"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/ReyOrdonez
          </a>
        </div>
      </div>
      <a
        href="/myCv.pdf"
        download="ReyIsaac.pdf"
        className="lg:ml-[22%] mt-20 font-poppins font-light px-4 py-1 text-[1.8rem] inline-block shrink-0 grow-0 self-start relative transition-all duration-[199ms] group hover:text-slate-200 text-myGreen border-solid border-[3px] border-myGreen rounded-md "
      >
        download cv
        <div className="group group-hover:w-[100%] transition-all duration-150 absolute z-[-2] bg-myGreen h-[100%] w-[0%] inset-0"></div>
      </a>
    </section>
  );
};

export default ContactMe;
