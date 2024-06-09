import React from "react";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <section className="w-full flex justify-center  pb-10 ">
      <div className=" w-[90%] sm:w-[65%] lg:w-[75%]">
        <h1 className="text-center text-3xl py-10">Projects</h1>
        <div className="flex flex-col just flex-wrap gap-10 md:flex-row lg:flex-row">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
        </div>
      </div>
    </section>
  );
}

export default Projects;
