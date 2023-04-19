import Card from "@/components/home/card";
import Layout from "@/components/layout";
import Balancer from "react-wrap-balancer";
import { motion } from "framer-motion";
import { DEPLOY_URL, FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/constants";

import WebVitals from "@/components/home/web-vitals";

import Image from "next/image";
import { Social } from "@/components/home/Social";

export default function Home() {
  return (
    <Layout>
      <motion.div
        className="flex h-full w-full flex-col items-center justify-center px-5 xl:px-0"
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
      >
        {/* <motion.a
          variants={FADE_DOWN_ANIMATION_VARIANTS}
          href="https://twitter.com/steventey/status/1613928948915920896"
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center py-2 mx-auto mb-5 space-x-2 overflow-hidden transition-colors bg-blue-100 rounded-full max-w-fit px-7 hover:bg-blue-200"
        >
          <Twitter className="h-5 w-5 text-[#1d9bf0]" />
          <p className="text-sm font-semibold text-[#1d9bf0]">
            Introducing Precedent
          </p>
        </motion.a> */}
        <motion.h1
          className="w-full text-center font-display text-9xl font-extrabold  tracking-[-0.02em] drop-shadow-sm md:text-9xl md:leading-[7rem]"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          <Balancer>Andres Parra</Balancer>
        </motion.h1>
        <motion.h1
          className=" w-full text-center font-display text-4xl font-thin tracking-[-0.02em]  drop-shadow-sm md:text-7xl md:leading-[5rem]"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          <Balancer> Web Developer</Balancer>
        </motion.h1>
        {/* <motion.p
          className="mt-6 text-center text-gray-500 md:text-xl"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          <Balancer>
            An opinionated collection of components, hooks, and utilities for
            your Next.js project.
          </Balancer>
        </motion.p> */}
      </motion.div>
      {/* here we are animating with Tailwind instead of Framer Motion because Framer Motion messes up the z-index for child components */}
      {/* <div className="my-10 grid w-full max-w-screen-xl animate-[slide-down-fade_0.5s_ease-in-out] grid-cols-1 gap-5 px-5 md:grid-cols-3 xl:px-0">
        {features.map(({ title, description, demo, large }) => (
          <Card
            key={title}
            title={title}
            description={description}
            demo={
              title === "Beautiful, reusable components" ? (
                <ComponentGrid />
              ) : (
                demo
              )
            }
            large={large}
          />
        ))}
      </div> */}
      <motion.div
        className="mt-6 h-[200px] w-[200px] border-separate border-spacing-4 rounded-full border-4 border-dotted"
        animate={{
          scale: [1, 1.1, 1.4, 1.2, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ["100%", "80%", "90%", "100%", "100%"],
        }}
      >
        <div className="flex h-full w-full flex-col items-center justify-center">
          <p className="flex h-[80%] w-[80%] items-center justify-center rounded-full bg-white text-black">
            <span className="text-2xl font-bold">Hire me</span>
          </p>
        </div>
      </motion.div>
    </Layout>
  );
}
