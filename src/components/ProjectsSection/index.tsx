import { ProjectCard } from "../ProjectCard";
import DigiwizeLogo from "../../assets/DigiWizeLogo.svg";
import ShareMyDoodleLogo from "../../assets/sharemydoodleLogo.png";

function ProjectSection() {
  return (
    <main className="min-h-screen w-full p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 max-w-7xl mx-auto place-items-center">
        <style jsx global>{`
          :root {
            --hc-card-radius: 24px;
          }
          .hc-wrapper {
            perspective: 600px;
            transform: translate3d(0, 0, 0.1px);
            position: relative;
          }
          .hc-wrapper::before {
            content: "";
            position: absolute;
            inset: -15px;
            background: radial-gradient(
                circle at 50% 50%,
                #4a90e2aa 1%,
                #073aff00 76%
              ),
              conic-gradient(
                from 124deg at 50% 50%,
                #6b73ffaa 0%,
                #4a90e2aa 40%,
                #4a90e2aa 60%,
                #6b73ffaa 100%
              );
            border-radius: inherit;
            transition: all 0.6s ease;
            filter: contrast(1.2) saturate(0.8) blur(40px);
            transform: scale(0.85);
            opacity: 0.4;
          }
          .hc-wrapper.active::before {
            filter: contrast(1) saturate(0.9) blur(40px);
            transform: scale(0.95);
            opacity: 0.7;
          }
          .hc-card {
            width: 320px;
            height: 480px;
            border-radius: var(--hc-card-radius);
            position: relative;
            background: radial-gradient(
                farthest-side circle at var(--pointer-x) var(--pointer-y),
                hsla(220, 60%, 80%, var(--card-opacity, 0)) 4%,
                hsla(220, 0%, 60%, 0) 100%
              ),
              radial-gradient(35% 52% at 55% 20%, #5a9fd488 0%, #073aff00 100%),
              radial-gradient(100% 100% at 50% 50%, #4a90e2aa 1%, #073aff00 76%),
              conic-gradient(
                from 124deg at 50% 50%,
                #6b73ffaa 0%,
                #4a90e2aa 40%,
                #4a90e2aa 60%,
                #6b73ffaa 100%
              );
            overflow: hidden;
            transform-style: preserve-3d;
            transition: transform 1s ease;
            transform: rotateY(var(--rotate-y, 0deg))
              rotateX(var(--rotate-x, 0deg));
          }
          .hc-card.active {
            transition: transform 0.1s ease;
          }
          .hc-card * {
            transform-style: preserve-3d;
          }
          .hc-inside {
            position: absolute;
            inset: 1px;
            border-radius: var(--hc-card-radius);
            background: linear-gradient(145deg, #2d2333 0%, #3a5e74 100%);
            transform: translateZ(0.1px);
            overflow: hidden;
          }
          .hc-shine {
            position: absolute;
            inset: 0;
            z-index: 3;
            background: repeating-linear-gradient(
                0deg,
                hsl(200, 40%, 65%) calc(5% * 1),
                hsl(220, 45%, 70%) calc(5% * 2),
                hsl(240, 50%, 75%) calc(5% * 3),
                hsl(260, 45%, 70%) calc(5% * 4),
                hsl(280, 40%, 65%) calc(5% * 5),
                hsl(300, 35%, 60%) calc(5% * 6),
                hsl(200, 40%, 65%) calc(5% * 7)
              ),
              repeating-linear-gradient(
                -45deg,
                #0e152e 0%,
                hsl(210, 15%, 55%) 3.8%,
                hsl(210, 25%, 60%) 4.5%,
                hsl(210, 15%, 55%) 5.2%,
                #0e152e 10%,
                #0e152e 12%
              );
            background-position: 0 var(--background-y, 50%),
              var(--background-x, 50%) var(--background-y, 50%);
            background-size: 500% 500%, 300% 300%;
            background-blend-mode: color-dodge;
            filter: brightness(0.6) contrast(1.2) saturate(0.6);
            opacity: 0.3;
            mix-blend-mode: color-dodge;
          }
          .hc-glare {
            position: absolute;
            inset: 0;
            z-index: 4;
            background: radial-gradient(
              farthest-corner circle at var(--pointer-x) var(--pointer-y),
              hsla(0, 0%, 100%, 0.4) 10%,
              hsla(0, 0%, 100%, 0) 80%
            );
            mix-blend-mode: overlay;
            opacity: calc(var(--pointer-from-center, 0) * 0.5 + 0.2);
          }
          .hc-content-wrapper {
            position: relative;
            z-index: 5;
            width: 100%;
            height: 100%;
            padding: 2rem;
            color: white;
            transform: translateZ(1px);
          }
        `}</style>
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
          link="https://www.digiwize.solutions"
        />
        <ProjectCard
          title="StackSensai"
          description="Saas web app to create and recommend technologies for a given project based on a prompt. Engineered front-end dashboard and backend authentication for a seamless user experience. Built with React, Typescript, Material UI, AWS Amplify & Cognito and OpenAI API."
          imageUrl={null}
          link={null}
        />
      </div>
    </main>
  );
}

export default ProjectSection;
