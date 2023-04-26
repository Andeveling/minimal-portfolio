import Awards from "@/components/about/Awards";
import { Education } from "@/components/about/Education";
import { ExpAndEduContainer } from "@/components/about/ExpAndEduContainer";
import { Experience } from "@/components/about/Experience";
import Intro from "@/components/about/Intro";
import { Skills } from "@/components/about/Skills";
import { Test } from "@/components/about/Test";
import WebVitals from "@/components/home/web-vitals";
import Layout from "@/components/layout";
import { DEPLOY_URL } from "@/lib/constants";
import { motion } from "framer-motion";
import Image from "next/image";

const meta = {
  title: "About me | Andres Parra",
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
        className="container"
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
        <Intro />
        <Skills/>
        <ExpAndEduContainer/>
       
        <Awards />

 
      </motion.div>
    </Layout>
  );
}

const features = [
  {
    title: "Beautiful, reusable components",
    description:
      "Pre-built beautiful, a11y-first components, powered by [Tailwind CSS](https://tailwindcss.com/), [Radix UI](https://www.radix-ui.com/), and [Framer Motion](https://framer.com/motion)",
    large: true,
  },
  {
    title: "Performance first",
    description:
      "Built on [Next.js](https://nextjs.org/) primitives like `@next/font` and `next/image` for stellar performance.",
    demo: <WebVitals />,
  },
  {
    title: "One-click Deploy",
    description:
      "Jumpstart your next project by deploying Precedent to [Vercel](https://vercel.com/) in one click.",
    demo: (
      <a href={DEPLOY_URL}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://vercel.com/button"
          alt="Deploy with Vercel"
          width={120}
        />
      </a>
    ),
  },
  {
    title: "Built-in Auth + Database",
    description:
      "Precedent comes with authentication and database via [Auth.js](https://authjs.dev/) + [Prisma](https://prisma.io/)",
    demo: (
      <div className="flex items-center justify-center space-x-20">
        <Image alt="Auth.js logo" src="/authjs.webp" width={50} height={50} />
        <Image alt="Prisma logo" src="/prisma.svg" width={50} height={50} />
      </div>
    ),
  },
  {
    title: "Hooks, utilities, and more",
    description:
      "Precedent offers a collection of hooks, utilities, and `@vercel/og`",
    demo: (
      <div className="grid grid-flow-col grid-rows-3 gap-10 p-10">
        <span className="font-mono font-semibold">useIntersectionObserver</span>
        <span className="font-mono font-semibold">useLocalStorage</span>
        <span className="font-mono font-semibold">useScroll</span>
        <span className="font-mono font-semibold">nFormatter</span>
        <span className="font-mono font-semibold">capitalize</span>
        <span className="font-mono font-semibold">truncate</span>
      </div>
    ),
  },
];
