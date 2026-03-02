import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export function ParallaxShapes() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 45]);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden pointer-events-none -z-20 h-full">
      <motion.div
        style={{ y: y1, rotate }}
        className="absolute top-20 left-10 w-64 h-64 rounded-full bg-primary/5 blur-3xl"
      />
      <motion.div
        style={{ y: y2, rotate: rotate }}
        className="absolute bottom-40 right-10 w-96 h-96 rounded-full bg-secondary/5 blur-3xl"
      />
    </div>
  );
}
