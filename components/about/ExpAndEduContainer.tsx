import { useRef } from "react";
import { Education } from "./Education";
import { Experience } from "./Experience";
import { motion, useScroll } from "framer-motion";

export const ExpAndEduContainer = () => {
     const ref = useRef(null);
     const { scrollYProgress } = useScroll({
       target: ref,
       offset: ["start end", "center start"],
     });
  return (
    <div ref={ref} className="relative mx-auto w-[100%]">
      {/* <motion.div
        className="absolute left-9 top-2 w-full h-[px] origin-top rounded-full bg-primary"
        style={{ scaleX: scrollYProgress }}
      /> */}
      <motion.div
        className="absolute left-9 top-2 h-full w-[4px] origin-top rounded-full bg-primary"
        style={{ scaleY: scrollYProgress }}
      />
      <Experience />
      <Education />
    </div>
  );
};
