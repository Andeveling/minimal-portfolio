import Layout from "@/components/layout";
import {
  FADE_DOWN_ANIMATION_VARIANTS,
  FADE_UP_ANIMATION_VARIANTS,
} from "@/lib/constants";
import { motion } from "framer-motion";
import Balancer from "react-wrap-balancer";
import { Circle } from "@/components/about/Circle";
import { WorkList } from "@/components/work/WorkList";

export default function Work() {
  return (
    <Layout>
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
        className="h-full pt-8 pb-20"
      >
        <motion.h1
          className="w-full text-center font-display text-6xl font-extrabold  tracking-[-0.02em] drop-shadow-sm md:text-6xl md:leading-[5rem]"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          <Balancer>WORK</Balancer>
        </motion.h1>
        <motion.p variants={FADE_UP_ANIMATION_VARIANTS}>
          My latest web projects and see how we can help bring your ideas to
          life.
        </motion.p>
        <WorkList />
      </motion.div>
      {/* <Circle /> */}
    </Layout>
  );
}
