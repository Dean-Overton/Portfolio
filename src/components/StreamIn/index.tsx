import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { introReducedMotion, useIntroPhase } from "@/components/IntroGate/store";

/**
 * Fades a block in once the intro gate has been cleared, so the portfolio
 * materialises the way a model streams a response instead of just appearing.
 */
const StreamIn = ({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) => {
  const phase = useIntroPhase();

  if (introReducedMotion()) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      initial="hidden"
      animate={phase === "revealed" ? "shown" : "hidden"}
      variants={{
        hidden: { opacity: 0, y: 16, filter: "blur(6px)" },
        shown: { opacity: 1, y: 0, filter: "blur(0px)" },
      }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

export default StreamIn;
