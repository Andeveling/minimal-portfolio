import Layout from "@/components/layout";
import {
  FADE_DOWN_ANIMATION_VARIANTS,
  FADE_UP_ANIMATION_VARIANTS,
} from "@/lib/constants";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/router";

const technologies = [
  "NextJs",
  "SWR",
  "Tailwind CSS",
  "Strapi",
  "PostgreSQL",
  "Railway",
  "Vercel"
];

export default function ProjectPage() {
  const router = useRouter();
  return (
    <Layout>
      <motion.div
        className="container mt-12 flex h-full w-full flex-col items-center justify-center px-5 text-xl md:text-2xl xl:px-0"
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
          className="flex h-32 w-32 items-center justify-center rounded-full border-4 border-primary text-5xl"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          {router.query.id}
        </motion.div>
        <motion.h1
          className="mt-8 text-6xl font-medium md:text-8xl"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          Arqustik App
        </motion.h1>
        <motion.h4
          className="mt-2 text-3xl font-medium text-base-300 md:text-4xl"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          Customer service and management tool
        </motion.h4>
        <motion.div
          className="mt-8 flex w-[60%]"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          <div className="card grid h-20 flex-grow items-center justify-end ">
            <a
              role="button"
              className="btn-ghost btn text-xl text-primary md:text-2xl"
            >
              Demo
            </a>
          </div>
          <div className="divider divider-horizontal" />
          <div className="card grid h-20 flex-grow items-center justify-start ">
            <a
              role="button"
              className="btn-ghost btn text-xl text-primary md:text-2xl"
            >
              Repository
            </a>
          </div>
        </motion.div>

        <motion.p
          variants={FADE_DOWN_ANIMATION_VARIANTS}
          className="mt-6 text-center text-xl  md:text-2xl"
        >
          This tool is designed to facilitate the quoting process for PVC
          windows manufactured by Arqustik SAS, Colombia, enabling a faster
          commercial approach. It has a public section for interested users to
          obtain quotes, and a private section for managing the customer&apos;s
          web interactions.
        </motion.p>
        <center className="space-x-4 flex items-center mt-4">
          <p className="font-medium">Build with:</p>
          {technologies.map((item) => (
            <span key={item} className="badge badge-lg">
              {item}
            </span>
          ))}
        </center>
        <motion.div
          className="grid  w-full grid-cols-4 gap-8  py-16 "
          variants={FADE_UP_ANIMATION_VARIANTS}
        >
          <center>
            <p className="font-medium">Client</p>
            <p>Arqustik</p>
            <div className="divider lg:divider-horizontal" />
          </center>

          <center>
            <p className="font-medium">Roles</p>
            <p>Product Designer</p>
            <p>Full Stack Developer</p>
          </center>

          <center>
            <p className="font-medium">Industries</p>
            <p>Construction</p>
          </center>

          <center>
            <p className="font-medium">Date</p>
            <p>2022-2023</p>
          </center>
        </motion.div>

        <motion.div
          className="mockup-window w-full border bg-base-300"
          variants={FADE_UP_ANIMATION_VARIANTS}
        >
          <Image
            className="h-full w-full"
            src="https://res.cloudinary.com/dg84upfsp/image/upload/v1675561334/Screenshot_3_ykbr0a.jpg"
            width={1500}
            height={750}
            alt="photo"
          />
        </motion.div>

        <div className="mt-16 grid grid-cols-2 ">
          <div className="self-center">
            <motion.h4
              className=" rotate-2 text-6xl font-medium md:text-8xl"
              variants={FADE_DOWN_ANIMATION_VARIANTS}
            >
              Problem
            </motion.h4>
            <motion.p
              variants={FADE_DOWN_ANIMATION_VARIANTS}
              className="mt-6 text-xl  md:text-2xl"
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem
              dolore reprehenderit recusandae, illum ea, aspernatur corporis
              mollitia vitae quisquam est sed. Odio consequatur, at vero dolores
              modi quasi provident aperiam.
            </motion.p>
          </div>
          <motion.div
            className="mockup-phone self-center"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1, rotate: 10 }}
            transition={{
              duration: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
              scale: {
                type: "spring",
                damping: 5,
                stiffness: 100,
                restDelta: 0.001,
              },
            }}
          >
            <div className="camera "></div>
            <div className="display ">
              <div className="phone-1 artboard artboard-demo ">
                <Image
                  className="object-fill"
                  src="https://res.cloudinary.com/dg84upfsp/image/upload/v1675561334/Screenshot_3_ykbr0a.jpg"
                  width={1500}
                  height={750}
                  alt="photo"
                />
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-16 grid grid-cols-2 ">
          <motion.div
            className="mockup-phone self-center"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1, rotate: -10 }}
            transition={{
              duration: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
              scale: {
                type: "spring",
                damping: 5,
                stiffness: 100,
                restDelta: 0.001,
              },
            }}
          >
            <div className="camera "></div>
            <div className="display ">
              <div className="phone-1 artboard artboard-demo ">
                <Image
                  className="object-fill"
                  src="https://res.cloudinary.com/dg84upfsp/image/upload/v1675561334/Screenshot_3_ykbr0a.jpg"
                  width={1500}
                  height={750}
                  alt="photo"
                />
              </div>
            </div>
          </motion.div>
          <div className="self-center">
            <motion.h4
              className=" rotate-2 text-6xl font-medium md:text-8xl"
              variants={FADE_DOWN_ANIMATION_VARIANTS}
            >
              Solution
            </motion.h4>
            <motion.p
              variants={FADE_DOWN_ANIMATION_VARIANTS}
              className="mt-6 text-xl  md:text-2xl"
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem
              dolore reprehenderit recusandae, illum ea, aspernatur corporis
              mollitia vitae quisquam est sed. Odio consequatur, at vero dolores
              modi quasi provident aperiam.
            </motion.p>
          </div>
        </div>
        <div className="mt-16 grid grid-cols-2 ">
          <div className="self-center">
            <motion.h4
              className=" rotate-2 text-6xl font-medium md:text-8xl"
              variants={FADE_DOWN_ANIMATION_VARIANTS}
            >
              Outcome
            </motion.h4>
            <motion.p
              variants={FADE_DOWN_ANIMATION_VARIANTS}
              className="mt-6 text-xl  md:text-2xl"
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem
              dolore reprehenderit recusandae, illum ea, aspernatur corporis
              mollitia vitae quisquam est sed. Odio consequatur, at vero dolores
              modi quasi provident aperiam.
            </motion.p>
          </div>
          <motion.div
            className="mockup-phone self-center"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1, rotate: 10 }}
            transition={{
              duration: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
              scale: {
                type: "spring",
                damping: 5,
                stiffness: 100,
                restDelta: 0.001,
              },
            }}
          >
            <div className="camera "></div>
            <div className="display ">
              <div className="phone-1 artboard artboard-demo ">
                <Image
                  className="object-fill"
                  src="https://res.cloudinary.com/dg84upfsp/image/upload/v1675561334/Screenshot_3_ykbr0a.jpg"
                  width={1500}
                  height={750}
                  alt="photo"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </Layout>
  );
}
