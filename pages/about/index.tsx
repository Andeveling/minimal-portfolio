import Awards from "@/components/about/Awards";
import { ExpAndEduContainer } from "@/components/about/ExpAndEduContainer";
import Intro from "@/components/about/Intro";
import { Skills } from "@/components/about/Skills";
import Layout from "@/components/layout";
import { FADE_DOWN_ANIMATION_VARIANTS, NAME } from "@/lib/constants";
import { motion } from "framer-motion";
import Balancer from "react-wrap-balancer";

const meta = {
  title: `About me | ${NAME}`,
  description:
    'I am a frontend and backend developer with 2 years of experience in HTML, CSS, React, Node, and more. I am passionate about creating clean, intuitive, and scalable applications that solve real-world problems. In my current role, I lead the development of a full-stack web app that increased customer engagement by 90%. I am also a team player with excellent communication skills and a passion for learning. Let is work together to bring your ideas to life!"',
};

export default function About() {
  return (
    <Layout meta={meta} footer>
      {/* <Test/> */}
      <motion.div
        initial="hidden"
        whileInView="show"
        animate="show"
        className="container py-32"
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
        <motion.h1
          className="mb-10 w-full text-center font-display text-6xl font-extrabold  tracking-[-0.02em] drop-shadow-sm md:text-8xl md:leading-[5rem]"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          <Balancer>About</Balancer>
        </motion.h1>
        <Intro />
        <Skills />
        <ExpAndEduContainer />
      </motion.div>
    </Layout>
  );
}
