import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Local stand-in for `react-day-and-night-toggle`, which was unpublished from
 * npm (the registry 404s the package), breaking fresh installs. Same props.
 */
export const DayAndNightToggle = ({
  checked,
  onChange,
  size = 22,
  className,
}: {
  checked: boolean;
  onChange: () => void;
  size?: number;
  className?: string;
}) => (
  <button
    type="button"
    role="switch"
    aria-checked={checked}
    aria-label={checked ? "Switch to light mode" : "Switch to dark mode"}
    onClick={onChange}
    className={cn(
      "relative grid place-items-center rounded-full border border-border p-2",
      "text-foreground transition-colors hover:bg-foreground/5",
      className
    )}
  >
    <Sun
      size={size}
      strokeWidth={2}
      className={cn(
        "transition-all duration-300",
        checked ? "scale-0 rotate-90 opacity-0" : "scale-100 rotate-0 opacity-100"
      )}
    />
    <Moon
      size={size}
      strokeWidth={2}
      className={cn(
        "absolute transition-all duration-300",
        checked ? "scale-100 rotate-0 opacity-100" : "scale-0 -rotate-90 opacity-0"
      )}
    />
  </button>
);

export default DayAndNightToggle;
