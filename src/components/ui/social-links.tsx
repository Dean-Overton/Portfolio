"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface Social {
  name: string;
  image: string;
  url?: string;
}

interface SocialLinksProps extends React.HTMLAttributes<HTMLDivElement> {
  socials: Social[];
}

export function SocialLinks({
  socials,
  className,
  ...props
}: SocialLinksProps) {
  const [hoveredSocial, setHoveredSocial] = React.useState<string | null>(null);
  const [touchedSocial, setTouchedSocial] = React.useState<string | null>(null);
  const [rotation, setRotation] = React.useState<number>(0);
  const [clicked, setClicked] = React.useState<boolean>(false);
  const [isMobile, setIsMobile] = React.useState<boolean>(false);

  // Detect if device is mobile
  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || "ontouchstart" in window);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const animation = {
    scale: clicked ? [1, 1.3, 1] : 1,
    transition: { duration: 0.3 },
  };

  React.useEffect(() => {
    const handleClick = () => {
      setClicked(true);
      setTimeout(() => {
        setClicked(false);
      }, 200);
    };
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, [clicked]);

  const handleSocialInteraction = (
    social: Social,
    isTouch: boolean = false
  ) => {
    if (isTouch) {
      setTouchedSocial(social.name);
      // Auto-hide after 2 seconds on mobile
      setTimeout(() => setTouchedSocial(null), 2000);
    } else {
      setHoveredSocial(social.name);
    }
    setRotation(Math.random() * 20 - 10);
  };

  const handleClick = (
    social: Social,
    event: React.MouseEvent | React.TouchEvent
  ) => {
    event.preventDefault();
    setClicked(true);

    if (social.url) {
      // On mobile, if not already showing preview, show it first
      if (isMobile && !touchedSocial) {
        setTouchedSocial(social.name);
        setTimeout(() => setTouchedSocial(null), 2000);
        return;
      }

      // Otherwise open the link
      window.open(social.url, "_blank");
    }
  };

  const isActive = (socialName: string) => {
    return isMobile
      ? touchedSocial === socialName
      : hoveredSocial === socialName;
  };

  return (
    <div
      className={cn("flex items-center justify-center gap-0", className)}
      {...props}
    >
      {socials.map((social, index) => (
        <div
          className={cn(
            "relative cursor-pointer py-2 transition-opacity duration-200 min-h-[60px] flex items-center",
            index === 0 ? "pl-0 pr-3 md:pr-5" : "px-3 md:px-5",
            (hoveredSocial || touchedSocial) && !isActive(social.name)
              ? "opacity-50"
              : "opacity-100"
          )}
          key={index}
          onMouseEnter={() => !isMobile && handleSocialInteraction(social)}
          onMouseLeave={() => !isMobile && setHoveredSocial(null)}
          onTouchStart={(e) => {
            e.preventDefault();
            if (isMobile) handleSocialInteraction(social, true);
          }}
          onClick={(e) => handleClick(social, e)}
        >
          <span className="block text-sm md:text-lg font-medium select-none">
            {social.name}
          </span>
          <AnimatePresence>
            {isActive(social.name) && (
              <motion.div
                className="absolute bottom-0 left-0 right-0 flex h-full w-full items-center justify-center pointer-events-none"
                animate={animation}
              >
                <motion.img
                  key={social.name}
                  src={social.image}
                  alt={social.name}
                  className="size-12 md:size-16 rounded-lg"
                  initial={{
                    y: -30,
                    rotate: rotation,
                    opacity: 0,
                    filter: "blur(2px)",
                  }}
                  animate={{
                    y: isMobile ? -35 : -50,
                    opacity: 1,
                    filter: "blur(0px)",
                  }}
                  exit={{
                    y: isMobile ? -30 : -40,
                    opacity: 0,
                    filter: "blur(2px)",
                  }}
                  transition={{ duration: 0.2 }}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
