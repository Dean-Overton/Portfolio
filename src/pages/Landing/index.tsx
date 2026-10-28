import AboutMe from "@/components/AboutMeSection";
import Header from "@/components/Header";
import { OrbitingSocials } from "@/components/ui/orbiting-socials";
import { Timeline } from "@/components/ui/timeline";
import { useEffect, useRef, useState } from "react";
import { useDocumentMeta } from "@/lib/useDocumentMeta";
import ProfileImage from "@/assets/headshot.jfif";
import { socials } from "@/data/socials";
import { ProjectCard } from "@/components/ProjectCard";
import "@/components/ProjectsSection/index.css";
import { getProject } from "@/data/projects";
import OffToSchoolAnimation from "../../assets/animations/offtoschool.lottie";
import Trophy from "../../assets/animations/trophy.lottie";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import StreamIn from "@/components/StreamIn";
import { introReducedMotion } from "@/components/IntroGate/store";
import Typewriter from "@/components/Typewriter";
import { ChevronDown, Download } from "lucide-react";

const DEFAULT_HEADING = "Hi, I'm Dean";
/** Shown while a visitor keeps a social icon pinned under the cursor. */
const HOLD_HEADING = "Maybe you should let go";

/** Drops the visitor at the first entry of the journey timeline. */
const scrollToJourney = () =>
  document.getElementById("journey")?.scrollIntoView({
    behavior: introReducedMotion() ? "auto" : "smooth",
    block: "start",
  });


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
    title: "2025 March\nto Present",
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
          Software Engineer.
        </p>
        <p className="text-card-foreground/80 text-xs md:text-base font-normal text-left mb-2">
          Full-stack engineer on a B2B IoT SaaS platform, in a small product
          team.
        </p>
        <ul className="text-card-foreground text-xs md:text-lg font-normal text-left list-disc pl-5 space-y-2">
          <li>
            Rebuilt CI/CD and DevOps on Docker and GitHub Actions —{" "}
            <b>5x faster cycle time</b>.
          </li>
          <li>
            Moved the web app to Vite and Yarn Berry —{" "}
            <b>45x faster builds</b>.
          </li>
          <li>
            Cut developer onboarding from <b>days to under two hours</b> with
            Docker and scripted setup.
          </li>
          <li>
            Took lead time from <b>weeks to days</b> with automated testing and
            cloud preview environments.
          </li>
          <li>
            Shipped an in-app RAG chatbot that answers product questions
            instantly, replacing hours-long support waits.
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

  const [holdingSocial, setHoldingSocial] = useState(false);

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center mb-4">
        {/* Inner content block */}
        <div className="flex flex-col md:flex-row items-center text-center md:text-left space-y-10 md:space-y-0 md:space-x-14">
          {/* id is where the intro tour parks the page before its descent */}
          <div id="hero-avatar">
            <StreamIn delay={0.05}>
              <OrbitingSocials
                socials={socials}
                src={ProfileImage}
                alt="Dean Overton, full-stack software engineer, headshot"
                onHoldChange={setHoldingSocial}
              />
            </StreamIn>
          </div>

          <StreamIn
            delay={0.35}
            className="flex flex-col items-center md:items-start"
          >
            <h1 className="text-3xl font-semibold">
              <Typewriter
                text={holdingSocial ? HOLD_HEADING : DEFAULT_HEADING}
              />
            </h1>
            <div className="mt-5 flex items-center gap-3">
              <button
                type="button"
                onClick={scrollToJourney}
                className="group inline-flex items-center gap-2 rounded-full border border-foreground/20 px-5 py-2 text-sm font-medium transition-colors hover:bg-foreground/5"
              >
                See More
                <ChevronDown
                  size={16}
                  className="transition-transform group-hover:translate-y-0.5"
                />
              </button>
              <a
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-foreground/20 px-5 py-2 text-sm font-medium transition-colors hover:bg-foreground/5"
              >
                CV
                <Download
                  size={16}
                  className="transition-transform group-hover:translate-y-0.5"
                />
              </a>
            </div>
          </StreamIn>
        </div>
      </div>
      <div
        id="journey"
        className="flex flex-col items-center justify-center my-8 w-full scroll-mt-24"
      >
        {/* Inner content block */}
        <StreamIn
          delay={0.6}
          className="flex flex-col items-center text-center md:text-center space-y-2 md:space-y-0 flex-grow max-w-4xl xl:max-w-6xl mx-auto"
        >
          <div className="w-full flex justify-center">
            <Timeline data={timelineData} />
          </div>
        </StreamIn>
      </div>
      <div
        id="about"
        className="flex flex-col items-center justify-center my-8 w-full min-h-[80vh] scroll-mt-24"
      >
        {/* Inner content block */}
        <StreamIn
          delay={0.85}
          className="flex flex-col items-center justify-center text-center md:text-left space-y-4 md:space-y-0 md:space-x-6 flex-grow"
        >
          <Header title="About Me" level={2} />
          <AboutMe />
        </StreamIn>
      </div>
    </>
  );
};

export default Landing;
