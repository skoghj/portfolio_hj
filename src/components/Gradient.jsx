import { motion } from "framer-motion";

export default function UniverseHero() {
  return (
    <section className="relative flex items-center justify-center h-screen w-full bg-white overflow-hidden">
      {/* === Pastel Orb === */}
      <motion.div
        className="relative rounded-full overflow-hidden"
        style={{
          width: "clamp(240px, 35vw, 520px)",
          height: "clamp(240px, 35vw, 520px)",
          background:
            "radial-gradient(circle at 40% 30%, #ffd27b 0%, #f8a6d4 40%, #a5d5ff 80%)", // 💛🩷💙 파스텔 톤
          boxShadow:
            "inset 0 0 120px rgba(255,255,255,0.6), 0 0 160px rgba(255,182,120,0.4)",
          filter: "contrast(1.15) brightness(1.05) saturate(1.1)",
        }}
        animate={{
          backgroundPosition: ["0% 0%", "100% 50%", "50% 100%", "0% 0%"],
          backgroundSize: ["220% 220%", "200% 200%", "220% 220%"],
          rotate: [0, 360],
        }}
        transition={{
          duration: 16,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {/* === Soft highlight (빛감) === */}
        <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_70%_25%,rgba(255,255,255,0.6),transparent_70%)] blur-[80px]" />

        {/* === Fine pastel grain === */}
        <motion.div
          className="absolute inset-0 rounded-full pointer-events-none mix-blend-overlay opacity-[0.4]"
          style={{
            backgroundImage:
              'url("https://www.transparenttextures.com/patterns/dust.png")', // 미세 입자 질감
            backgroundSize: "90px 90px",
            filter: "contrast(350%) brightness(1.2)",
          }}
          animate={{
            backgroundPosition: ["0% 0%", "80% 100%", "0% 0%"],
          }}
          transition={{
            duration: 12,
            ease: "linear",
            repeat: Infinity,
          }}
        />
      </motion.div>
      {/* === Optional soft rings === */}
      <div
        className="absolute w-[180%] h-[180%] rotate-[45deg] opacity-30"
        style={{
          top: "5%",
          left: "-40%",
        }}
      >
        <div className="absolute inset-0 rounded-full border border-white/40" />
        <div className="absolute inset-0 rounded-full border border-white/20 scale-[1.15]" />
        <div className="absolute inset-0 rounded-full border border-white/10 scale-[1.3]" />
      </div>
      {/* === Text === */}
      <div className="absolute z-10 text-center text-white font-title text-6xl sm:text-3xl md:text-7xl px-4">
        Welcome to my space
      </div>
    </section>
  );
}
