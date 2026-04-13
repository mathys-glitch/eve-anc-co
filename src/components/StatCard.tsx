"use client";

import { useEffect, useRef, useState } from "react";

export default function StatCard({
  value,
  suffix = "",
  label,
  duration = 2000,
}: {
  value: number;
  suffix?: string;
  label: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;

    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const interval = duration / steps;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, interval);

    return () => clearInterval(timer);
  }, [started, value, duration]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-5xl md:text-6xl font-extralight text-charcoal tracking-tight">
        {started ? count.toLocaleString("fr-FR") : "0"}
        <span className="text-accent">{suffix}</span>
      </div>
      <p className="mt-3 text-sm text-text-light tracking-widest uppercase">
        {label}
      </p>
    </div>
  );
}
