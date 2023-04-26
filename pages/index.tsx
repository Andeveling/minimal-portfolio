import Layout from "@/components/layout";
import { FADE_DOWN_ANIMATION_VARIANTS, FADE_UP_ANIMATION_VARIANTS } from "@/lib/constants";
import { motion, useScroll } from "framer-motion";
import Balancer from "react-wrap-balancer";

import { HireMe } from "@/components/shared/hireMe";
import { useRef } from "react";

export default function Home() {
  return (
    <>
      <Layout>
        <motion.div
          className="container flex h-full w-full flex-col items-center justify-center px-5 xl:px-0"
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

          <div className="fixed bottom-10 right-10 ">
            <p>DIGITAL WEB PORTFOLIO | 2023</p>
            <p>Build with ♡ by Andres Parra</p>
          </div>

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

          <div className="max-w-7xl text-center">
            <motion.p
              className="w-full p-2 font-display text-2xl font-thin tracking-[-0.02em]  drop-shadow-sm md:text-3xl md:leading-[3rem]"
              variants={FADE_DOWN_ANIMATION_VARIANTS}
            >
              <Balancer>Hi, I am</Balancer>
            </motion.p>
            <motion.h1
              className="w-full text-center font-display text-7xl font-extrabold tracking-[-0.03em] drop-shadow-sm md:text-9xl md:leading-[7rem]"
              variants={FADE_DOWN_ANIMATION_VARIANTS}
            >
              <Balancer>ANDRES PARRA</Balancer>
            </motion.h1>
            <motion.p
              className="w-full p-2 font-display text-2xl font-thin tracking-[-0.02em]  drop-shadow-sm md:text-3xl md:leading-[3rem]"
              variants={FADE_DOWN_ANIMATION_VARIANTS}
            >
              <Balancer>
                I am a highly motivated and enthusiastic individual with a
                passion for web development and this is my portfolio.
              </Balancer>
            </motion.p>
          </div>

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
       
        <HireMe />
      </Layout>
    </>
  );
}
