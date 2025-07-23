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
  return (
    <HolographicCard>
      <div
        className="flex flex-col h-full items-center justify-center text-center"
        onClick={() => link && window.open(link, "_blank")}
        style={{ cursor: link ? "pointer" : "default" }}
      >
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
