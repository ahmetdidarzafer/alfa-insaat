"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type FadeUpProps = {
  children: ReactNode;
  /** Stagger gecikmesi (ms) — grid öğelerinde 60-80ms aralıkla kullanılır */
  delay?: number;
  className?: string;
};

export default function FadeUp({
  children,
  delay = 0,
  className = "",
}: FadeUpProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // prefers-reduced-motion: animasyonu tamamen atla, içerik anında görünür
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -40px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={`transition-[opacity,transform] duration-300 ease-out-strong ${
        visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}
