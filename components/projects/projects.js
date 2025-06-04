"use client";

import ProjectCard from "../projectCard/projectCard";

const Projects = () => {
  return (
    <section
      id="Myskills"
      className={`h-screen min-h-screen text-left flex flex-col snap-start overflow-scroll`}
    >
      <h2 className="mb-14 mt-28 mx-5">My projects</h2>
      <div className="w-screen items-center flex flex-col">
        <ProjectCard
          title={"Portafolio personal"}
          desc={
            "Es el portafolio que estoy haciendo actualmente, basicamente sirve para mostrar todo los proyectos y avances que tengo hasta el momento, tiene un diseño minimalista, y es bastante sencillo de usar, es una galeria al final"
          }
          images={[
            "/screenshots/portafolio1.png",
            "/screenshots/portafolio2.png",
            "/screenshots/portafolio3.png",
          ]}
          technologies={["Javascript", "Redux", "React", "Next.js", "Tailwind"]}
        />
        <ProjectCard
          title={"Portafolio personal"}
          desc={
            "Es el portafolio que estoy haciendo actualmente, basicamente sirve para mostrar todo los proyectos y avances que tengo hasta el momento, tiene un diseño minimalista, y es bastante sencillo de usar, es una galeria al final"
          }
          images={[
            "/screenshots/portafolio1.png",
            "/screenshots/portafolio2.png",
            "/screenshots/portafolio3.png",
          ]}
          technologies={["Javascript", "Redux", "React", "Next.js", "Tailwind"]}
        />
        <ProjectCard
          title={"Portafolio personal"}
          desc={
            "Es el portafolio que estoy haciendo actualmente, basicamente sirve para mostrar todo los proyectos y avances que tengo hasta el momento, tiene un diseño minimalista, y es bastante sencillo de usar, es una galeria al final"
          }
          images={[
            "/screenshots/portafolio1.png",
            "/screenshots/portafolio2.png",
            "/screenshots/portafolio3.png",
          ]}
          technologies={["Javascript", "Redux", "React", "Next.js", "Tailwind"]}
        />
      </div>
    </section>
  );
};

export default Projects;
