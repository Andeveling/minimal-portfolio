import Layout, { MetaData } from "@/components/layout";
import {
  FADE_DOWN_ANIMATION_VARIANTS,
  FADE_UP_ANIMATION_VARIANTS,
} from "@/lib/constants";
import { motion } from "framer-motion";
import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import path from "path";
import fs from "fs";
import { ProjectT } from "models/Project.types";

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
    title: project.title,
    description: project.description,
  };
  return (
    <Layout key={project.id} meta={meta} footer>
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
          className="mt-8 text-5xl font-medium text-center md:text-8xl"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          {project.title}
        </motion.h1>
        <motion.h4
          className="mt-2 text-2xl font-medium text-center text-base-300 md:text-4xl"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          {project.subtitle}
        </motion.h4>
        <motion.div
          className="mt-8 flex w-[60%]"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          <div className="grid items-center justify-end flex-grow h-20 card ">
            <a
              role="button"
              className="text-xl btn-ghost btn text-primary md:text-2xl"
              href={project.deploy}
              target="_blank"
              rel="noreferrer"
            >
              Deploy
            </a>
          </div>
          <div className="divider divider-horizontal" />
          <div className="grid items-center justify-start flex-grow h-20 card ">
            <a
              role="button"
              className="text-xl btn-ghost btn text-primary md:text-2xl"
              href={project.repository}
              target="_blank"
              rel="noreferrer"
            >
              Repository
            </a>
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
        <div className="flex flex-wrap items-center justify-center mt-4 space-x-4">
          <p className="font-medium">Build with:</p>
          {project.tech.map((item) => (
            <span key={item} className="badge badge-lg">
              {item}
            </span>
          ))}
        </div>
        {project.isAWork && project.workData ? (
          <motion.div
            className="grid justify-center w-full grid-cols-4 gap-8 py-16"
            variants={FADE_UP_ANIMATION_VARIANTS}
          >
            <div>
              <p className="font-medium">Client</p>
              <p>{project.workData.client}</p>
              <div className="divider lg:divider-horizontal" />
            </div>

            <div>
              <p className="font-medium">Roles</p>
              {project.workData.roles.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>

            <div>
              <p className="font-medium">Industries</p>
              <p>{project.workData.industries}</p>
            </div>

            <div>
              <p className="font-medium">Date</p>
              <p>{project.workData.date}</p>
            </div>
          </motion.div>
        ) : (
          <></>
        )}

        <motion.div
          className="w-full mt-10 border shadow-md mockup-window bg-base-300"
          variants={FADE_UP_ANIMATION_VARIANTS}
        >
          <Image
            className="w-full h-full"
            src={project.imageUrl}
            width={1500}
            height={750}
            alt="photo"
          />
        </motion.div>

        <div>
          <div>
            <p className="font-medium">Features</p>
            <ul className="flex gap-2">
              {project.features.map((item) => (
                <li key={item} className="badge badge-md">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p>Challenges</p>
            <ul>
              <li>Landing Page</li>
              <li>Login/Register</li>
              <li>Mailing</li>
              <li>Product listing</li>
              <li>Filters and sorting</li>
              <li>Search</li>
              <li>User panel</li>
              <li>Shopping cart</li>
              <li>Payment gateway with order system</li>
              <li>Favorites</li>
              <li>Admin Panel (CRUD)</li>
              <li>Reviews system</li>
            </ul>
          </div>
        </div>

        {/* Features is a Work */}

        {project.isAWork && (
          <>
            <div className="grid grid-cols-2 mt-16 ">
              <div className="self-center">
                <motion.h4
                  className="text-6xl font-medium rotate-2 md:text-8xl"
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
                className="self-center mockup-phone"
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

            <div className="grid grid-cols-2 mt-16 ">
              <motion.div
                className="self-center mockup-phone"
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
                  className="text-6xl font-medium rotate-2 md:text-8xl"
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
            <div className="grid grid-cols-2 mt-16 ">
              <div className="self-center">
                <motion.h4
                  className="text-6xl font-medium rotate-2 md:text-8xl"
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
          </>
        )}
      </motion.div>
    </Layout>
  );
}

