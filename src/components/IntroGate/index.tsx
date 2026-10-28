import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp, Mic, Plus, Settings2 } from "lucide-react";
import {
  finishIntro,
  introReducedMotion,
  submitIntro,
  useIntroPhase,
} from "./store";

const DEFAULT_PROMPT = "What Dean's been working on";

const SUGGESTIONS = [
  { label: "What Dean's been working on", prompt: DEFAULT_PROMPT },
  { label: "Walk me through his journey", prompt: "Walk me through his journey" },
  { label: "Who is Dean, really?", prompt: "Who is Dean, really?" },
];

const EASE = [0.22, 1, 0.36, 1] as const;

const IntroGate = () => {
  const phase = useIntroPhase();
  const [prompt, setPrompt] = useState(DEFAULT_PROMPT);
  const [sent, setSent] = useState<string | null>(null);
  const [thinking, setThinking] = useState(false);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const timers = useRef<number[]>([]);

  const active = phase !== "revealed";
  const sending = phase === "sending";
  const reduced = introReducedMotion();

  // Freeze the page sitting behind the gate.
  useEffect(() => {
    if (!active) return;
    document.documentElement.classList.add("intro-locked");
    return () => document.documentElement.classList.remove("intro-locked");
  }, [active]);

  useEffect(() => () => timers.current.forEach(window.clearTimeout), []);

  useEffect(() => {
    if (phase !== "gate") return;
    const input = inputRef.current;
    if (!input) return;
    input.focus({ preventScroll: true });
    input.setSelectionRange(input.value.length, input.value.length);
  }, [phase]);

  const send = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || phase !== "gate") return;
    setSent(trimmed);
    submitIntro();
    if (reduced) {
      finishIntro();
      return;
    }
    // Prompt flies off, a thinking dot beats, then the portfolio streams in.
    timers.current.push(window.setTimeout(() => setThinking(true), 1050));
    timers.current.push(window.setTimeout(finishIntro, 1550));
  };

  // Esc skips the bit for anyone who has already seen it.
  useEffect(() => {
    if (phase !== "gate") return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      submitIntro();
      finishIntro(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [phase]);

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          key="intro-gate"
          className="gpt-sans fixed inset-0 z-[200] flex flex-col items-center justify-center overflow-hidden bg-white px-4"
          initial={false}
          exit={{ opacity: 0 }}
          transition={{ duration: reduced ? 0 : 0.5, ease: "easeOut" }}
          style={{ pointerEvents: sending ? "none" : "auto" }}
        >
          <motion.div
            className="flex w-full max-w-[46rem] flex-col items-center"
            animate={
              sending
                ? { y: "-85vh", opacity: 0, scale: 0.97 }
                : { y: 0, opacity: 1, scale: 1 }
            }
            transition={{
              duration: reduced ? 0 : 0.7,
              ease: EASE,
              delay: sending && !reduced ? 0.4 : 0,
            }}
          >
            <motion.h2
              className="mb-7 text-center text-[1.6rem] leading-tight tracking-[-0.01em] text-[#0d0d0d] md:text-[2rem]"
              animate={{ opacity: sending ? 0 : 1 }}
              transition={{ duration: reduced ? 0 : 0.25 }}
            >
              What&apos;s on your mind today?
            </motion.h2>

            {sending ? (
              <div className="flex w-full justify-end">
                <div className="max-w-[85%] rounded-[1.5rem] bg-[#f4f4f4] px-5 py-3 text-[1rem] text-[#0d0d0d]">
                  {sent}
                </div>
              </div>
            ) : (
              <>
                <form
                  onSubmit={(event) => {
                    event.preventDefault();
                    send(prompt);
                  }}
                  className="w-full rounded-[1.75rem] border border-black/10 bg-white shadow-[0_8px_32px_rgba(0,0,0,0.07)] transition-shadow focus-within:shadow-[0_10px_40px_rgba(0,0,0,0.1)]"
                >
                  <label htmlFor="intro-prompt" className="sr-only">
                    Ask anything about Dean
                  </label>
                  <textarea
                    id="intro-prompt"
                    ref={inputRef}
                    rows={1}
                    value={prompt}
                    onChange={(event) => setPrompt(event.target.value)}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" && !event.shiftKey) {
                        event.preventDefault();
                        send(prompt);
                      }
                    }}
                    placeholder="Ask anything"
                    className="block max-h-40 w-full resize-none bg-transparent px-5 pt-4 pb-1 text-[1rem] text-[#0d0d0d] outline-none placeholder:text-black/35"
                  />
                  <div className="flex items-center gap-2 px-3 pb-3 pt-1">
                    <span className="grid h-9 w-9 place-items-center rounded-full border border-black/10 text-black/55">
                      <Plus size={18} strokeWidth={2} />
                    </span>
                    <span className="hidden items-center gap-2 rounded-full border border-black/10 px-3 py-2 text-[0.8rem] text-black/55 sm:flex">
                      <Settings2 size={16} strokeWidth={2} />
                      Tools
                    </span>
                    <div className="ml-auto flex items-center gap-2">
                      <span className="grid h-9 w-9 place-items-center rounded-full text-black/55">
                        <Mic size={18} strokeWidth={2} />
                      </span>
                      <button
                        type="submit"
                        disabled={!prompt.trim()}
                        aria-label="Send prompt"
                        className="grid h-9 w-9 place-items-center rounded-full bg-[#0d0d0d] text-white transition-opacity hover:opacity-85 disabled:bg-black/15"
                      >
                        <ArrowUp size={18} strokeWidth={2.5} />
                      </button>
                    </div>
                  </div>
                </form>

                <div className="mt-4 flex flex-wrap justify-center gap-2">
                  {SUGGESTIONS.map((suggestion) => (
                    <button
                      key={suggestion.label}
                      type="button"
                      onClick={() => {
                        setPrompt(suggestion.prompt);
                        send(suggestion.prompt);
                      }}
                      className="rounded-full border border-black/10 px-4 py-2 text-[0.8rem] text-black/65 transition-colors hover:bg-black/[0.04]"
                    >
                      {suggestion.label}
                    </button>
                  ))}
                </div>

                <p className="mt-6 text-center text-[0.7rem] text-black/35">
                  Portfolios can make mistakes. Check the source on GitHub.
                </p>
              </>
            )}
          </motion.div>

          {thinking && (
            <motion.span
              className="absolute left-1/2 top-1/2 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0d0d0d]"
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: [0.35, 1, 0.35], scale: [0.85, 1, 0.85] }}
              transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
            />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroGate;
