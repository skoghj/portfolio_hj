import { useRef } from "react";
import { useAnimationFrame } from "framer-motion";

export default function HeroCircleText() {
  const ref = useRef(null);

  const words = [
    "Empathy",
    "Creativity",
    "Concept",
    "Iteration",
    "Aesthetics",
    "Function",
    "Balance",
    "Intuition",
    "Experience",
    "Curiosity",
    "Emotion",
    "Harmony",
    "Contrast",
    "Storytelling",
    "Process",
    "Insight",
    "Simplicity",
    "Innovation",
  ];

  // Rotation animation
  useAnimationFrame((t) => {
    if (ref.current) ref.current.style.transform = `rotate(${t / 60}deg)`; // rotation speed
  });

  const radius = 80; // circle radius (px)

  return (
    <div className="relative w-[400px] h-[400px] flex items-center justify-center bg-transparent">
      <div ref={ref} className="absolute inset-0 will-change-transform">
        {words.map((word, i) => {
          // 1️⃣ Base angle
          let angle = (i / words.length) * 360;

          // 2️⃣ Small manual spacing corrections
          if (word === "Storytelling") angle -= 6; // move slightly left
          if (word === "Process") angle += 6; // move slightly right
          if (word === "Insight") angle += 4;

          // 3️⃣ Render each word
          return (
            <span
              key={i}
              className="absolute text-[22px] font-serif text-neutral-800 whitespace-nowrap"
              style={{
                top: "50%",
                left: "50%",
                transform: `
                  rotate(${angle}deg)
                  translate(${radius}px)
                  rotate(180deg)
                  translateX(-50%)
                `,
                transformOrigin: "center center",
              }}
            >
              {word}
            </span>
          );
        })}
      </div>
    </div>
  );
}
