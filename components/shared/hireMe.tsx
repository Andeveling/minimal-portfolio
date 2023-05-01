import { FADE_UP_ANIMATION_VARIANTS, MAIL_TO } from "@/lib/constants";
import { motion } from "framer-motion";

export const HireMe = () => {
  const text = "ANDRES PARRA - CREATIVE WEB DEVELOPER - ";
  return (
    <motion.div
      variants={FADE_UP_ANIMATION_VARIANTS}
      className="fixed bottom-auto left-auto flex items-center justify-center overflow-hidden top-1 right-1 md:top-auto md:right-auto md:left-4 md:bottom-4"
    >
      <div className="relative flex items-center justify-center bg-transparent rounded-full h-36 w-36">
        <div className="absolute flex items-center justify-center w-20 h-20 text-white bg-black rounded-full">
          <a
            href={MAIL_TO}
            className="absolute inset-0 z-50 flex items-center justify-center w-full h-full text-sm"
          >
            HIRE ME
          </a>
        </div>
        <div
          id="text-andres"
          className="absolute w-full h-full animate-spin-slow "
        >
          <p>
            {text.split("").map((letter, i) => (
              <span
                key={i}
                className={`absolute left-1/2 text-sm font-semibold`}
                style={{
                  transform: `rotate(${i * 9.4}deg)`,
                  transformOrigin: "0 72px",
                }}
              >
                {letter}
              </span>
            ))}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

/* 
<motion.div
      className="fixed bottom-auto left-auto flex items-center justify-center overflow-hidden top-1 right-1 md:top-auto md:right-auto md:left-4 md:bottom-4"
      variants={FADE_UP_ANIMATION_VARIANTS}
    >
      <div className="relative flex items-center justify-center w-auto h-auto">
        <div className="border-8 border-separate border-dotted rounded-full h-36 w-36 border-spacing-4 animate-spin-slow border-primary" />
        <a
          href={MAIL_TO}
          className="absolute flex flex-col items-center justify-center w-24 h-24 text-lg font-semibold transition-all ease-in-out -translate-x-1/2 -translate-y-1/2 border border-solid rounded-full shadow-md left-1/2 top-1/2 border-primary bg-primary text-primary-content hover:h-28 hover:w-28 hover:bg-base-100 hover:text-primary"
        >
          Hire Me
        </a>
      </div>
    </motion.div>
*/
