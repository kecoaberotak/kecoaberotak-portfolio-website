import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className="bg-biruDark h-screen flex justify-center items-start flex-col p-10">
      <section className="flex gap-1">
        <h2 className="text-4xl font-bold mb-4 text-putihDark">Projects</h2>
        <div className=" w-8 h-8 bg-transparent border-b-2 border-biruLight"></div>
      </section>
      <section className="flex flex-col gap-1">
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
      </section>
    </div>
  );
};

export default Projects;