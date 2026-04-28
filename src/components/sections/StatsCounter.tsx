"use client";

import { useEffect, useState, useRef } from "react";

interface StatsCounterProps {
  stats: {
    value: number;
    suffix?: string;
    prefix?: string;
    label: string;
  }[];
}

export function StatsCounter({ stats }: StatsCounterProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
      {stats.map((stat, index) => (
        <StatItem key={stat.label} stat={stat} index={index} />
      ))}
    </div>
  );
}

function StatItem({
  stat,
  index,
}: {
  stat: { value: number; suffix?: string; prefix?: string; label: string };
  index: number;
}) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateValue(stat.value, setCount);
          observer.unobserve(element);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(element);

    return () => observer.unobserve(element);
  }, [stat.value, hasAnimated]);

  return (
    <div
      ref={ref}
      className="text-center"
    >
      <div className="font-display text-4xl md:text-5xl font-bold text-gold">
        {stat.prefix}
        <span>{hasAnimated ? count : 0}</span>
        {stat.suffix}
      </div>
      <div className="mt-2 text-text-secondary text-sm md:text-base">
        {stat.label}
      </div>
    </div>
  );
}

function animateValue(
  target: number,
  setCount: React.Dispatch<React.SetStateAction<number>>
) {
  const duration = 2000;
  const steps = 60;
  const increment = target / steps;
  let current = 0;

  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      setCount(target);
      clearInterval(timer);
    } else {
      setCount(Math.floor(current));
    }
  }, duration / steps);
}