import { ProjectCard } from "../ProjectCard";
import { projects } from "@/data/projects";
import "./index.css";

function ProjectSection() {
  return (
    <main className="w-full p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 max-w-7xl mx-auto place-items-center">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            link={project.link}
          />
        ))}
      </div>
    </main>
  );
}

export default ProjectSection;
