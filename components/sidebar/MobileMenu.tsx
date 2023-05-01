import { motion, useCycle } from "framer-motion";
import { useRef } from "react";

import { useDimensions } from "@/lib/hooks/use-dimensions";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";


const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

export const MobileMenu = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef<HTMLElement>(null);
  const { height } = useDimensions(containerRef);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
      className="absolute top-0 bottom-0 left-0 z-40"
    >
      <motion.div
        className="absolute top-0 bottom-0 left-0 flex flex-col gap-4 bg-black w-80"
        variants={sidebar}
      />

      <Navigation />
      <MenuToggle toggle={() => toggleOpen()} />
     
    </motion.nav>
  );
};
