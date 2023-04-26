import useScroll from "@/lib/hooks/use-scroll";
import { useSession } from "next-auth/react";
import { ReactNode } from "react";
import { Footer } from "../footer";
import { Navbar } from "../navbar";
import Meta from "./meta";
import { useSignInModal } from "./sign-in-modal";

export type MetaData = {
  title?: string;
  description?: string;
  image?: string;
};

type LayoutProps = {
  meta?: MetaData;
  children: ReactNode;
  footer?: boolean
};

export default function Layout({ meta, footer,children }: LayoutProps) {
  const { data: session, status } = useSession();
  const { SignInModal, setShowSignInModal } = useSignInModal();
  const scrolled = useScroll(50);
  // bg-gradient-to-br from-indigo-50 via-white to-cyan-100
  return (
    <>
      <Meta {...meta} />
      <SignInModal />

      <div
        className={`fixed top-0 w-full px-32 py-8 ${
          scrolled ? "border-b border-gray-500  backdrop-blur-xl" : "bg-white/0"
        } z-30 transition-all`}
      >
        <Navbar />
      </div>
      <main className="flex min-h-screen w-full flex-col items-center justify-center py-32">
        {children}
      </main>
      {footer && <Footer />}
    </>
  );
}
