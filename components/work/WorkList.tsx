import { motion, Variants } from "framer-motion";
import { Projects } from "./data";
import Image from "next/image";
import Link from "next/link";

export const WorkList = () => {
  const container = {
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

  return (
    <motion.ul
      variants={container}
      initial="hidden"
      animate="show"
      className="flex flex-wrap justify-center gap-2"
    >
      {Projects.map((project, index) => {
        return (
          <Link key={project.id} href={`/work/${project.id}`} passHref>
            <motion.li
              className="card image-full w-96 bg-base-100 shadow-xl"
              variants={item}
            >
              <figure>
                <Image
                  src={project.imageUrl}
                  width={384}
                  height={200}
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title flex h-10 w-10 justify-center rounded-full border-4 border-neutral-content p-1">
                  {index + 1 < 10 ? `0${index + 1}` : `${index + 1}`}
                </h2>
                <p>{project.subtitle}</p>
              </div>
            </motion.li>
          </Link>
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
