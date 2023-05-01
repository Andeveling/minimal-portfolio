import { useSession } from "next-auth/react";
import { ReactNode } from "react";
import { Footer } from "../footer";
import { Navbar } from "../navbar";
import { MobileMenu } from "../sidebar/MobileMenu";
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
  footer?: boolean;
};

export default function Layout({ meta, footer, children }: LayoutProps) {
  const { data: session, status } = useSession();
  const { SignInModal, setShowSignInModal } = useSignInModal();

  // bg-gradient-to-br from-indigo-50 via-white to-cyan-100
  return (
    <>
      <Meta {...meta} />
      <SignInModal />

      <Navbar />
     

      <main className="flex flex-col items-center justify-center w-screen min-h-screen">
        {children}
      </main>
      {footer && <Footer />}
    </>
  );
}
