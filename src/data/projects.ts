import DigiwizeLogo from "@/assets/DigiWizeLogo.svg";
import ShareMyDoodleLogo from "@/assets/sharemydoodleLogo.png";

export type ProjectId =
  | "triptiler"
  | "share-my-doodle"
  | "digiwize"
  | "stacksensai"
  | "havoc"
  | "flash-card-generator"
  | "sudoku-solver";

export type Project = {
  id: ProjectId;
  title: string;
  description: string;
  imageUrl?: string;
  link?: string;
};

export const projects: Project[] = [
  {
    id: "triptiler",
    title: "TripTiler",
    description:
      "A mobile app for itinerary planning featuring swipe-based activity discovery, drag-and-drop day scheduling, and real-time trip sharing between friends. Built with a Flutter client targeting native iOS and Android, a Go backend exposing REST APIs, and containerised services deployed on Google Cloud Run for serverless autoscaling.",
    link: "https://triptiler.com",
  },
  {
    id: "share-my-doodle",
    title: "Share My Doodle",
    description:
      "A collaborative drawing social media platform where users can create, share, and interact with doodles. Built with React, NestJs, Typescript, and Supabase.",
    imageUrl: ShareMyDoodleLogo,
    link: "https://sharemydoodle.com",
  },
  {
    id: "digiwize",
    title: "Digiwize",
    description:
      "Leading my capstone team and developing a cross-repository code and productivity analytics platform/SaaS. Initiated development operations (DevOps) with an easy/efficient CI/CD pipeline, and engineered API authentication with JWT and user encryption. Built with React, ShadCN, NestJs, Typescript, and PostgreSQL. Hosted on AWS S3, RDS and ECS with Docker.",
    imageUrl: DigiwizeLogo,
    link: "https://digiwize.solutions",
  },
  {
    id: "stacksensai",
    title: "StackSensai",
    description:
      "Saas web app to create and recommend technologies for a given project based on a prompt. Engineered front-end dashboard and backend authentication for a seamless user experience. Built with React, Typescript, Material UI, AWS Amplify & Cognito and OpenAI API.",
  },
  {
    id: "havoc",
    title: "Havoc",
    description:
      "Havoc was a 3D fast-paced third-person arena shooter. This was built in a small group of 2-3 people. I was a core contributor to the project, focusing on the enemy AI and gameplay mechanics. Built with Unity and C#.",
    link: "/projects/havoc",
  },
  {
    id: "flash-card-generator",
    title: "Flash Card Generator",
    description:
      "This automatic flashcard generator 2023 would take a pdf file (usually my lectures) and then create an Anki flashcard deck making studying a lot more efficient. Built with Python, PyPDF2, OpenAI API and AnkiConnect.",
    link: "https://github.com/Dean-Overton/uow-tools/tree/feature/flashcard_gen",
  },
  {
    id: "sudoku-solver",
    title: "Sudoku Solver",
    description:
      "Engineered front-end dashboard and backend authentication for a Saas web app to create and recommend technologies for a given project based on a prompt. Collaboratively in a team. Built with Django.",
  },
];

export const getProject = (id: ProjectId): Project => {
  const project = projects.find((p) => p.id === id);
  if (!project) throw new Error(`Project not found: ${id}`);
  return project;
};
