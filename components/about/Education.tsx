import { FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/constants";
import { motion } from "framer-motion";
import { useRef } from "react";
import { LiIcon } from "./LiIcon";

export const Education = () => {
  return (
    <section className="mt-12">
      <motion.h2
        className="w-full mb-8 text-6xl font-bold text-center md:text-8xl"
        variants={FADE_DOWN_ANIMATION_VARIANTS}
      >
        Education
      </motion.h2>

      <div className="w-full">
        <ul className="flex flex-col items-start justify-between w-full gap-8">
          <EducationDetails
            degree="Full Stack Developer"
            universityLink={"https://www.soyhenry.com"}
            time={"2022-2022"}
            address={"Buenos Aires, Argentina"}
            degreeDescription="Major in PERN Stack (PostgreSQL | Express | React | Node) for development of SPA (Single Page Applications.)"
            university={"Henry BootCamp"}
          />
          <EducationDetails
            degree="Frontend Developer"
            universityLink={"https://platzi.com/"}
            time={"2020-Present"}
            address={"Bogota, Colombia"}
            degreeDescription="Where I start over and continue to continually learn and improve skills as a web developer to keep up with the latest frontend market trends."
            university={"Platzi"}
          />
          <EducationDetails
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

type EducationDetailsProps = {
  degree: string;
  university: string;
  universityLink: string;
  time: string;
  address: string;
  degreeDescription: string;
};

const EducationDetails = ({
  degree,
  university,
  universityLink,
  time,
  address,
  degreeDescription,
}: EducationDetailsProps): JSX.Element => {
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
            className="text-info"
            rel="noreferrer"
          >
            @{university}
          </a>
        </h3>
        <span className="font-medium text-gray-500 capitalize">
          {time} | {address}
        </span>
        <p>{degreeDescription}</p>
      </motion.div>
    </li>
  );
};
