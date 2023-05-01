import useScroll from "@/lib/hooks/use-scroll";
import { ChevronsUp } from "lucide-react";

export const ScrollToTop = () => {
  const scroll = useScroll(100);

  const scrollToTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      {scroll && (
        <button
          onClick={scrollToTop}
          className="fixed z-30 w-12 h-auto bg-white border rounded-full shadow-sm bottom-4 right-4 animate-bounce "
        >
          <ChevronsUp size={48} />
     </button>
      )}
    </>
  );
};
