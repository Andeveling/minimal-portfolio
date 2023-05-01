import useScroll from "@/lib/hooks/use-scroll";

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
          className="fixed z-30 w-5 h-auto top-4 right-4 "
        >
          <svg
            fill="#000000"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 511.801 511.801"
            xmlSpace="preserve"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth={0} />
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g id="SVGRepo_iconCarrier">
              <g>
                <g>
                  <g>
                    <path d="M263.535,248.453c-4.16-4.16-10.88-4.16-15.04,0L3.054,493.787c-4.053,4.267-3.947,10.987,0.213,15.04 c4.16,3.947,10.667,3.947,14.827,0l237.867-237.76l237.76,237.76c4.267,4.053,10.987,3.947,15.04-0.213 c3.947-4.16,3.947-10.667,0-14.827L263.535,248.453z" />
                    <path d="M18.201,263.493l237.76-237.76l237.76,237.76c4.267,4.053,10.987,3.947,15.04-0.213c3.947-4.16,3.947-10.667,0-14.827 L263.535,3.12c-4.16-4.16-10.88-4.16-15.04,0L3.054,248.453c-4.053,4.267-3.947,10.987,0.213,15.04 C7.534,267.547,14.041,267.547,18.201,263.493z" />
                  </g>
                </g>
              </g>
            </g>
          </svg>
     </button>
      )}
    </>
  );
};
