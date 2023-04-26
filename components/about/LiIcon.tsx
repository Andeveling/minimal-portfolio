import { motion, useScroll } from "framer-motion";
import path from "path";
import { MutableRefObject, useRef } from "react";



export const LiIcon = ({ reference }: any) => {
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ["center end", "center center"],
  });
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => {
      const delay = 1 + i * 0.5;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: scrollYProgress,
          opacity: { delay, duration: 0.01 },
        },
      };
    },
  };
  return (
    <motion.figure
      className="absolute left-0 stroke-white stroke-2"
      initial={{ y: 160 }}
      whileInView={{ y: 10 }}
      transition={{ duration: 0.8, type: "spring" }}
    >
      <svg className="-rotate-90" width={75} height={75} viewBox="0 0 100 100">
        <circle
          cx={75}
          cy={50}
          r={20}
          className="fill-transparent stroke-white stroke-2"
        />
        <motion.circle
          cx={75}
          cy={50}
          r={20}
          className="fill-strong stroke-2"
          style={{ pathLength: scrollYProgress }}
        />
      </svg>
    </motion.figure>
  );
};

/* 
  <figure className="absolute left-0 stroke-2 stroke-white">
      <svg className="-rotate-90" width={75} height={75} viewBox="0 0 100 100">
        <circle
          cx={75}
          cy={50}
          r={20}
          className="stroke-1 fill-none stroke-red-500"
        />
        <motion.circle
          cx={75}
          cy={50}
          r={20}
          className="stroke-1 fill-light"
          style={{ pathLength: scrollYProgress }}
        />
        <circle
          cx={75}
          cy={50}
          r={10}
          className="stroke-1 animate-pulse fill-red-500"
        />
      </svg>
    </figure> */
