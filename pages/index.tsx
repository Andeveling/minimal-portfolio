import Layout from "@/components/layout";
import {
  CV_LINK,
  FADE_DOWN_ANIMATION_VARIANTS,
  FADE_UP_ANIMATION_VARIANTS,
  NAME,
} from "@/lib/constants";
import { motion } from "framer-motion";
import Balancer from "react-wrap-balancer";

import { HireMe } from "@/components/shared/hireMe";

export default function Home() {
  return (
    <Layout>
      <motion.div
        className="container flex flex-col items-center justify-center w-full h-full px-0 xl:px-5"
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
        <motion.div
          className="fixed -top-1/2 z-10 h-[80vh] w-[80vh] rounded-full border-2 border-primary bg-transparent "
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        />

        <div className="text-center max-w-7xl">
          <motion.p
            className="w-full p-2 font-display text-xl font-thin tracking-[-0.02em] drop-shadow-sm  md:text-2xl  md:leading-[3rem]"
            variants={FADE_DOWN_ANIMATION_VARIANTS}
          >
            <Balancer>Hi, I am</Balancer>
          </motion.p>
          <motion.h1
            className="w-full text-center font-display text-4xl font-extrabold  tracking-[-0.03em] drop-shadow-sm md:text-6xl  xl:text-9xl"
            variants={FADE_DOWN_ANIMATION_VARIANTS}
          >
            <Balancer>{NAME}</Balancer>
          </motion.h1>
          <motion.p
            className="w-full p-2 font-display text-xl font-thin tracking-[-0.01em] drop-shadow-sm  md:text-2xl  md:leading-[2rem]"
            variants={FADE_DOWN_ANIMATION_VARIANTS}
          >
            <Balancer>
              I am a highly motivated and enthusiastic individual with a passion
              for web development and this is my portfolio.
            </Balancer>
          </motion.p>

          <motion.a
            role="button"
            href={CV_LINK}
            target="_blank"
            rel="noreferrer"
            className="relative mt-4 btn"
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            variants={FADE_DOWN_ANIMATION_VARIANTS}
          >
            Download CV
            <span className="w-30 absolute bottom-2 h-0.5 bg-white" />
          </motion.a>
        </div>
        <motion.div
          className="fixed text-sm md:text-md bottom-10 right-10"
          variants={FADE_UP_ANIMATION_VARIANTS}
        >
          <p>DIGITAL WEB PORTFOLIO | 2023</p>
          <p>Build with ♡ by {NAME}</p>
        </motion.div>

        <HireMe />
      </motion.div>
    </Layout>
  );
}
