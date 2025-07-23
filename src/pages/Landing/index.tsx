import Header from "@/components/Header";
import ProjectSection from "@/components/ProjectsSection";
import { useEffect, useState } from "react";

const texts = ["Hello, I'm Dean Overton", "Hola, estoy Dean Overton"];

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
            src="/src/assets/headshot.png"
            alt="Dean Overton's Headshot"
            className="w-64 h-64 rounded-full object-cover"
          />

          {/* Text container with fixed width to avoid layout shift */}
          <div className="relative h-12 w-[260px] md:w-[360px]">
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
        </div>
      </div>
      <div className="min-h-screen flex flex-col items-center justify-center">
        {/* Inner content block */}
        <div className="flex flex-col items-center text-center md:text-left space-y-4 md:space-y-0 md:space-x-6">
          <Header title="Projects" />
          <ProjectSection />
        </div>
      </div>
    </>
  );
};

export default Landing;
