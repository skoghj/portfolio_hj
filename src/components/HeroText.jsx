import { motion, useAnimationFrame } from "framer-motion";
import { useRef } from "react";

export default function HeroCircleText() {
  const ref = useRef(null);
  const words = [
    "Aurora",
    "Lullaby",
    "Labyrinth",
    "Idyllic",
    "Felicity",
    "Demure",
    "Chatoyant",
    "TheseDays",
    "Bungalow",
    "DonOfGold",
    "Aurora",
    "Lullaby",
    "Labyrinth",
    "Idyllic",
    "Felicity",
    "Demure",
    "Chatoyant",
    "TheseDays",
    "Bungalow",
    "DonOfGold",
  ];

  // Framer Motion으로 원형 회전 애니메이션 구현
  useAnimationFrame((t) => {
    if (ref.current) {
      ref.current.style.transform = `rotate(${t / 50}deg)`;
    }
  });

  const radius = 40;

  return (
    <div className="relative w-[400px] h-[400px] flex items-center justify-center">
      <div
        ref={ref}
        className="absolute inset-0 flex items-center justify-center will-change-transform"
      >
        {words.map((word, i) => (
          <div
            key={i}
            className="absolute top-1/2 left-1/2"
            style={{
              transform: `rotate(${(i * 360) / words.length}deg)`,
              transformOrigin: "0 0",
            }}
          >
            {[...word].map((letter, j) => (
              <span
                key={j}
                className="inline-block text-[22px] font-serif text-neutral-800"
                style={{
                  transform: `
                    translate(${radius}px, ${-j * 18}px)
                    rotate(${-(i * 360) / words.length}deg)
                  `,
                  transformOrigin: `${radius}px 0`,
                  transition: `transform 0.4s ease-out`,
                }}
              >
                {letter}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
