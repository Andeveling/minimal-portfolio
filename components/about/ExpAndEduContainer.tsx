import { useRef } from "react";
import { Education } from "./Education";
import { Experience } from "./Experience";
import { motion, useScroll } from "framer-motion";
import { Award } from "lucide-react";
import Awards from "./Awards";

export const ExpAndEduContainer = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
    layoutEffect: true,
  });
  return (
    <div ref={ref} className="relative mx-auto w-[100%]">
      <motion.div
        className="absolute  left-4 top-2 h-full w-[4px] origin-top rounded-full bg-primary md:left-9"
        style={{ scaleY: scrollYProgress }}
      />
      <Experience />
      <Education />
      <Awards/>
    </div>
  );
};
