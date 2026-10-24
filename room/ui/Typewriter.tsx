"use client";

import { useEffect, useState, useSyncExternalStore } from "react";

/*
  A line that types itself: `prefix`, then each phrase in turn, typed out,
  held, and backspaced.

  Three things a bare setTimeout loop gets wrong:

  - The line reflows as it grows. A phrase that wraps to a second line pushes
    everything under it down and pulls it back up on every cycle. So the
    longest phrase is laid out invisibly in the same grid cell, and the box
    is always the size of the longest sentence.
  - A screen reader announces every keystroke. The animated text is hidden
    from it, and the whole sentence is given once, all the phrases in it.
  - Someone who has asked for less motion gets a cursor typing at them
    anyway. They get the first phrase, still, instead.
*/

const TYPE_MS = 55;
const DELETE_MS = 28;
const HOLD_MS = 1700;
const GAP_MS = 350;

export function Typewriter({ prefix, phrases }: { prefix: string; phrases: readonly string[] }) {
  const [index, setIndex] = useState(0);
  const [length, setLength] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (reduced || phrases.length === 0) return;
    const phrase = phrases[index];
    let delay: number;
    let step: () => void;
    if (!deleting && length < phrase.length) {
      delay = TYPE_MS;
      step = () => setLength(length + 1);
    } else if (!deleting) {
      delay = HOLD_MS;
      step = () => setDeleting(true);
    } else if (length > 0) {
      delay = DELETE_MS;
      step = () => setLength(length - 1);
    } else {
      delay = GAP_MS;
      step = () => {
        setDeleting(false);
        setIndex((index + 1) % phrases.length);
      };
    }
    const timer = setTimeout(step, delay);
    return () => clearTimeout(timer);
  }, [phrases, index, length, deleting, reduced]);

  if (phrases.length === 0) return null;
  const longest = phrases.reduce((a, b) => (b.length > a.length ? b : a));
  const shown = reduced ? phrases[0] : phrases[index].slice(0, length);

  return (
    <>
      <span className="sr-only">{`${prefix}${phrases.join(", ")}.`}</span>
      <span aria-hidden className="grid">
        <span className="invisible col-start-1 row-start-1">
          {prefix}
          {longest}
        </span>
        <span className="col-start-1 row-start-1">
          {prefix}
          {shown}
          {!reduced && (
            <span className="ml-0.5 inline-block h-[1.05em] w-0.5 translate-y-[0.15em] bg-amber-200/80 motion-safe:animate-pulse" />
          )}
        </span>
      </span>
    </>
  );
}

const REDUCED_MOTION = "(prefers-reduced-motion: reduce)";

function subscribeToMotion(onChange: () => void): () => void {
  const query = window.matchMedia(REDUCED_MOTION);
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}

// The server cannot know, so it renders the animated version; the client
// corrects it on hydration.
function usePrefersReducedMotion(): boolean {
  return useSyncExternalStore(
    subscribeToMotion,
    () => window.matchMedia(REDUCED_MOTION).matches,
    () => false,
  );
}
