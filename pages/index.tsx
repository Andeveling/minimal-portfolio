import Card from "@/components/home/card";
import Layout from "@/components/layout";
import Balancer from "react-wrap-balancer";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { DEPLOY_URL, FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/constants";

import WebVitals from "@/components/home/web-vitals";

import Image from "next/image";
import { Social } from "@/components/home/Social";
import { ArrowLeft } from "lucide-react";
import { HireMe } from "@/components/shared/hireMe";
import { useRef } from "react";

export default function Home() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <>
      <Layout>
        <motion.div
          className="container flex h-full w-full flex-col items-center justify-center px-5 xl:px-0"
          initial="hidden"
          whileInView="show"
          animate="show"
          ref={ref}
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
            className="fixed -top-1/2 z-10 h-[80vh] w-[80vh] rounded-full border-2 border-primary bg-transparent"
            style={{ translateY: scrollYProgress }}
          />

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

          <div className="text-center">
            <motion.h1
              className="w-full text-center font-display text-9xl font-extrabold  tracking-[-0.03em] drop-shadow-sm md:text-9xl md:leading-[7rem]"
              variants={FADE_DOWN_ANIMATION_VARIANTS}
            >
              <Balancer>Portfolio Web Developer</Balancer>
            </motion.h1>
            <motion.h2
              className="w-full p-2 font-display text-2xl font-thin tracking-[-0.02em]  drop-shadow-sm md:text-3xl md:leading-[3rem]"
              variants={FADE_DOWN_ANIMATION_VARIANTS}
            >
              <Balancer>Javascript Developer | 2023</Balancer>
            </motion.h2>
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
