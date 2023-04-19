import Layout from "@/components/layout";
import {
  FADE_DOWN_ANIMATION_VARIANTS,
  FADE_UP_ANIMATION_VARIANTS,
} from "@/lib/constants";
import { motion } from "framer-motion";
import { Link } from "lucide-react";
import { useRouter } from "next/router";

export default function WorkPage() {
  const router = useRouter();
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
        <motion.div
          className="flex h-32 w-32 items-center justify-center rounded-full border-4 text-5xl"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          {router.query.id}
        </motion.div>
        <motion.h1
          className="mt-8 text-7xl font-bold"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          Project Name
        </motion.h1>
        <motion.div
          className="mt-8 flex w-[60%]"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          <div className="card grid h-20 flex-grow items-center justify-end ">
            <a role="button" className="btn-ghost btn">
              Deploy
            </a>
          </div>
          <div className="divider divider-horizontal" />
          <div className="card grid h-20 flex-grow items-center justify-start ">
            <a role="button" className="btn-ghost btn">
              Repository
            </a>
          </div>
        </motion.div>
        <motion.p variants={FADE_DOWN_ANIMATION_VARIANTS}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos maxime
          cupiditate nobis illo consequuntur pariatur hic est corrupti, iste
          quaerat omnis blanditiis iure praesentium inventore aspernatur,
          similique aperiam placeat corporis! Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Eos maxime cupiditate nobis illo
          consequuntur pariatur hic est corrupti, iste quaerat omnis blanditiis
          iure praesentium inventore aspernatur, similique aperiam placeat
          corporis! Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Eos maxime cupiditate nobis illo consequuntur pariatur hic est
          corrupti, iste quaerat omnis blanditiis iure praesentium inventore
          aspernatur, similique aperiam placeat corporis! Lorem ipsum dolor sit
          amet consectetur, adipisicing elit. Eos maxime cupiditate nobis illo
          consequuntur pariatur hic est corrupti, iste quaerat omnis blanditiis
          iure praesentium inventore aspernatur, similique aperiam placeat
          corporis!
        </motion.p>

        <motion.div
          className="mockup-window w-full border bg-base-300"
          variants={FADE_UP_ANIMATION_VARIANTS}
        >
          <div className="flex justify-center bg-base-200 px-4 py-16">
            Hello!
          </div>
        </motion.div>

        <motion.div
          className="mockup-window border bg-base-300"
          variants={FADE_UP_ANIMATION_VARIANTS}
        >
          <div className="flex justify-center bg-base-200 px-4 py-16">
            Hello!
          </div>
        </motion.div>

        <motion.div
          className="mockup-phone"
          variants={FADE_UP_ANIMATION_VARIANTS}
        >
          <div className="camera"></div>
          <div className="display">
            <div className="phone-1 artboard artboard-demo">Hi.</div>
          </div>
        </motion.div>
      </motion.div>
    </Layout>
  );
}
