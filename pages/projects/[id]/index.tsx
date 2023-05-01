import Layout, { MetaData } from "@/components/layout";
import { BackButton } from "@/components/shared/backButton";
import {
  FADE_DOWN_ANIMATION_VARIANTS,
  FADE_UP_ANIMATION_VARIANTS,
} from "@/lib/constants";
import { motion } from "framer-motion";
import fs from "fs";
import { ProjectT } from "models/Project.types";
import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import path from "path";

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const filePath = path.join(process.cwd(), "json");
  const projectsDataJson = fs.readFileSync(filePath + "/projects.json", "utf8");
  const data: ProjectT[] = JSON.parse(projectsDataJson);
  return {
    props: {
      project: data.find((project) => project.id === params?.id),
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const filePath = path.join(process.cwd(), "json");
  const projectsDataJson = fs.readFileSync(filePath + "/projects.json", "utf8");
  const data: ProjectT[] = JSON.parse(projectsDataJson);
  const paths = data.map(({ id }) => ({ params: { id } }));

  return {
    // Statically generate all paths
    paths,
    // Display 404 for everything else
    fallback: false,
  };
};

export default function ProjectPage({ project }: { project: ProjectT }) {
  const meta: MetaData = {
    title: `Project | ${project.title}`,
    description: project.description,
  };

  return (
    <Layout key={project.id} meta={meta} footer>
      <BackButton />
      <motion.div
        className="container flex flex-col items-center justify-center w-full h-full px-5 mt-12 text-xl md:text-2xl xl:px-0"
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
          className="flex items-center justify-center w-32 h-32 text-5xl text-center border-4 rounded-full border-primary"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          {project.id}
        </motion.div>
        <motion.h1
          className="mt-8 text-5xl text-center md:text-8xl"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          {project.title}
        </motion.h1>
        <motion.h4
          className="mt-2 text-2xl font-thin text-center text-gray-400 md:text-4xl"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          {project.subtitle}
        </motion.h4>
        <motion.div
          className="mt-8 flex w-[60%]"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          <div className="flex flex-row items-center justify-center flex-grow h-20 grid-cols-3 font-bold card ">
            {project.deploy && (
              <>
                <a
                  className="text-xl text-primary hover:text-info md:text-2xl"
                  href={project.deploy}
                  target="_blank"
                  rel="noreferrer"
                >
                  Deploy
                </a>
                {project.deploy && project.repository && (
                  <div className="divider divider-horizontal" />
                )}
              </>
            )}
            {project.repository && (
              <a
                className="text-xl text-primary hover:text-info md:text-2xl"
                href={project.repository}
                target="_blank"
                rel="noreferrer"
              >
                Repository
              </a>
            )}
          </div>
        </motion.div>

        <motion.p
          variants={FADE_DOWN_ANIMATION_VARIANTS}
          className="my-4 text-xl md:text-2xl"
        >
          {project.description}
        </motion.p>
        <motion.p
          variants={FADE_DOWN_ANIMATION_VARIANTS}
          className="mb-6 text-xl md:text-2xl"
        >
          {project.contribution}
        </motion.p>

        <motion.div
          className="grid grid-cols-2 gap-4"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          <div className="flex flex-col flex-wrap justify-start p-2 border rounded-md">
            <p className="mb-2 font-medium text-center">Technologies</p>
            <ul className="flex flex-wrap justify-center gap-2 min-h-14">
              {project.tech.map((item, i) => (
                <li key={i} className="badge badge-lg">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col flex-wrap justify-start p-2 border rounded-md">
            <p className="mb-2 font-medium text-center">Features</p>
            <ul className="flex flex-wrap justify-center gap-2 h-fit">
              {project.features.map((item, i) => (
                <li key={i} className="badge badge-lg">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Client data */}
        {project.isAWork && project.workData ? (
          <motion.div
            className="grid justify-center w-full grid-cols-2 gap-8 py-8 mt-10 sm:grid-cols-4 group"
            variants={FADE_UP_ANIMATION_VARIANTS}
          >
            <div>
              <p className="mb-2 font-medium border-b-4 w-fit">Client</p>
              <p>{project.workData.client}</p>
              <div className="divider lg:divider-horizontal" />
            </div>

            <div>
              <p className="mb-2 font-medium border-b-4 w-fit">Roles</p>
              {project.workData.roles.map((item,i) => (
                <p key={i}>{item}</p>
              ))}
            </div>

            <div>
              <p className="mb-2 font-medium border-b-4 w-fit">Industries</p>
              <p>{project.workData.industries}</p>
            </div>

            <div>
              <p className="mb-2 font-medium border-b-4 w-fit">Date</p>
              <p>{project.workData.date}</p>
            </div>
          </motion.div>
        ) : (
          <></>
        )}

        {project.imagesUrl.desktop.map((image) => (
          <motion.div
            key={image.id}
            className="w-full mt-10 border shadow-md mockup-window bg-base-300"
            initial={{ y: 160 }}
            whileInView={{ y: 10 }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            <Image
              className="w-full h-full"
              src={image.url}
              width={1500}
              height={750}
              alt="photo"
            />
          </motion.div>
        ))}

        {/* Features is a Work */}

        {project.isAWork ? (
          <section className="mt-10">
            <div className="grid grid-cols-1 mt-16 xs:grid-cols-2">
              <div className="self-center">
                <motion.h4
                  className="text-6xl font-thin rotate-2 md:text-8xl"
                  variants={FADE_DOWN_ANIMATION_VARIANTS}
                >
                  Problem
                </motion.h4>
                <motion.p
                  variants={FADE_DOWN_ANIMATION_VARIANTS}
                  className="mt-6 text-xl md:text-2xl"
                >
                  {project.workData.problem}
                </motion.p>
              </div>
            
               <motion.div
                className="self-center mt-10 md:mt-2 mockup-phone"
                initial={{ x: 260 }}
                whileInView={{ x: 10, rotate: 10 }}
                transition={{ duration: 1, type: "spring" }}
              >
                <div className="camera " />
                <div className="display ">
                  <div className="relative bg-black phone-3 artboard artboard-demo">
                    <Image
                      className="absolute object-cover top-10"
                      src={project.imagesUrl.mobile[0].url}
                      width={1185}
                      height={2566}
                      alt={project.imagesUrl.mobile[0].title}
                    />
                  </div>
                </div>
              </motion.div>
             
            </div>

            <div className="grid grid-cols-1 mt-16 xs:grid-cols-2">
              <motion.div
                className="self-center mockup-phone"
                initial={{ x: -260 }}
                whileInView={{ x: 10, rotate: -10 }}
                transition={{ duration: 1, type: "spring" }}
              >
                <div className="camera "></div>
                <div className="display ">
                  <div className="bg-black phone-3 artboard artboard-demo ">
                    <Image
                      className="absolute object-cover top-10"
                      src={project.imagesUrl.mobile[1].url}
                      width={585}
                      height={1266}
                      alt={project.imagesUrl.mobile[1].title}
                    />
                  </div>
                </div>
              </motion.div>
              <div className="self-center">
                <motion.h4
                  className="text-6xl font-thin rotate-2 md:text-8xl"
                  variants={FADE_DOWN_ANIMATION_VARIANTS}
                >
                  Solution
                </motion.h4>
                <motion.p
                  variants={FADE_DOWN_ANIMATION_VARIANTS}
                  className="mt-6 text-xl md:text-2xl"
                >
                  {project.workData.solution}
                </motion.p>
              </div>
            </div>
            <div className="grid grid-cols-1 mt-16 xs:grid-cols-2">
              <div className="self-center">
                <motion.h4
                  className="text-6xl font-thin rotate-2 md:text-8xl"
                  variants={FADE_DOWN_ANIMATION_VARIANTS}
                >
                  Outcome
                </motion.h4>
                <motion.p
                  variants={FADE_DOWN_ANIMATION_VARIANTS}
                  className="mt-6 text-xl md:text-2xl"
                >
                  {project.workData.outcome}
                </motion.p>
              </div>
              <motion.div
                className="self-center mockup-phone"
                initial={{ x: 260 }}
                whileInView={{ x: 10, rotate: 10 }}
                transition={{ duration: 1, type: "spring" }}
              >
                <div className="camera " />
                <div className="display ">
                  <div className="relative bg-black phone-3 artboard artboard-demo">
                    <Image
                      className="absolute object-cover top-10"
                      src={project.imagesUrl.mobile[2].url}
                      height={2266}
                      width={1285}
                      alt={project.imagesUrl.mobile[2].title}
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        ) : (
          <section className="flex flex-wrap justify-between w-full mt-12">
            {project.imagesUrl.mobile.map((image) => (
              <motion.div
                key={image.id}
                className="self-center mockup-phone"
                initial={{ y: 260 }}
                whileInView={{ y: 10 }}
                transition={{ duration: 1, type: "spring" }}
              >
                <div className="camera " />
                <div className="display ">
                  <div className="relative bg-black phone-4 artboard artboard-demo">
                    <Image
                      className="absolute object-cover top-10"
                      src={image.url}
                      width={1185}
                      height={2566}
                      alt={image.title}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </section>
        )}
      </motion.div>
    </Layout>
  );
}
