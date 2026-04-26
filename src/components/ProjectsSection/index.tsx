import { ProjectCard } from "../ProjectCard";
import DigiwizeLogo from "../../assets/DigiWizeLogo.svg";
import ShareMyDoodleLogo from "../../assets/sharemydoodleLogo.png";
import "./index.css";

function ProjectSection() {
  return (
    <main className="w-full p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 max-w-7xl mx-auto place-items-center">
        <ProjectCard
          title="TripTiler"
          description="A mobile app for itinerary planning featuring swipe-based activity discovery, drag-and-drop day scheduling, and real-time trip sharing between friends. Built with a Flutter client targeting native iOS and Android, a Go backend exposing REST APIs, and containerised services deployed on Google Cloud Run for serverless autoscaling."
          link="https://triptiler.com"
        />
        <ProjectCard
          title="Share My Doodle"
          description="A collaborative drawing social media platform where users can create, share, and interact with doodles. Built with React, NestJs, Typescript, and Supabase."
          imageUrl={ShareMyDoodleLogo}
          link="https://sharemydoodle.com"
        />
        <ProjectCard
          title="Digiwize"
          description="Leading my capstone team and developing a cross-repository code and productivity analytics platform/SaaS. Initiated development operations (DevOps) with an easy/efficient CI/CD pipeline, and engineered API authentication with JWT and user encryption. Built with React, ShadCN, NestJs, Typescript, and PostgreSQL. Hosted on AWS S3, RDS and ECS with Docker."
          imageUrl={DigiwizeLogo}
          link="https://digiwize.solutions"
        />
        <ProjectCard
          title="StackSensai"
          description="Saas web app to create and recommend technologies for a given project based on a prompt. Engineered front-end dashboard and backend authentication for a seamless user experience. Built with React, Typescript, Material UI, AWS Amplify & Cognito and OpenAI API."
        />
        <ProjectCard
          title="Havoc"
          description="Havoc was a 3D fast-paced third-person arena shooter. This was built in a small group of 2-3 people. I was a core contributor to the project, focusing on the enemy AI and gameplay mechanics. Built with Unity and C#."
          imageUrl={""}
          link="/projects/havoc"
        />
      </div>
    </main>
  );
}

export default ProjectSection;
