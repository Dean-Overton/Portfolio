import AboutMe from "@/components/AboutMeSection";
import Header from "@/components/Header";
import { SocialLinks } from "@/components/ui/social-links";
import { Timeline } from "@/components/ui/timeline";
import { useEffect, useRef, useState } from "react";
import { useDocumentMeta } from "@/lib/useDocumentMeta";
import ProfileImage from "@/assets/headshot.jfif";
import Github from "@/assets/github.png";
import Instagram from "@/assets/instagram.png";
import LinkedIn from "@/assets/linkedin.png";
import TikTok from "@/assets/tiktok.png";
import { ProjectCard } from "@/components/ProjectCard";
import "@/components/ProjectsSection/index.css";
import { getProject } from "@/data/projects";
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
    <div className="flex flex-row items-center h-full">
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
      <div className="flex items-center justify-start gap-4 w-full pl-2">
        <div className="overflow-hidden w-[170px] shrink-0">
          <DotLottieReact
            src={OffToSchoolAnimation}
            loop
            autoplay
            className="w-[300px] h-auto -translate-x-20"
          />
        </div>
        <p className="text-card-foreground text-xs md:text-lg font-bold text-left">
          Began my Computer Science degree at UOW
        </p>
      </div>
    ),
  },
  {
    title: "2023 June",
    content: (
      <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
        <ProjectCard {...getProject("stacksensai")} />
      </div>
    ),
  },
  {
    title: "2023 October",
    content: (
      <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
        <ProjectCard {...getProject("flash-card-generator")} />
      </div>
    ),
  },
  {
    title: "2024 March",
    content: (
      <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
        <ProjectCard {...getProject("sudoku-solver")} />
      </div>
    ),
  },
  {
    title: "2024 June",
    content: (
      <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
        <ProjectCard {...getProject("digiwize")} />
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
        <ul className="text-card-foreground text-xs md:text-lg font-normal text-left list-disc pl-5 space-y-2">
          <li>
            Overhauled the team's full-stack development lifecycle. Redesigned
            CI/CD and DevOps pipelines with Docker and GitHub Actions,
            resulting in a <b>5x cycle time</b> improvement.
          </li>
          <li>
            Migrated the webapp to Vite and Yarn Berry, delivering a{" "}
            <b>45x build time improvement</b>.
          </li>
          <li>
            Reduced onboarding for new developers from{" "}
            <b>several days to under a couple of hours</b> using Docker and
            shell scripts, greatly boosting team efficiency.
          </li>
          <li>
            Decreased lead time from <b>weeks to days</b> with automated
            testing, automated cloud preview environments, and faster code and
            feature review practices.
          </li>
          <li>
            Increased customer satisfaction with an in-app RAG chatbot that
            answers product queries instantly, instead of customers waiting
            hours for a response.
          </li>
        </ul>
        <p className="text-card-foreground text-xs md:text-base font-normal text-left mt-2">
          <b>Technologies:</b> ReactJS, C#, .NET API, Docker, MSSQL, AWS,
          Vector DB
        </p>
      </div>
    ),
  },
  {
    title: "2025 May",
    content: (
      <div className="flex items-start md:items-center">
        <ProjectCard {...getProject("share-my-doodle")} />
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
      <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
        <ProjectCard {...getProject("triptiler")} />
      </div>
    ),
  },
];

const Landing = () => {
  useDocumentMeta({
    title: "Dean Overton | Full-Stack Software Engineer Portfolio",
    description:
      "Full-stack software engineer building products end to end across React, TypeScript, Go, NestJS, Python, Flutter, AWS, and GCP. Explore Dean Overton's projects, journey, and experience.",
    canonical: "https://deanoverton.com/",
  });

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
            alt="Dean Overton, full-stack software engineer, headshot"
            className="w-100 h-100 rounded-full object-cover"
          />

          <div className="flex flex-col items-center md:items-start">
            <h1 className="sr-only">
              Dean Overton, Full-Stack Software Engineer
            </h1>
            {/* Text container with fixed width to avoid layout shift */}
            <div
              className="relative h-12 w-[260px] md:w-[360px] mb-4"
              aria-hidden="true"
            >
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
        <div className="flex flex-col items-center text-center md:text-center space-y-2 md:space-y-0 flex-grow max-w-4xl xl:max-w-6xl mx-auto">
          <Header title="My Journey" level={2} />
          <div className="w-full flex justify-center">
            <Timeline data={timelineData} />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center my-8 w-full min-h-[80vh]">
        {/* Inner content block */}
        <div className="flex flex-col items-center justify-center text-center md:text-left space-y-4 md:space-y-0 md:space-x-6 flex-grow">
          <Header title="About Me" level={2} />
          <AboutMe />
        </div>
      </div>
    </>
  );
};

export default Landing;
