"use client";

import ProjectCard from "../projectCard/projectCard";
import projects from "../../data/projects";

const Projects = () => {
  return (
    <section
      id="MyProjects"
      className={`h-screen px-5 min-h-screen text-left flex flex-col snap-start overflow-scroll hide-scrollbar`}
    >
      <h2 className="mb-14 mt-28 lg:ml-[20vw]">My projects</h2>
      <div className=" items-center flex flex-col lg:ml-[20vw] lg:max-w-[60vw]">
        {projects.map((project, key) => (
          <ProjectCard
            title={project.title}
            desc={project.desc}
            images={project.images}
            technologies={project.technologies}
            link={project.link}
            key={key}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
