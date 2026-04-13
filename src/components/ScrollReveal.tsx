"use client";

import { useEffect, useRef } from "react";

type Animation = "fadeUp" | "fadeIn" | "slideLeft" | "slideRight" | "scaleIn";

export default function ScrollReveal({
  children,
  animation = "fadeUp",
  delay = 0,
  threshold = 0.15,
  className = "",
}: {
  children: React.ReactNode;
  animation?: Animation;
  delay?: number;
  threshold?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) {
      el.classList.remove("scroll-hidden");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (delay > 0) {
            setTimeout(() => {
              el.classList.add(`scroll-visible-${animation}`);
            }, delay);
          } else {
            el.classList.add(`scroll-visible-${animation}`);
          }
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [animation, delay, threshold]);

  return (
    <div ref={ref} className={`scroll-hidden ${className}`}>
      {children}
    </div>
  );
}
