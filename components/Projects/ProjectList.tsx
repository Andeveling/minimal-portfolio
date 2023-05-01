import { motion, Variants } from "framer-motion";
import { ProjectT } from "models/Project.types";
import Image from "next/image";
import Link from "next/link";

export const ProjectList = ({ projects }: { projects: ProjectT[] }) => {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };
  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  const CustomLink = motion(Link);

  return (
    <motion.ul
      variants={container}
      initial="hidden"
      animate="show"
      className="flex flex-wrap justify-center gap-5 mt-12 mb-32"
    >
      {projects.map((project, index) => {
        return (
          <motion.li
            key={project.id}
            className="group relative h-[375px] w-[375px] transform  bg-primary transition duration-500 ease-in-out hover:-translate-y-2  sm:w-[600px]"
            variants={item}
          >
            <CustomLink href={`/projects/${project.id}`}>
              <div className="relative h-full">
                <div className='group-hover:opacity-0'>
                  <span className="absolute left-0 right-0 bottom-auto flex items-center justify-center w-48 h-48 p-1 m-auto border-4 rounded-full top-16 md:inset-0 border-base-300 text-base-300">
                    <h2 className="text-6xl font-thin">
                      {index + 1 < 10 ? `0${index + 1}` : `${index + 1}`}
                    </h2>
                  </span>
                  <div className="absolute left-0 right-0 py-2 transform bottom-4">
                    <p className="text-2xl text-center text-white ">
                      {project.title}
                    </p>
                    <p className="font-thin text-center text-gray-400">{project.subtitle}</p>
                  </div>
                </div>

                
                <div className="h-full p-1 transition-all transform translate-y-0 opacity-0 group-hover:translate-y-10 group-hover:opacity-100 group-hover:z-40">
                  <div className="absolute inset-0 overflow-hidden">
                    <Image
                      className="object-cover h-full"
                      src={project.imagesUrl.desktop[0].url}
                      width={1000}
                      height={650}
                      alt={`${project.imagesUrl.desktop[0].title} image`}
                    />
                    <div className="absolute bottom-0 flex items-center w-full h-20 py-2 text-center bg-black bg-opacity-95 text-base-300">
                      <div className="w-full px-4 mt-2 space-x-2">
                        {project.tech.map((item, i) => (
                          <span
                            key={item + i}
                            className="text-white bg-black border border-white rounded-full badge"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CustomLink>
          </motion.li>
        );
      })}
    </motion.ul>
  );
};

interface Props {
  emoji: string;
  hueA: number;
  hueB: number;
}
