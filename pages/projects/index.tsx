import { ProjectList } from "@/components/Projects/ProjectList";
import Layout from "@/components/layout";

import {
  FADE_DOWN_ANIMATION_VARIANTS,
  FADE_UP_ANIMATION_VARIANTS,
} from "@/lib/constants";
import { motion } from "framer-motion";
import { GetStaticPaths } from "next";
import Balancer from "react-wrap-balancer";
import useSWR from "swr";


const meta = {
  title: "Projects | Andres Parra",
  description:
    'My latest web projects and see how we can help bring your ideas to life.',
};



const fetcher = (url: RequestInfo | URL) => fetch(url).then((res) => res.json());

export default function Projects() {
  const { data, error } = useSWR("/api/works", fetcher);
 
  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;
  return (
    <Layout meta={meta}>
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
        className="container h-full pt-8"
      >
        <motion.h1
          className="w-full text-center font-display text-6xl font-extrabold  tracking-[-0.02em] drop-shadow-sm md:text-8xl md:leading-[5rem]"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          <Balancer>Projects</Balancer>
        </motion.h1>
        <motion.p
          variants={FADE_UP_ANIMATION_VARIANTS}
          className="mt-6 text-center text-xl text-primary md:text-2xl"
        >
          My latest web projects and see how we can help bring your ideas to
          life.
        </motion.p>
        {/* <Works /> */}
      </motion.div>
      <ProjectList projects={data} />
      {/* <Circle /> */}
    </Layout>
  );
}
