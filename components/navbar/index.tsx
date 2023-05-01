import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import AnimateLogo from "./animateLogo";
import { useState } from "react";
import useScroll from "@/lib/hooks/use-scroll";
import { FADE_DOWN_ANIMATION_VARIANTS, SOCIAL_LINKS } from "@/lib/constants";
import useWindowSize from "@/lib/hooks/use-window-size";
import { MobileMenu } from "../sidebar/MobileMenu";

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

const CustomMobileLink = ({
  href,
  title,
  className = "",
  toggle,
}: {
  href: string;
  title: string;
  className?: string;
  toggle: () => void;
}) => {
  const router = useRouter();
  const handleClick = () => {
    toggle();
    router.push(href);
  };
  return (
    <button onClick={handleClick} className={`${className} group relative`}>
      {title}
      <span
        className={`ease absolute left-0 -bottom-0.5 inline-block h-[0.5px] bg-white font-bold transition-[width] duration-500 group-hover:w-full ${
          router.pathname === href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </button>
  );
};

const buttonVariants = {
  hover: {
    translateY: -5,
  },
};

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleIsOpen = () => setIsOpen(!isOpen);
  const scrolled = useScroll(50);
  const { isMobile, isDesktop } = useWindowSize();
  return (
    <header
      className={`w-full px-6 py-8 md:px-32 ${
        scrolled ? "border-b border-gray-500  bg-white" : "bg-white/0"
      } z-30 flex justify-between transition-all`}
    >
      {isMobile && <MobileMenu />}


      <div className="items-center justify-between hidden w-full grid-cols-3 lg:grid">
        {/* Desktop menu*/}
        <nav className="hidden max-w-lg space-x-8 lg:block ">
          <CustomLink href="/" title="HOME" />
          <CustomLink href="/about" title="ABOUT" />
          <CustomLink href="/projects" title="PROJECTS" />
        </nav>
        <nav className="items-center justify-center hidden lg:flex">
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

      {/* Mobile menu*/}
      {isOpen && (
        <div className="fixed top-1/2 left-1/2  z-30 grid min-h-[70vh] min-w-[70vw] -translate-x-1/2  -translate-y-1/2 items-start justify-center gap-10 rounded-lg bg-black/90 py-10 backdrop-blur-md">
         

          <nav>
            <ul className="flex flex-col justify-center max-w-lg gap-3 text-center text-white">
              <li>
                <CustomMobileLink href="/" title="HOME" toggle={handleIsOpen} />
              </li>
              <li>
                <CustomMobileLink
                  href="/about"
                  title="ABOUT"
                  toggle={handleIsOpen}
                />
              </li>
              <li>
                <CustomMobileLink
                  href="/projects"
                  title="PROJECTS"
                  toggle={handleIsOpen}
                />
              </li>
            </ul>
          </nav>

          <nav>
            <p className="mb-4 text-center text-white">Follow me:</p>
            <ul className="flex items-center justify-center space-x-5">
              {SOCIAL_LINKS.map((link) => (
                <li
                  key={link.id}
                  className="h-10 w-14 rounded-full border border-white bg-white p-1.5 px-4 text-sm text-black transition-all hover:bg-black"
                >
                  <a href={link.href} target="_blank" rel="noopener noreferrer">
                    {link.icon}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};
