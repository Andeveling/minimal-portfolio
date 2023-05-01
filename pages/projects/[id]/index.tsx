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
      <motion.div
        className="container flex flex-col items-center justify-center w-full h-full px-5 mt-12 text-xl md:text-2xl xl:py-32 xl:px-10"
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
            className="grid justify-center w-full grid-cols-2 gap-8 py-8 mt-10 group sm:grid-cols-4"
            variants={FADE_UP_ANIMATION_VARIANTS}
          >
            <div>
              <p className="mb-2 font-medium border-b-4 w-fit">Client</p>
              <p>{project.workData.client}</p>
              <div className="divider lg:divider-horizontal" />
            </div>

            <div>
              <p className="mb-2 font-medium border-b-4 w-fit">Roles</p>
              {project.workData.roles.map((item, i) => (
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
          <section className="my-10">
            <div className="my-6 divider" />
            <div className="grid grid-cols-1 mt-16 md:grid-cols-2">
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

              <div className="self-center max-w-xs mt-10 mockup-phone md:mt-2">
                <div className="camera " />
                <div className="display ">
                  <div className="relative bg-black phone-1 artboard artboard-demo">
                    <Image
                      className="absolute left-0 object-fill mt-10"
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                      src={project.imagesUrl.mobile[0].url}
                      alt={project.imagesUrl.mobile[0].title}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="my-6 divider" />
            <div className="grid grid-cols-1 mt-16 md:grid-cols-2">
              <div className="self-center order-2 max-w-xs mt-10 mockup-phone sm:order-1 md:mt-2">
                <div className="camera " />
                <div className="display ">
                  <div className="relative bg-black phone-1 artboard artboard-demo">
                    <Image
                      className="absolute left-0 object-fill mt-10"
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                      src={project.imagesUrl.mobile[1].url}
                      alt={project.imagesUrl.mobile[1].title}
                    />
                  </div>
                </div>
              </div>
              <div className="self-center order-1 xs:order-2">
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
            <div className="my-6 divider" />
            <div className="grid grid-cols-1 mt-16 grid-flow-dense md:grid-cols-2">
              <div className="self-center">
                <h4 className="text-6xl font-thin rotate-2 md:text-8xl">
                  Outcome
                </h4>
                <p className="mt-6 text-xl md:text-2xl">
                  {project.workData.outcome}
                </p>
              </div>
              <div className="self-center max-w-xs mt-10 mockup-phone md:mt-2">
                <div className="camera " />
                <div className="display ">
                  <div className="relative bg-black phone-1 artboard artboard-demo">
                    <Image
                      className="absolute left-0 object-fill mt-10"
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                      src={project.imagesUrl.mobile[2].url}
                      alt={project.imagesUrl.mobile[2].title}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        ) : (
          <></>
        )}
      </motion.div>
    </Layout>
  );
}

/* 
<section className="flex flex-wrap justify-between w-full mt-12">
            {project.imagesUrl.mobile.map((image) => (
              <motion.div
                key={image.id}
                className="mockup-phone max-h-[600px] max-w-xs self-center"
                initial={{ y: 260 }}
                whileInView={{ y: 10 }}
                transition={{ duration: 1, type: "spring" }}
              >
                <div className="camera" />
                <div className="display">
                  <div className="relative bg-black phone-4 artboard artboard-demo">
                    <Image
                      className="absolute top-10"
                      src={image.url}
                      fill
                      style={{objectFit:"contain"}}
                      alt={image.title}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </section>
*/
