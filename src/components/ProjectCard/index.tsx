import { useState } from "react";
import HolographicCard from "../HolographicCard";

export const ProjectCard = ({
  title,
  description,
  imageUrl,
  link,
}: {
  title: string;
  description: string;
  imageUrl?: string;
  link?: string;
}) => {
  const isExternal = !!link && /^https?:\/\//i.test(link);

  const tooltipText = link
    ? isExternal
      ? link.replace(/^https?:\/\//i, "")
      : "View project"
    : null;

  const [tooltipPos, setTooltipPos] = useState<{ x: number; y: number } | null>(
    null
  );

  return (
    <HolographicCard>
      <div
        className="group relative flex flex-col h-full items-center justify-center text-center"
        onClick={() => link && window.open(link, "_blank")}
        onPointerMove={(e) => {
          if (!tooltipText) return;
          const rect = e.currentTarget.getBoundingClientRect();
          setTooltipPos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
          });
        }}
        onPointerLeave={() => setTooltipPos(null)}
        style={{ cursor: link ? "pointer" : "default" }}
      >
        {isExternal && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="absolute top-2 right-2 text-white/50"
            aria-label="Opens in a new tab"
          >
            <path d="M15 3h6v6" />
            <path d="M10 14 21 3" />
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
          </svg>
        )}
        {tooltipText && tooltipPos && (
          <span
            className="pointer-events-none absolute z-10 whitespace-nowrap rounded-md bg-black/80 px-2 py-1 text-xs text-white"
            style={{
              left: tooltipPos.x + 14,
              top: tooltipPos.y + 14,
            }}
            role="tooltip"
          >
            {tooltipText}
          </span>
        )}
        {imageUrl && (
          <img
            src={imageUrl}
            width={100}
            height={100}
            alt={`${title} project image`}
            className="mb-6 opacity-80"
          />
        )}
        <h2 className="text-3xl font-bold text-white mb-2">{title}</h2>
        <p className="text-white/70">{description}</p>
      </div>
    </HolographicCard>
  );
};
