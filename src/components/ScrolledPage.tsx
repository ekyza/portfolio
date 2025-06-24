import { motion, useSpring, useScroll } from "motion/react";

import useTheme from "../hooks/useTheme";

interface ScrolledPageProps {
  children: React.ReactNode;
}

export default function ScrolledPage({ children }: ScrolledPageProps) {
  const { scrollYProgress } = useScroll();
  const { isDark } = useTheme();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 10,
    restDelta: 0.001,
  });

  return (
    <>
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 3,
          originX: 0,
          backgroundColor: isDark ? "#33ce78" : "#28a964",
        }}
      />
      {children}
    </>
  );
}
