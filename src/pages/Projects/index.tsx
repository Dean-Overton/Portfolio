import ProjectSection from "../../components/ProjectsSection";
import Header from "../../components/Header";
import { useDocumentMeta } from "@/lib/useDocumentMeta";

const Projects = () => {
  useDocumentMeta({
    title: "Projects | Dean Overton",
    description:
      "A showcase of Dean Overton's software engineering projects, including Digiwize, TripTiler, Share My Doodle, StackSensai, Havoc, and more. Built with React, TypeScript, Go, NestJS, Python, Flutter, AWS, and GCP.",
    canonical: "https://deanoverton.com/projects",
  });

  return (
    <div className="pt-16">
      <Header title="Projects" />
      <ProjectSection />
    </div>
  );
};

export default Projects;
