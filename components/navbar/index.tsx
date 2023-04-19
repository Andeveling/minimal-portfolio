import { motion, transform } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import { Social } from "../home/Social";

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
        className={`ease absolute left-0 -bottom-0.5 inline-block h-[2px] bg-primary font-bold transition-[width] duration-500 group-hover:w-full ${
          router.pathname === href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </MotionLink>
  );
};

export const Navbar = () => {
  return (
    <>
      <nav className="flex items-center justify-between space-x-8 text-xl font-bold">
        <CustomLink href="/" title="Home" />
        <CustomLink href="/about" title="About" />
        <CustomLink href="/work" title="Work" />
        <CustomLink href="/blog" title="Blog" />
      </nav>
      <Social />
    </>
  );
};
