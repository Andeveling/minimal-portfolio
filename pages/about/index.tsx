import { Experience } from "@/components/about/Experience";
import WebVitals from "@/components/home/web-vitals";
import Layout from "@/components/layout";
import { DEPLOY_URL, FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/constants";
import { motion } from "framer-motion";
import Image from "next/image";
import Balancer from "react-wrap-balancer";

export default function About() {
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
      >
        <motion.div
          className="flex justify-center rounded-full"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          <Image
            src="https://res.cloudinary.com/dg84upfsp/image/upload/v1664231394/PORTFOLIO/andres_vbaip0.jpg"
            width={200}
            height={200}
            alt="Profile Photo"
          />
        </motion.div>
        <motion.h1
          className="w-full text-center font-display text-9xl font-extrabold  tracking-[-0.02em] drop-shadow-sm md:text-9xl md:leading-[7rem]"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          <Balancer>Code for fun!</Balancer>
        </motion.h1>

        <motion.p
          className="mt-6 text-center text-gray-500 md:text-xl"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          <Balancer>
            I am a highly motivated and enthusiastic individual with a passion
            for web development. With (2) two years of experience in the
            industry, I have gained a solid foundation in both front-end and
            back-end technologies. I am a team player and have excellent
            communication and problem-solving skills. I am constantly seeking
            new challenges to grow and improve my skills as a developer.
          </Balancer>
        </motion.p>

        <Experience />

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
