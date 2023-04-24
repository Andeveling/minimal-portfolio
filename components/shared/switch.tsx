import { motion } from "framer-motion";
import { useState } from "react";

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};
export const SwitchCustom = () => {
    const [isOn, setIsOn] = useState(false);
  const toggleSwitch = () => setIsOn(!isOn);
  return (
    <div
      className={`flex h-20 w-96 cursor-pointer rounded-full  bg-black p-2 ${
        isOn ? "justify-start" : "justify-end"
      }`}
      data-isOn={isOn}
      onClick={toggleSwitch}
    >
      <motion.div
        className="flex h-16 w-44 items-center justify-center rounded-full bg-white"
        layout
        transition={spring}
      >
        CASE STUDY
      </motion.div>
    </div>
  );
}