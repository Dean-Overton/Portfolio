import { useSyncExternalStore } from "react";

/**
 * Tiny external store for the ChatGPT-style intro gate.
 * Lives outside React so the overlay (rendered in the layout) and the
 * landing page sections can read the same phase without provider plumbing.
 */
export type IntroPhase = "gate" | "sending" | "revealed";

const SEEN_KEY = "intro:seen";
const isBrowser = typeof window !== "undefined";

/** Puppeteer prerender + crawlers must see the real page, never the gate. */
const isAutomated = () =>
  isBrowser &&
  (navigator.webdriver === true || /HeadlessChrome|Prerender/i.test(navigator.userAgent));

export const introReducedMotion = () =>
  isBrowser && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const alreadySeen = () => {
  try {
    return isBrowser && window.sessionStorage.getItem(SEEN_KEY) === "1";
  } catch {
    return false;
  }
};

const shouldGate = () =>
  isBrowser && window.location.pathname === "/" && !isAutomated() && !alreadySeen();

let phase: IntroPhase = shouldGate() ? "gate" : "revealed";

const listeners = new Set<() => void>();
const emit = () => listeners.forEach((listener) => listener());
const subscribe = (listener: () => void) => {
  listeners.add(listener);
  return () => listeners.delete(listener);
};

export const useIntroPhase = () =>
  useSyncExternalStore<IntroPhase>(
    subscribe,
    () => phase,
    () => "revealed"
  );

/** Called when the user hits send: starts the fly-up animation. */
export const submitIntro = () => {
  if (phase !== "gate") return;
  phase = "sending";
  emit();
};

/* ---- The post-send tour: a slow linear sweep down, then a quick lift home ---- */

const TOUR_START_DELAY_MS = 600; // let the first sections stream in first
const TOUR_MS_PER_PX = 0.85; // slow, steady descent
const TOUR_MIN_MS = 2800;
const TOUR_MAX_MS = 5500;
const TOUR_HOLD_MS = 350; // beat at the bottom before heading back
const TOUR_RETURN_MS = 650;
/** The tour opens with this element pinned to the top, not at scroll 0. */
const TOUR_START_ID = "hero-avatar";
const TOUR_START_PADDING = 24;

let stopTour: (() => void) | null = null;

const maxScroll = () =>
  Math.max(0, document.documentElement.scrollHeight - window.innerHeight);

const tourStartOffset = () => {
  const anchor = document.getElementById(TOUR_START_ID);
  if (!anchor) return 0;
  const top = anchor.getBoundingClientRect().top + window.scrollY;
  return Math.min(maxScroll(), Math.max(0, top - TOUR_START_PADDING));
};

const easeOutCubic = (t: number) => 1 - (1 - t) ** 3;

const runIntroTour = () => {
  if (!isBrowser || introReducedMotion()) return;
  stopTour?.();

  let frame = 0;
  let stopped = false;
  const stop = () => {
    if (stopped) return;
    stopped = true;
    window.cancelAnimationFrame(frame);
    window.removeEventListener("wheel", stop);
    window.removeEventListener("touchstart", stop);
    window.removeEventListener("keydown", stop);
    window.removeEventListener("pointerdown", stop);
    if (stopTour === stop) stopTour = null;
  };
  stopTour = stop;

  // Any real input hands control straight back to the visitor.
  window.addEventListener("wheel", stop, { passive: true });
  window.addEventListener("touchstart", stop, { passive: true });
  window.addEventListener("keydown", stop);
  window.addEventListener("pointerdown", stop);

  // Set the opening position while the gate is still fading out, so the page
  // is revealed already parked on the avatar rather than visibly jumping to it.
  const from = tourStartOffset();
  window.scrollTo(0, from);

  const descentMs = Math.min(
    TOUR_MAX_MS,
    Math.max(TOUR_MIN_MS, (maxScroll() - from) * TOUR_MS_PER_PX)
  );

  let downStart = 0;
  const descend = (now: number) => {
    if (stopped) return;
    if (!downStart) downStart = now;
    const progress = Math.min(1, (now - downStart) / descentMs);
    // Re-read each frame: images and streamed-in sections keep growing the page.
    const bottom = Math.max(from, maxScroll());
    window.scrollTo(0, from + (bottom - from) * progress);
    if (progress < 1) {
      frame = window.requestAnimationFrame(descend);
      return;
    }
    window.setTimeout(() => {
      if (!stopped) frame = window.requestAnimationFrame(ascend);
    }, TOUR_HOLD_MS);
  };

  let upStart = 0;
  let upFrom = 0;
  const ascend = (now: number) => {
    if (stopped) return;
    if (!upStart) {
      upStart = now;
      upFrom = window.scrollY;
    }
    const progress = Math.min(1, (now - upStart) / TOUR_RETURN_MS);
    window.scrollTo(0, upFrom * (1 - easeOutCubic(progress)));
    if (progress < 1) frame = window.requestAnimationFrame(ascend);
    else stop();
  };

  window.setTimeout(() => {
    if (!stopped) frame = window.requestAnimationFrame(descend);
  }, TOUR_START_DELAY_MS);
};

/**
 * Called once the prompt has flown off screen: unmasks the portfolio and
 * (unless the visitor skipped the intro) runs the tour.
 */
export const finishIntro = (tour = true) => {
  if (phase === "revealed") return;
  phase = "revealed";
  try {
    window.sessionStorage.setItem(SEEN_KEY, "1");
  } catch {
    /* private browsing — gate just shows again next load */
  }
  emit();
  if (tour) runIntroTour();
};
