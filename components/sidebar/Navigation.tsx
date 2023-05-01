import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import { PublicRoutes } from "@/lib/constants";
import Link from "next/link";
import AnimateLogo from "../navbar/animateLogo";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const Navigation = () => (
  <motion.ul variants={variants} className="absolute w-56 p-6 mt-12">
    {PublicRoutes.map((link) => (
      <MenuItem key={link.id} href={link.route} title={link.title} />
    ))}
  </motion.ul>
);
