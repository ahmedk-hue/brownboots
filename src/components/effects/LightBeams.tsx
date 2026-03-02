import { motion } from "motion/react";

export function LightBeams() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      <motion.div
        className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent blur-sm origin-top"
        animate={{
          rotate: [-15, 15, -15],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-0 right-1/4 w-1 h-full bg-gradient-to-b from-transparent via-secondary/20 to-transparent blur-sm origin-top"
        animate={{
          rotate: [15, -15, 15],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
    </div>
  );
}
