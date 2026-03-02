import { motion } from "motion/react";

export function GridShimmer() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"
      />
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"
        animate={{
          x: ["-100%", "200%"],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
          repeatDelay: 2,
        }}
      />
    </div>
  );
}
