import { motion } from "framer-motion";

export const Test = () => {
  const containerVariants = {
    start: {
      rotate: 0,
    },
    end: {
      rotate: 360,
      transition: {
        repeat: Infinity,
        duration: 5,
        ease: "linear",
      },
    },
  };

  const itemVariants = {
    start: {
      x: 0,
      y: 0,
      rotate: 0,
    },
    end: {
      x: 100,
      y: 0,
      rotate: 360,
      transition: {
        repeat: Infinity,
        duration: 5,
        ease: "linear",
      },
    },
  };

  return (
    <motion.div
      style={{
        width: 300,
        height: 300,
        backgroundColor: "lightblue",
        borderRadius: "50%",
        position: "relative",
      }}
      variants={containerVariants}
      initial="start"
      animate="end"
    >
      <motion.div
        style={{
          width: 50,
          height: 50,
          backgroundColor: "orange",
          borderRadius: "50%",
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translate(-50%,-50%)",
        }}
        variants={itemVariants}
      />
      <motion.div
        style={{
          width: 50,
          height: 50,
          backgroundColor: "green",
          borderRadius: "50%",
          position: "absolute",
          top: "50%",
          left: 0,
          transform: "translate(-50%,-50%)",
        }}
        variants={itemVariants}
        animate={{
          ...itemVariants.end,
          y: 100,
        }}
      />
      <motion.div
        style={{
          width: 50,
          height: 50,
          backgroundColor: "red",
          borderRadius: "50%",
          position: "absolute",
          top: "50%",
          right: 0,
          transform: "translate(50%,-50%)",
        }}
        variants={itemVariants}
        animate={{
          ...itemVariants.end,
          x: 0,
          y: -100,
        }}
      />
    </motion.div>
  );
};
