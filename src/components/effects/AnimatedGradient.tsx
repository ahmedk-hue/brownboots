import { motion } from "motion/react";

export function AnimatedGradient() {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10 pointer-events-none">
      <motion.div
        className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] opacity-30 blur-[100px]"
        animate={{
          background: [
            "radial-gradient(circle, rgba(254,0,0,0.2) 0%, rgba(8,77,217,0.1) 50%, transparent 100%)",
            "radial-gradient(circle, rgba(8,77,217,0.2) 0%, rgba(254,0,0,0.1) 50%, transparent 100%)",
            "radial-gradient(circle, rgba(254,0,0,0.2) 0%, rgba(8,77,217,0.1) 50%, transparent 100%)",
          ],
          transform: [
            "translate(0%, 0%) scale(1)",
            "translate(-10%, -10%) scale(1.1)",
            "translate(0%, 0%) scale(1)",
          ],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
}
