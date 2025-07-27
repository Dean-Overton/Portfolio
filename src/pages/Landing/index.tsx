import AboutMe from "@/components/AboutMeSection";
import EducationSection from "@/components/EducationSection";
import Header from "@/components/Header";
import ProjectSection from "@/components/ProjectsSection";
import { SocialLinks } from "@/components/ui/social-links";
import { useEffect, useState } from "react";
import ProfileImage from "@/assets/headshot.png";
import Github from "@/assets/github.png";
import Instagram from "@/assets/instagram.png";
import LinkedIn from "@/assets/linkedin.png";
import TikTok from "@/assets/tiktok.png";

const texts = ["Hello, I'm Dean Overton", "Hola, estoy Dean Overton"];

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
      <div className="flex flex-col items-center justify-center my-8">
        {/* Inner content block */}
        <div className="flex flex-col items-center text-center md:text-left space-y-4 md:space-y-0 md:space-x-6">
          <Header title="Projects" />
          <ProjectSection />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center my-8">
        {/* Inner content block */}
        <div className="flex flex-col items-center text-center md:text-left space-y-4 md:space-y-0 md:space-x-6">
          <Header title="About Me" />
          <AboutMe />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center my-8">
        {/* Inner content block */}
        <div className="flex flex-col items-center text-center space-y-6">
          <Header title="Education" />
          <EducationSection />
        </div>
      </div>
    </>
  );
};

export default Landing;
