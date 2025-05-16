import React from "react";

const AboutMe = () => {
  return (
    <section
      id="About"
      className={`h-screen ml-5 pb- text-left snap-center flex flex-col justify-center`}
    >
      <h2 className={` pb-8`}>About me</h2>
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
          Currenty I’m studying on my own at home, I'm always working to improve
          my skills.
        </p>
        <p>Feel free to explore my projects.</p>
      </div>
    </section>
  );
};

export default AboutMe;
