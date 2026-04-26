import AboutMe from "@/components/AboutMeSection";
import Header from "@/components/Header";
import { SocialLinks } from "@/components/ui/social-links";
import { Timeline } from "@/components/ui/timeline";
import { useEffect, useRef, useState } from "react";
import ProfileImage from "@/assets/headshot.png";
import Github from "@/assets/github.png";
import Instagram from "@/assets/instagram.png";
import LinkedIn from "@/assets/linkedin.png";
import TikTok from "@/assets/tiktok.png";
import { ProjectCard } from "@/components/ProjectCard";
import "@/components/ProjectsSection/index.css";
import ShareMyDoodleLogo from "../../assets/sharemydoodleLogo.png";
import DigiwizeLogo from "../../assets/DigiWizeLogo.svg";
import OffToSchoolAnimation from "../../assets/animations/offtoschool.lottie";
import Trophy from "../../assets/animations/trophy.lottie";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const texts = ["Hello, I'm Dean Overton", "Hola, estoy Dean Overton"];

const TrophyMilestone = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-row items-center h-full -ml-15 md:mr-0">
      <div ref={ref} style={{ width: 128, height: 128 }}>
        {inView && (
          <DotLottieReact
            src={Trophy}
            loop={false}
            autoplay
            style={{ width: 128, height: 128 }}
          />
        )}
      </div>
      <p className="text-card-foreground text-xs md:text-lg font-bold ml-4">
        Finish university. Achieving a WAM of 84.
      </p>
    </div>
  );
};

const socials = [
  {
    name: "LinkedIn",
    image: LinkedIn,
    url: "https://www.linkedin.com/in/dean-overton-55552221a/",
  },
  {
    name: "GitHub",
    image: Github,
    url: "https://github.com/Dean-Overton",
  },
  {
    name: "Instagram",
    image: Instagram,
    url: "https://www.instagram.com/deanovertonofficial",
  },
  {
    name: "TikTok",
    image: TikTok,
    url: "https://www.tiktok.com/@dean0verton",
  },
];

const timelineData = [
  {
    title: "2023 March",
    content: (
      <div className="flex flex-col md:flex-row items-center justify-center h-full gap-2 w-full">
        <div className="flex items-center gap-4 w-full">
          <div className="overflow-hidden">
            <DotLottieReact
              src={OffToSchoolAnimation}
              loop
              autoplay
              className="w-[300px] h-auto -translate-x-10"
            />
          </div>
          <p className="text-card-foreground text-xs md:text-lg font-bold text-center text-left w-full">
            Began my Computer Science degree at UOW
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "2023 June",
    content: (
      <div className="flex flex-col md:flex-row items-center gap-4">
        <ProjectCard
          title="Stack Sensai"
          description="Saas web app to create and recommend technologies for a given project based on a prompt. Engineered front-end dashboard and backend authentication for a seamless user experience. Built with React, Typescript, Material UI, AWS Amplify & Cognito and OpenAI API."
        />
      </div>
    ),
  },
  {
    title: "2023 October",
    content: (
      <div className="flex flex-col md:flex-row items-center gap-4">
        <ProjectCard
          title="Flash Card Generator"
          description="This automatic flashcard generator 2023 would take a pdf file (usually my lectures) and then create an Anki flashcard deck making studying a lot more efficient. Built with Python, PyPDF2, OpenAI API and AnkiConnect."
          link="https://github.com/Dean-Overton/uow-tools/tree/feature/flashcard_gen"
        />
      </div>
    ),
  },
  {
    title: "2024 March",
    content: (
      <div className="flex flex-col md:flex-row items-center gap-4">
        <ProjectCard
          title="Sudoku Solver"
          description="Engineered front-end dashboard and backend authentication for a Saas web app to create and recommend technologies for a given project based on a prompt. Collaboratively in a team. Built with Django."
        />
      </div>
    ),
  },
  {
    title: "2024 June",
    content: (
      <div className="flex flex-col md:flex-row items-center gap-4">
        <ProjectCard
          title="Digiwize"
          description="Leading my capstone team and developing a cross-repository code and productivity analytics platform/SaaS. Initiated development operations (DevOps) with an easy/efficient CI/CD pipeline, and engineered API authentication with JWT and user encryption. Built with React, ShadCN, NestJs, Typescript, and PostgreSQL. Hosted on AWS S3, RDS and ECS with Docker."
          imageUrl={DigiwizeLogo}
          link="https://www.digiwize.solutions"
        />
      </div>
    ),
  },
  {
    title: "2025 March",
    content: (
      <div className="h-full flex flex-col gap-2 mt-2 justify-start items-start">
        <a
          href="https://binarytech.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://cdn.prod.website-files.com/63fbf83476853103aa37bdca/644b25c73991562c90d2701f_binarytech_logo_white.svg"
            alt="BinaryTech Logo"
            className="w-32 h-auto mb-4 invert dark:invert-0"
          />
        </a>
        <p className="text-card-foreground text-xs md:text-lg font-bold">
          Junior Software Engineer.
        </p>
        <p className="text-card-foreground text-xs md:text-lg font-normal text-left">
          Overhauled the team's full-stack development lifecycle. Redesigned
          CI/CD and DevOps pipelines, leveraging Docker and GitHub Actions.
          Pushed for and core contributor to migration to Vite leading to a{" "}
          <b>260%</b> build time improvement. Reduced onboarding time for new
          developers from <b>several days to less than a couple of hours</b>,
          greatly boosting team efficiency.
        </p>
      </div>
    ),
  },
  {
    title: "2025 May",
    content: (
      <div className="flex items-center">
        <ProjectCard
          title="Share My Doodle"
          description="A collaborative drawing social media platform where users can create, share, and interact with doodles. Built with React, NestJs, Typescript, and Supabase."
          imageUrl={ShareMyDoodleLogo}
          link="https://sharemydoodle.com"
        />
      </div>
    ),
  },
  {
    title: "2025 June",
    content: <TrophyMilestone />,
  },
  {
    title: "2026 January",
    content: (
      <div className="flex flex-col md:flex-row items-center gap-4">
        <ProjectCard
          title="TripTiler"
          description="A mobile app for itinerary planning featuring swipe-based activity discovery, drag-and-drop day scheduling, and real-time trip sharing between friends. Built with a Flutter client targeting native iOS and Android, a Go backend exposing REST APIs, and containerised services deployed on Google Cloud Run for serverless autoscaling."
          link="https://triptiler.com"
        />
      </div>
    ),
  },
];

const Landing = () => {
  const [index, setIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [prevIndex, setPrevIndex] = useState<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrevIndex(index);
      setIndex((prev) => (prev + 1) % texts.length);
      setAnimating(true);
      setTimeout(() => setAnimating(false), 600);
    }, 3000);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center mb-4">
        {/* Inner content block */}
        <div className="flex flex-col md:flex-row items-center text-center md:text-left space-y-4 md:space-y-0 md:space-x-6">
          <img
            src={ProfileImage}
            alt="Dean Overton's Headshot"
            className="w-100 h-100 rounded-full object-cover"
          />

          <div className="flex flex-col items-center md:items-start">
            {/* Text container with fixed width to avoid layout shift */}
            <div className="relative h-12 w-[260px] md:w-[360px] mb-4">
              {prevIndex !== null && animating && (
                <div className="absolute w-full text-3xl font-semibold animate-flip-up-out">
                  {texts[prevIndex]}
                </div>
              )}
              <div
                className={`absolute w-full text-3xl font-semibold ${
                  animating ? "animate-flip-down-in" : ""
                }`}
              >
                {texts[index]}
              </div>
            </div>

            {/* Social Links */}
            <SocialLinks socials={socials} className="mt-4" />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center my-8 w-full">
        {/* Inner content block */}
        <div className="flex flex-col items-center text-center md:text-center space-y-2 md:space-y-0 flex-grow max-w-4xl mx-auto">
          <Header title="My Journey" />
          <div className="w-full flex justify-center">
            <Timeline data={timelineData} />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center my-8 w-full min-h-[80vh]">
        {/* Inner content block */}
        <div className="flex flex-col items-center justify-center text-center md:text-left space-y-4 md:space-y-0 md:space-x-6 flex-grow">
          <Header title="About Me" />
          <AboutMe />
        </div>
      </div>
    </>
  );
};

export default Landing;
