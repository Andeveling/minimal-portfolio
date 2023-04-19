import { Github, Twitter } from "@/components/shared/icons";
import { FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/constants";
import { motion } from "framer-motion";
import LinkedIn from "../shared/icons/linkedIn";

export const Social = () => {
  const buttonVariants = {
    hover: {
      translateY: -5,
    },
  };
  return (
    <motion.div
      className="flex items-center justify-center space-x-5"
      variants={FADE_DOWN_ANIMATION_VARIANTS}
    >
      {socialLinks.map((item) => (
        <motion.a
          key={item.href}
          className="rounded-full border border-black bg-black p-1.5 px-4 text-sm text-white transition-all hover:bg-white hover:text-black"
          whileTap={{ scale: 0.9 }}
          whileHover="hover"
          variants={buttonVariants}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {item.icon}
        </motion.a>
      ))}
    </motion.div>
  );
};

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/andrespsanchez/",
    icon: <LinkedIn />,
  },
  {
    href: "https://github.com/Andeveling",
    icon: <Github />,
  },
  {
    href: "https://twitter.com/Andeveling",
    icon: <Twitter />,
  },
];
