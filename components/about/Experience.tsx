import { useScroll, motion } from "framer-motion";
import { useRef } from "react";
import { LiIcon } from "./LiIcon";

export const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="">
      <h2 className="mb-32 w-full text-center text-8xl font-bold">
        Experience
      </h2>

      <div className="relative mx-auto w-[75%]" ref={ref}>
        <motion.div
          className="absolute left-9 top-2 h-full w-[4px] origin-top bg-gray-500"
          style={{ scaleY: scrollYProgress }}
        />
        <ul className="ml-4 flex w-full flex-col items-start justify-between">
          <Details
            position={"Software Engineer"}
            company={"Arqustik"}
            companyLink={"www.arqustik.com"}
            time={"2022-Present"}
            address={"Cali, Colombia"}
            work={
              "Designed and developed a full stack web application that allows clients to generate project quotes from a company product catalog.         Increased retail customer engagement by 90% and reduced customer 72 hours (about 3 days) to one minute quote generation time. Planning to expand app functionality to include “Client Management” and “Project Management” features using JavaScript technologies."
            }
          />
          <Details
            position={"Software Engineer"}
            company={"Arqustik"}
            companyLink={"www.arqustik.com"}
            time={"2022-Present"}
            address={"Cali, Colombia"}
            work={
              "Designed and developed a full stack web application that allows clients to generate project quotes from a company product catalog.         Increased retail customer engagement by 90% and reduced customer 72 hours (about 3 days) to one minute quote generation time. Planning to expand app functionality to include “Client Management” and “Project Management” features using JavaScript technologies."
            }
          />
          <Details
            position={"Software Engineer"}
            company={"Arqustik"}
            companyLink={"www.arqustik.com"}
            time={"2022-Present"}
            address={"Cali, Colombia"}
            work={
              "Designed and developed a full stack web application that allows clients to generate project quotes from a company product catalog.         Increased retail customer engagement by 90% and reduced customer 72 hours (about 3 days) to one minute quote generation time. Planning to expand app functionality to include “Client Management” and “Project Management” features using JavaScript technologies."
            }
          />
          <Details
            position={"Software Engineer"}
            company={"Arqustik"}
            companyLink={"www.arqustik.com"}
            time={"2022-Present"}
            address={"Cali, Colombia"}
            work={
              "Designed and developed a full stack web application that allows clients to generate project quotes from a company product catalog.         Increased retail customer engagement by 90% and reduced customer 72 hours (about 3 days) to one minute quote generation time. Planning to expand app functionality to include “Client Management” and “Project Management” features using JavaScript technologies."
            }
          />
          <Details
            position={"Software Engineer"}
            company={"Arqustik"}
            companyLink={"www.arqustik.com"}
            time={"2022-Present"}
            address={"Cali, Colombia"}
            work={
              "Designed and developed a full stack web application that allows clients to generate project quotes from a company product catalog.         Increased retail customer engagement by 90% and reduced customer 72 hours (about 3 days) to one minute quote generation time. Planning to expand app functionality to include “Client Management” and “Project Management” features using JavaScript technologies."
            }
          />
        </ul>
      </div>
    </div>
  );
};

type DetailsProps = {
  position: string;
  company: string;
  companyLink: string;
  time: string;
  address: string;
  work: string;
};

const Details = ({
  position,
  company,
  companyLink,
  time,
  address,
  work,
}: DetailsProps): JSX.Element => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 mx-auto flex w-[60%] flex-col items-center justify-between first:mt-0 last:mb-0"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 60 }}
        whileInView={{ y: 10 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="text-2xl font-bold capitalize">
          {position}&nbsp;
          <a
            target="_blank"
            href={companyLink}
            className="text-red-500"
            rel="noreferrer"
          >
            @{company}
          </a>
        </h3>
        <span className="font-medium capitalize text-gray-500">
          {time} | {address}
        </span>
        <p>{work}</p>
      </motion.div>
    </li>
  );
};
