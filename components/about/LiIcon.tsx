import { motion, useScroll } from "framer-motion";

export const LiIcon = ({ reference }: any) => {
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ["center end", "center center"],
    layoutEffect: false,
  });

  return (
    <motion.figure
      className="absolute stroke-2 -left-5 stroke-info md:-left-0"
      initial={{ y: 160 }}
      whileInView={{ y: 10 }}
      transition={{ duration: 0.8, type: "spring" }}
    >
      <svg className="-rotate-90" width={75} height={75} viewBox="0 0 100 100">
        <circle
          cx={75}
          cy={50}
          r={20}
          className="stroke-2 fill-transparent stroke-white"
        />
        <motion.circle
          cx={75}
          cy={50}
          r={20}
          className="stroke-2 fill-strong"
          style={{ pathLength: scrollYProgress }}
        />
      </svg>
    </motion.figure>
  );
};
