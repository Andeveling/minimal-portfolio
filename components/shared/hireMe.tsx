import Link from "next/link";
import { CircularText } from "./icons/CircularText";
import { MAIL_TO } from "@/lib/constants";

export const HireMe = () => {
  return (
    <div className="fixed left-4 bottom-28 flex items-center justify-center overflow-hidden">
      <div className="relative flex h-auto w-48 items-center justify-center">
        <div className="h-36 w-36 border-separate border-spacing-4 animate-spin-slow rounded-full border-8 border-dotted border-primary" />
        <a
          href={MAIL_TO}
          className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-solid border-primary bg-primary text-lg font-semibold text-primary-content shadow-md transition-all ease-in-out hover:h-28 hover:w-28 hover:bg-base-100 hover:text-primary"
        >
          Hire Me
        </a>
      </div>
    </div>
  );
};
