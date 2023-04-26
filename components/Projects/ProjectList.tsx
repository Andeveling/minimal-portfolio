import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ProjectT } from "models/Project.types";

export const ProjectList = ({projects}:{projects:ProjectT[]}) => {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };
  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  

  const CustomLink = motion(Link);
  
  return (
  
      <motion.ul
        variants={container}
        initial="hidden"
        animate="show"
        className="mt-12 flex flex-wrap justify-center gap-5"
      >
        {projects.map((project, index) => {
          return (
            <motion.li
              key={project.id}
              className="group relative h-[375px] w-[375px] transform  bg-primary transition duration-500 ease-in-out hover:-translate-y-2  sm:w-[600px]"
              variants={item}
            >
              <CustomLink href={`/projects/${project.id}`}>
                <div className="relative h-full">
                  <div>
                    <span className="absolute inset-0 m-auto  flex h-48 w-48 items-center justify-center rounded-full border-4 border-base-300 p-1 text-base-300 group-hover:opacity-0">
                      <h2 className="text-6xl font-thin">
                        {index + 1 < 10 ? `0${index + 1}` : `${index + 1}`}
                      </h2>
                    </span>
                  </div>
                  <div
                    className="
                h-full
                translate-y-0
                transform p-1 
                opacity-5 transition-all 
                group-hover:translate-y-0 
                group-hover:opacity-100"
                  >
                    <div className="absolute inset-0 ">
                      <div className="absolute top-0 h-20 w-full items-center bg-black bg-opacity-95 py-2 text-center text-base-300">
                        <p className="text-2xl">{project.title}</p>
                        <p>{project.subtitle}</p>
                      </div>
                      <Image
                        className="h-full object-cover "
                        src={project.imageUrl}
                        width={1200}
                        height={650}
                        alt="Shoes"
                      />
                      <div className="absolute bottom-0 flex h-20 w-full items-center bg-black bg-opacity-95 py-2 text-center text-base-300">
                        <div className="mt-2 w-full space-x-2 px-4">
                          {project.tech.map((item) => (
                            <span
                              key={item}
                              className="badge rounded-full bg-white text-black "
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CustomLink>
            </motion.li>
          );
        })}
      </motion.ul>
  
  );
};

interface Props {
  emoji: string;
  hueA: number;
  hueB: number;
}

const cardVariants: Variants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const hue = (h: number) => `hsl(${h}, 100%, 50%)`;

function Card({ emoji, hueA, hueB }: Props) {
  const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`;

  return (
    <motion.div
      className="card-container"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <div className="splash" style={{ background }} />
      <motion.div className="card" variants={cardVariants}>
        {emoji}
      </motion.div>
    </motion.div>
  );
}

const food: [string, number, number][] = [
  ["🍅", 340, 10],
  ["🍊", 20, 40],
  ["🍋", 60, 90],
  ["🍐", 80, 120],
  ["🍏", 100, 140],
  ["🫐", 205, 245],
  ["🍆", 260, 290],
  ["🍇", 290, 320],
];
