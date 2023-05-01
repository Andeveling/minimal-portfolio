import { NAME, SOCIAL_LINKS } from "@/lib/constants";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="w-full px-4 py-8 text-lg font-medium border-t-2 border-gray-500 border-solid md:px-32 ">
      <div className="grid justify-center grid-cols-1 md:grid-cols-3">
        <span className="text-center">
          {new Date().getFullYear()} &copy; All Rights Reserved.
        </span>

        <div className="flex justify-center col-span-3 text-center md:col-span-1">
          Build with
          <span className="text-pink-500 text-md ">&nbsp;&#9825;</span>
          &nbsp;by {NAME}
        </div>

        <div className="grid max-w-sm grid-cols-3 col-span-3 gap-4 justify-self-center md:justify-self-end md:col-span-1">
          {SOCIAL_LINKS.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              target="_blank"
              className="hover:text-info"
            >
              {link.title}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};
