import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface Social {
  name: string;
  image: string;
  url?: string;
}

/**
 * Hand-tuned scatter so the ring reads as organic rather than four points on a
 * compass. Offsets are deterministic — random placement would jump on rerender.
 * `radius` is a percentage of the container's width; `bob` breathes it in and out.
 */
const SCATTER = [
  { angleOffset: -14, radius: 55, bob: 2.0, bobSpeed: 0.00042 },
  { angleOffset: 19, radius: 49, bob: 1.4, bobSpeed: 0.00031 },
  { angleOffset: -8, radius: 57, bob: 2.3, bobSpeed: 0.00037 },
  { angleOffset: 11, radius: 51, bob: 1.7, bobSpeed: 0.00026 },
];

/** One full lap around the headshot. */
const ORBIT_PERIOD_MS = 48000;
/** Cursor distance (px, from an icon's orbit position) that captures it. */
const MAGNET_RADIUS = 110;
/** Fraction of the remaining gap to the cursor closed each frame while held. */
const HELD = { follow: 0.4, scale: 1.2 };
/** Spring that carries it back into orbit once the cursor leaves. */
const FREE = { stiffness: 0.14, damping: 0.68, scale: 1 };
/** Hold an icon down and it rattles harder the longer you keep it. */
const SHAKE_GROWTH_PX_PER_SEC = 4;
const SHAKE_MAX_PX = 16;
interface Orbiter {
  el: HTMLDivElement | null;
  x: number;
  y: number;
  vx: number;
  vy: number;
  scale: number;
  holdStart: number | null;
  url?: string;
}

const newOrbiter = (): Omit<Orbiter, "el"> => ({
  x: 0,
  y: 0,
  vx: 0,
  vy: 0,
  scale: 1,
  holdStart: null,
});

/**
 * Headshot with the social icons orbiting its rim. Bring the cursor near one
 * and it breaks orbit to stick to the pointer; move away and it springs back
 * into the rotation where it left off.
 */
export function OrbitingSocials({
  socials,
  src,
  alt,
  className,
  onHoldChange,
}: {
  socials: Social[];
  src: string;
  alt: string;
  className?: string;
  /** Fires while an icon is being held down, so the page can react. */
  onHoldChange?: (holding: boolean) => void;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const orbiters = useRef<Orbiter[]>([]);
  const pointer = useRef<{ x: number; y: number } | null>(null);
  const heldIndex = useRef<number | null>(null);
  const swallowNextClick = useRef(false);

  const onHoldChangeRef = useRef(onHoldChange);
  onHoldChangeRef.current = onHoldChange;

  /**
   * Letting go is what opens the link — however long you hung on for. Opening
   * it here rather than letting the anchor's own click through means it still
   * fires if the icon has rattled out from under the cursor.
   */
  const releaseHold = (open: boolean) => {
    const index = heldIndex.current;
    if (index === null) return;
    const orbiter = orbiters.current[index];
    if (orbiter) orbiter.holdStart = null;
    heldIndex.current = null;
    onHoldChangeRef.current?.(false);

    if (!open || !orbiter?.url) return;
    // Still inside the pointerup gesture, so this is not a blocked popup.
    window.open(orbiter.url, "_blank", "noopener,noreferrer");
    swallowNextClick.current = true;
  };

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const onPointerMove = (event: PointerEvent) => {
      pointer.current = { x: event.clientX, y: event.clientY };
    };
    const onPointerOut = (event: PointerEvent) => {
      if (!event.relatedTarget) pointer.current = null;
    };

    if (!reduced) {
      window.addEventListener("pointermove", onPointerMove, { passive: true });
      window.addEventListener("pointerout", onPointerOut, { passive: true });
    }
    // Releasing anywhere ends the hold, not just over the icon.
    const onPointerUp = () => releaseHold(true);
    const onPointerCancel = () => releaseHold(false);
    window.addEventListener("pointerup", onPointerUp);
    window.addEventListener("pointercancel", onPointerCancel);

    let frame = 0;
    let last = 0;

    const tick = (now: number) => {
      frame = requestAnimationFrame(tick);
      const container = containerRef.current;
      if (!container) return;

      // Normalised against 60fps so the spring feels the same on any display.
      const step = last ? Math.min(3, (now - last) / 16.667) : 1;
      last = now;

      const rect = container.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const spin = reduced ? 0 : (now / ORBIT_PERIOD_MS) * 360;

      orbiters.current.forEach((orbiter, index) => {
        if (!orbiter?.el) return;
        const scatter = SCATTER[index % SCATTER.length];

        // Where this icon would be if it were simply orbiting.
        const angle =
          ((index / socials.length) * 360 + 45 + scatter.angleOffset + spin) *
          (Math.PI / 180);
        const radius =
          ((scatter.radius + Math.sin(now * scatter.bobSpeed) * scatter.bob) /
            100) *
          rect.width;
        const homeX = Math.cos(angle) * radius;
        const homeY = Math.sin(angle) * radius;

        // Capture is judged against the orbit position, not the live one —
        // otherwise a stuck icon sits on the cursor and never lets go.
        let targetX = homeX;
        let targetY = homeY;
        let held = false;
        if (pointer.current) {
          const toX = pointer.current.x - centerX;
          const toY = pointer.current.y - centerY;
          if (Math.hypot(toX - homeX, toY - homeY) < MAGNET_RADIUS) {
            targetX = toX;
            targetY = toY;
            held = true;
          }
        }

        if (held) {
          // Straight-line chase. A spring here would keep the icon's orbital
          // velocity and send it circling the cursor before it settled.
          const follow = 1 - (1 - HELD.follow) ** step;
          orbiter.x += (targetX - orbiter.x) * follow;
          orbiter.y += (targetY - orbiter.y) * follow;
          orbiter.vx = 0;
          orbiter.vy = 0;
        } else {
          orbiter.vx =
            (orbiter.vx + (targetX - orbiter.x) * FREE.stiffness * step) *
            FREE.damping;
          orbiter.vy =
            (orbiter.vy + (targetY - orbiter.y) * FREE.stiffness * step) *
            FREE.damping;
          orbiter.x += orbiter.vx * step;
          orbiter.y += orbiter.vy * step;
        }
        const scaleTarget = held ? HELD.scale : FREE.scale;
        orbiter.scale += (scaleTarget - orbiter.scale) * 0.15 * step;

        // Held down: rattle, escalating the longer the grip lasts. Applied on
        // top of the position rather than into it, so it never feeds the spring.
        let shakeX = 0;
        let shakeY = 0;
        let shakeDeg = 0;
        if (orbiter.holdStart !== null) {
          const amplitude = Math.min(
            SHAKE_MAX_PX,
            ((now - orbiter.holdStart) / 1000) * SHAKE_GROWTH_PX_PER_SEC
          );
          shakeX = (Math.random() * 2 - 1) * amplitude;
          shakeY = (Math.random() * 2 - 1) * amplitude;
          shakeDeg = (Math.random() * 2 - 1) * amplitude * 0.5;
        }

        orbiter.el.style.transform = `translate(-50%, -50%) translate(${
          orbiter.x + shakeX
        }px, ${orbiter.y + shakeY}px) rotate(${shakeDeg}deg) scale(${
          orbiter.scale
        })`;
      });
    };

    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerout", onPointerOut);
      window.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("pointercancel", onPointerCancel);
    };
  }, [socials.length]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative aspect-square w-64 sm:w-80 md:w-96 shrink-0",
        className
      )}
    >
      <img
        src={src}
        alt={alt}
        className="h-full w-full rounded-full object-cover"
      />

      {socials.map((social, index) => (
        <div
          key={social.name}
          // Parked at dead centre; the frame loop translates it into orbit.
          className="absolute left-1/2 top-1/2 will-change-transform"
          ref={(el) => {
            orbiters.current[index] = {
              ...(orbiters.current[index] ?? newOrbiter()),
              el,
            };
          }}
        >
          <a
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.name}
            className="group relative block size-12 md:size-14"
            onPointerDown={() => {
              const orbiter = orbiters.current[index];
              if (!orbiter) return;
              orbiter.holdStart = performance.now();
              orbiter.url = social.url;
              heldIndex.current = index;
              onHoldChangeRef.current?.(true);
            }}
            onClick={(event) => {
              // The release already opened it; don't let the anchor do it again.
              // Keyboard activation never sets this, so Enter still works.
              if (swallowNextClick.current) {
                swallowNextClick.current = false;
                event.preventDefault();
              }
            }}
            onDragStart={(event) => event.preventDefault()}
          >
            <img
              src={social.image}
              alt=""
              aria-hidden="true"
              className="size-full object-contain drop-shadow-[0_6px_14px_rgba(0,0,0,0.25)]"
            />
            <span className="pointer-events-none absolute -bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-foreground px-2 py-0.5 text-[0.7rem] text-background opacity-0 transition-opacity duration-200 group-hover:opacity-100">
              {social.name}
            </span>
          </a>
        </div>
      ))}
    </div>
  );
}

export default OrbitingSocials;
