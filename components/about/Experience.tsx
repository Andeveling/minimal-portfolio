import { FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/constants";
import { motion } from "framer-motion";
import { useRef } from "react";
import { LiIcon } from "./LiIcon";

export const Experience = () => {
  return (
    <section className="mt-12">
      <motion.h2
        className="w-full mb-8 text-6xl font-bold text-center md:text-8xl"
        variants={FADE_DOWN_ANIMATION_VARIANTS}
      >
        Experience
      </motion.h2>

      <div className="relative mx-auto w-[100%]">
        <ul className="flex flex-col items-start justify-between w-full gap-8">
          <ExperienceDetails
            position={"Software Engineer"}
            company={"Arqustik"}
            companyLink={"https://www.arqustik.com"}
            time={"2022-Present"}
            address={"Cali, Colombia"}
            work={
              "Designed and developed a full stack web application that allows clients to generate project quotes from a company product catalog.         Increased retail customer engagement by 90% and reduced customer 72 hours (about 3 days) to one minute quote generation time. Planning to expand app functionality to include “Client Management” and “Project Management” features using JavaScript technologies."
            }
          />
          <ExperienceDetails
            position={"Independent Freelancer"}
            company={"Freelance"}
            companyLink={""}
            time={"2021-Present"}
            address={"Cali, Colombia"}
            work={
              "Designed and created client websites from start to finish using current technologies and design trends while optimizing content for mobile and cross browsers. Personally consulted clients with design suggestions and hosting recommendations to create designs based on client request and business need."
            }
          />
        </ul>
      </div>
    </section>
  );
};

type ExperienceDetailsProps = {
  position: string;
  company: string;
  companyLink: string;
  time: string;
  address: string;
  work: string;
};

const ExperienceDetails = ({
  position,
  company,
  companyLink,
  time,
  address,
  work,
}: ExperienceDetailsProps): JSX.Element => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="mx-auto flex w-[70%] flex-col items-center justify-between first:mt-0 last:mb-0"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 160 }}
        whileInView={{ y: 10 }}
        transition={{ duration: 0.8, type: "spring" }}
      >
        <h3 className="text-2xl font-bold capitalize">
          {position}&nbsp;
          <a
            target="_blank"
            href={companyLink}
            className="text-info"
            rel="noreferrer"
          >
            @{company}
          </a>
        </h3>
        <span className="font-medium text-gray-500 capitalize">
          {time} | {address}
        </span>
        <p>{work}</p>
      </motion.div>
    </li>
  );
};
