import { motion } from "framer-motion";
import { useRouter } from "next/router";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
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

export const MenuItem = ({  href, title }: MenuItemProps): JSX.Element => {
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center mb-5 cursor-pointer"
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
    <button
      onClick={handleClick}
      className={`${className} group relative text-white`}
    >
      {title}
    </button>
  );
};
