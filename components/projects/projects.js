"use client";

import ProjectCard from "../projectCard/projectCard";
import projects from "../../data/projects";

const Projects = () => {
  return (
    <section
      id="MyProjects"
      className={`h-screen min-h-screen text-left flex flex-col snap-start overflow-scroll hide-scrollbar`}
    >
      <h2 className="mb-14 mt-28 mx-5 lg:ml-[20vw]">My projects</h2>
      <div className="w-screen items-center flex flex-col lg:flex-row lg:ml-[20vw] lg:max-w-[60vw] lg:justify-between lg:items-start lg:flex-wrap">
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
