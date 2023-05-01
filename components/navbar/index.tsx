import {
  FADE_DOWN_ANIMATION_VARIANTS,
  PublicRoutes,
  SOCIAL_LINKS,
} from "@/lib/constants";
import useScroll from "@/lib/hooks/use-scroll";
import useWindowSize from "@/lib/hooks/use-window-size";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { MobileMenu } from "../sidebar/MobileMenu";
import AnimateLogo from "./animateLogo";

const MotionLink = motion(Link);

const CustomLink = ({
  href,
  title,
  className = "",
}: {
  href: string;
  title: string;
  className?: string;
}) => {
  const router = useRouter();
  return (
    <MotionLink
      href={href}
      className={`${className} group relative`}
      whileHover={{ translateY: -5 }}
    >
      {title}
      <span
        className={`ease absolute left-0 -bottom-0.5 inline-block h-[0.5px] bg-primary font-bold transition-[width] duration-500 group-hover:w-full ${
          router.pathname === href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </MotionLink>
  );
};

const buttonVariants = {
  hover: {
    translateY: -5,
  },
};

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const scrolled = useScroll(50);
  const { isTablet, isMobile, isDesktop } = useWindowSize();
  
  return (
    <header>
      {(isTablet || isMobile) && <MobileMenu />}
      {isDesktop && (
        <div className={`fixed items-center justify-between w-full grid-cols-3 px-6 py-8 lg:px-32 lg:grid ${scrolled ? "border-b border-gray-500  bg-white" : "bg-white/0"
          } z-30 flex justify-between transition-all`}>
          {/* Desktop menu*/}
          <nav className="max-w-lg space-x-8">
            {PublicRoutes.map((link) => (
              <CustomLink
                key={link.id}
                href={link.route}
                title={link.title.toLocaleUpperCase()}
              />
            ))}
          </nav>
          <nav className="flex items-center justify-center">
            <strong className="text-primary ">
              <Link href="/" className="text-2xl">
                <AnimateLogo />
              </Link>
            </strong>
          </nav>

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
        </div>
      )}
    </header>
  );
};
