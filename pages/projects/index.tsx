import { ProjectList } from "@/components/Projects/ProjectList";
import Layout from "@/components/layout";
import fs from "fs";

import {
  FADE_DOWN_ANIMATION_VARIANTS,
  FADE_UP_ANIMATION_VARIANTS,
  NAME,
} from "@/lib/constants";
import { motion } from "framer-motion";
import { ProjectT } from "models/Project.types";
import { GetStaticProps } from "next";
import path from "path";
import Balancer from "react-wrap-balancer";

const meta = {
  title: `Projects | ${NAME}`,
  description:
    "My latest web projects and see how we can help bring your ideas to life.",
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const filePath = path.join(process.cwd(), "json");
  const projectsDataJson = fs.readFileSync(filePath + "/projects.json", "utf8");
  const data: ProjectT[] = JSON.parse(projectsDataJson);
  return {
    props: {
      projects: data,
    },
  };
};

export default function Projects({ projects }: { projects: ProjectT[] }) {
  return (
    <Layout meta={meta} footer>
      <motion.div
        initial="hidden"
        whileInView="show"
        animate="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
        className="container h-full pt-32"
      >
        <motion.h1
          className="w-full text-center font-display text-6xl font-extrabold  tracking-[-0.02em] drop-shadow-sm md:text-8xl md:leading-[5rem]"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          <Balancer>Projects</Balancer>
        </motion.h1>
        <motion.p
          variants={FADE_UP_ANIMATION_VARIANTS}
          className="px-4 mt-6 text-xl text-center text-primary md:text-2xl"
        >
          These are some of my latest projects where I demonstrate some of my
          skills, what I dedicate my time to and the improvement I have had in
          the last two years.
        </motion.p>
      </motion.div>
        <ProjectList projects={projects} />
    </Layout>
  );
}
