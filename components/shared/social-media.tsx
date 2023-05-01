import { FADE_DOWN_ANIMATION_VARIANTS, SOCIAL_LINKS } from "@/lib/constants";
import { motion } from "framer-motion";
const buttonVariants = {
  hover: {
    translateY: -5,
  },
};
export const SocialMedia = () => {
  return (
    <nav>
      <motion.ul
        variants={FADE_DOWN_ANIMATION_VARIANTS}
        className="flex items-center justify-center space-x-5"
      >
        {SOCIAL_LINKS.map((link, i) => (
          <motion.li
            key={link.id}
            className="h-10 w-14 rounded-full border border-black bg-gray-900 p-1.5 px-4 text-sm text-white transition-all hover:bg-black"
            whileTap={{ scale: 0.9 }}
            whileHover="hover"
            variants={buttonVariants}
          >
            <a href={link.href} target="_blank" rel="noopener noreferrer">
              {link.icon}
            </a>
          </motion.li>
        ))}
      </motion.ul>
    </nav>
  );
};
