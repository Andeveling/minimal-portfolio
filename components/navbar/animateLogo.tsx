import { Variants, motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const AnimateLogo = () => {
  const nameVariants: Variants = {
    hidden: {
      opacity: 0,
      x: -50,
    },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,

      transition: {
        delay: i * 0.1,
      },
    }),
  };

  const controls = useAnimation();

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  return (
    <motion.div>
      {["A", "N", "D", "R", "E", "S", " ", "P", "A", "R", "R", "A"].map(
        (letter, i) => (
          <motion.span
            key={i}
            variants={nameVariants}
            custom={i}
            initial="hidden"
            animate={controls}
          >
            {letter}
          </motion.span>
        ),
      )}
    </motion.div>
  );
};

export default AnimateLogo;
