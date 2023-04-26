import { motion, transform } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import { Social } from "../home/Social";
import { Audiowide } from "@next/font/google";
import useScroll from "@/lib/hooks/use-scroll";
import { MAIL_TO } from "@/lib/constants";

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

export const Navbar = () => {
  const scrolled = useScroll(50);
  return (
    <nav className="grid w-full grid-cols-3 items-center justify-between text-xl ">
      <div className="max-w-lg space-x-8">
        <CustomLink href="/" title="HOME" />
        <CustomLink href="/about" title="ABOUT" />
        <CustomLink href="/projects" title="PROJECTS" />
        <CustomLink href="/blog" title="BLOG" />
      </div>
      <div className="flex items-center justify-center">
        <strong className="text-primary hover:text-amber-200">
          <a href={MAIL_TO}>OPEN TO WORK!</a>
        </strong>
      </div>
      <Social />
    </nav>
  );
};
