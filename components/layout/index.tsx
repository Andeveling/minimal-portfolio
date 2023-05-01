import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
  useVelocity
} from "framer-motion";
import { ReactNode, useEffect, useState } from "react";
import { Footer } from "../footer";
import { Navbar } from "../navbar";
import Meta from "./meta";


export type MetaData = {
  title?: string;
  description?: string;
  image?: string;
};

type LayoutProps = {
  meta?: MetaData;
  children: ReactNode;
  footer?: boolean;
};

const getScale = (velX: any, velY: any) => {
  const distance = Math.sqrt(velX ** 2 + velY ** 2);
  return Math.min(distance / 3000, 0.35);
};

const getAngle = (velX: any, velY: any) => {
  return (Math.atan2(velY, velX) * 180) / Math.PI;
};

export default function Layout({ meta, footer, children }: LayoutProps) {
  const [cursorType, setCursorType] = useState("default");
  const springConfig = { mass: 0.2, stiffness: 100 };

  const pointX = useMotionValue(0);
  const pointY = useMotionValue(0);

  const pointTransform = useMotionTemplate`
    translate(-50%, -50%)
    translate(${pointX}px, ${pointY}px)
  `;

  const stickyTailX = useMotionValue(200);
  const stickyTailY = useMotionValue(0);

  const tailX = useSpring(
    cursorType === "default" ? pointX : stickyTailX,
    springConfig,
  );
  const tailY = useSpring(
    cursorType === "default" ? pointY : stickyTailY,
    springConfig,
  );
  const xVelocity = useVelocity(tailX);
  const yVelocity = useVelocity(tailY);

  const rotate = useTransform([xVelocity, yVelocity], ([lastX, lastY]) =>
    getAngle(lastX, lastY),
  );
  const scale = useTransform([xVelocity, yVelocity], ([lastX, lastY]) =>
    getScale(lastX, lastY),
  );
  const scaleX = useTransform(scale, (lastScale) => 1 + lastScale); // idk better implementation, ${1 + scale} doesn't work, help me 🙏
  const scaleY = useTransform(scale, (lastScale) => 1 - lastScale); //

  const tailTransform = useMotionTemplate`
    translate(-50%, -50%)
    translate(${tailX}px, ${tailY}px)
    rotate(${rotate}deg)
    scale(${scaleX}, ${scaleY})
  `;

  useEffect(() => {
    const updateMousePosition = (event: {
      clientX: number;
      clientY: number;
    }) => {
      pointX.set(event.clientX);
      pointY.set(event.clientY);
    };

    document.addEventListener("mousemove", updateMousePosition);

    return () => {
      document.removeEventListener("mousemove", updateMousePosition);
    };
  }, [pointX,pointY]);

  // bg-gradient-to-br from-indigo-50 via-white to-cyan-100
  return (
    <>
      <Meta {...meta} />

      <Navbar />
      <main className="flex flex-col items-center justify-center w-screen min-h-screen">
        <motion.div
          className="fixed top-0 left-0 z-50 w-4 h-4 bg-black rounded-full pointer-events-none "
          style={{ transform: pointTransform }}
        />
        <motion.div
          className="fixed top-0 left-0 w-12 h-12 border border-black rounded-full pointer-events-none"
          style={{ transform: tailTransform }}
        />
        {children}
      </main>
      {footer && <Footer />}
    </>
  );
}

