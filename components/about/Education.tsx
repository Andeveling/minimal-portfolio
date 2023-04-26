import { FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/constants";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import { LiIcon } from "./LiIcon";

export const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <section className="mt-12">
      <motion.h2
        className=" mb-8 w-full text-center text-6xl font-bold md:text-8xl"
        variants={FADE_DOWN_ANIMATION_VARIANTS}
      >
        Education
      </motion.h2>

      <div className="w-full" ref={ref}>
        {/* <motion.div
          className="absolute left-9 top-2 h-full w-[4px] origin-top bg-primary"
          style={{ scaleY: scrollYProgress }}
        /> */}
        <ul className="ml-4 flex w-full flex-col items-start justify-between gap-8">
          <Details
            degree="Full Stack Developer"
            universityLink={"www.soyhenry.com"}
            time={"2022-2022"}
            address={"Buenos Aires, Argentina"}
            degreeDescription="Major in PERN Stack (PostgreSQL | Express | React | Node) for development of SPA (Single Page Applications.)"
            university={"Henry BootCamp"}
          />
          <Details
            degree="Frontend Developer"
            universityLink={"https://platzi.com/"}
            time={"2020-Present"}
            address={"Bogota, Colombia"}
            degreeDescription="Continuously learning and improving skills as a web developer to keep up with the latest frontend market trends."
            university={"Platzi"}
          />
          <Details
            degree="Technical in Computer Science"
            universityLink={"https://www.uniminuto.edu/"}
            time={"2021-2021"}
            address={"Bogota, Colombia"}
            degreeDescription="Left university due to lack of financial resources, but gained valuable foundational knowledge in computer science."
            university={"Uniminuto"}
          />
        </ul>
      </div>
    </section>
  );
};

type DetailsProps = {
  degree: string;
  university: string;
  universityLink: string;
  time: string;
  address: string;
  degreeDescription: string;
};

const Details = ({
  degree,
  university,
  universityLink,
  time,
  address,
  degreeDescription,
}: DetailsProps): JSX.Element => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="mx-auto flex w-[60%] flex-col items-center justify-between first:mt-0 last:mb-0"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 160 }}
        whileInView={{ y: 10 }}
        transition={{ duration: 0.8, type: "spring" }}
      >
        <h3 className="text-2xl font-bold capitalize">
          {degree}&nbsp;
          <a
            target="_blank"
            href={universityLink}
            className="text-red-500"
            rel="noreferrer"
          >
            @{university}
          </a>
        </h3>
        <span className="font-medium capitalize text-gray-500">
          {time} | {address}
        </span>
        <p>{degreeDescription}</p>
      </motion.div>
    </li>
  );
};
