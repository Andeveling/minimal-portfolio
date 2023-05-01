import { ScrollToTop } from "@/components/shared/ScrollToTop";
import "@/styles/globals.css";
import { Montserrat } from "@next/font/google";
import localFont from "@next/font/local";
import { Analytics } from "@vercel/analytics/react";
import cx from "classnames";
import { AnimatePresence } from "framer-motion";
import type { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import { Provider as RWBProvider } from "react-wrap-balancer";

const sfPro = localFont({
  src: "../styles/SF-Pro-Display-Medium.otf",
  variable: "--font-sf",
});

const montserrat = Montserrat({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{ session: Session }>) {
  return (
    <SessionProvider session={session}>
      <RWBProvider>
        <div className={cx(sfPro.variable, montserrat.variable)}>
          <AnimatePresence mode="wait">
            <Component {...pageProps} />
          </AnimatePresence>
          <ScrollToTop />
        </div>
      </RWBProvider>
      <Analytics />
    </SessionProvider>
  );
}
