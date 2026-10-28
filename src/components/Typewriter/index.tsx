import { useEffect, useRef, useState } from "react";

const TYPE_MS = 32;
const DELETE_MS = 16;

/** Longest start both strings share, so only the differing tail is retyped. */
const commonPrefix = (a: string, b: string) => {
  let i = 0;
  while (i < a.length && i < b.length && a[i] === b[i]) i++;
  return i;
};

/**
 * Types its way between texts: backspaces to whatever the old and new strings
 * share, then types out the rest.
 */
const Typewriter = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  const reduced =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const [shown, setShown] = useState(text);
  const shownRef = useRef(text);

  useEffect(() => {
    if (reduced) {
      shownRef.current = text;
      setShown(text);
      return;
    }

    let timer = 0;
    const step = () => {
      const current = shownRef.current;
      if (current === text) return;
      const deleting = current.length > commonPrefix(current, text);
      const next = deleting
        ? current.slice(0, -1)
        : text.slice(0, current.length + 1);
      shownRef.current = next;
      setShown(next);
      timer = window.setTimeout(step, deleting ? DELETE_MS : TYPE_MS);
    };

    step();
    return () => window.clearTimeout(timer);
  }, [text, reduced]);

  return (
    <span className={className}>
      {shown}
      {shown !== text && (
        <span className="ml-1 inline-block h-[0.9em] w-[2px] translate-y-[0.05em] animate-pulse bg-current" />
      )}
    </span>
  );
};

export default Typewriter;
