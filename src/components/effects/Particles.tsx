import { motion } from "motion/react";
import { useEffect, useState } from "react";

export function Particles() {
  const [particles, setParticles] = useState<{ id: number; x: number; y: number; size: number }[]>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-secondary/20"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [0, -100],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 10,
          }}
        />
      ))}
    </div>
  );
}
