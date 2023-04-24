import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerDirection: -1,
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

export const AnimateText = ({ text }: { text: string }) => {
  return (
    <motion.div variants={container} initial="hidden" animate="show">
      {text.split("").map((item, i) => (
        <AnimateChar key={i} char={item} />
      ))}
    </motion.div>
  );
};

const AnimateChar = ({ char }: { char: string }) => {
  return <motion.span variants={item}>{char}</motion.span>;
};
