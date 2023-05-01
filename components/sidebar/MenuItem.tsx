import { motion } from "framer-motion";
import { useRouter } from "next/router";

const variants = {
  open: {
    x: 50,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    x: 0,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

type MenuItemProps = {
  href: string;
  title: string;
};

export const MenuItem = ({ href, title }: MenuItemProps): JSX.Element => {
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1, translateX: 30 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center w-full mb-5 text-4xl font-bold text-white cursor-pointer"
    >
      <CustomMobileLink title={title} href={href} />
    </motion.li>
  );
};

type CustomMobileLinkProps = {
  href: string;
  title: string;
  className?: string;
};

const CustomMobileLink = ({
  href,
  title,
  className = "",
}: CustomMobileLinkProps) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(href);
  };
  return (
    <button onClick={handleClick} className={`${className}`}>
      {title}
    </button>
  );
};
