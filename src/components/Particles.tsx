import { useMemo } from "react";

interface ParticlesProps {
  count?: number;
}

export function Particles({ count = 36 }: ParticlesProps) {
  const particles = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => {
        const isGold = Math.random() > 0.45;
        const size = Math.random() * 4 + 1.5;
        return {
          id: i,
          left: Math.random() * 100,
          delay: Math.random() * 14,
          duration: 14 + Math.random() * 18,
          size,
          color: isGold
            ? "rgba(250, 204, 21, 0.85)"
            : "rgba(239, 68, 68, 0.7)",
          blur: size > 3 ? "blur(1px)" : "none",
        };
      }),
    [count]
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute bottom-0 rounded-full animate-float-up"
          style={{
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            background: p.color,
            boxShadow: `0 0 ${p.size * 4}px ${p.color}`,
            filter: p.blur,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        />
      ))}
    </div>
  );
}
