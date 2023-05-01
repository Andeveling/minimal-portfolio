import { FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/constants";
import { motion } from "framer-motion";
import Balancer from "react-wrap-balancer";
import Image from "next/image";

export default function Intro() {
  return (
    <>
      <motion.section variants={FADE_DOWN_ANIMATION_VARIANTS}>
        <div className="w-64 h-64 mx-auto bg-black mask mask-circle">
          <Image
            src="https://res.cloudinary.com/dg84upfsp/image/upload/v1664231394/PORTFOLIO/andres_vbaip0.jpg"
            width={280}
            height={280}
            alt="Profile Photo"
          />
        </div>
        <motion.p
          className="px-4 mt-6 text-center text-primary md:text-2xl"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          <Balancer>
            Hi, I am a highly motivated and enthusiastic individual with a
            passion for web development. With two years of experience in the
            industry, I have gained a solid foundation in both front-end and
            back-end technologies. I am a team player and have excellent
            communication and problem-solving skills. I am constantly seeking
            new challenges to grow and improve my skills as a developer.
          </Balancer>
        </motion.p>
      </motion.section>
    </>
  );
}
