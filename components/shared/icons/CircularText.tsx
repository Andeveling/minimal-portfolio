export const CircularText = () => {
  return (
    <svg
      viewBox="0 0 100 100"
      width="100"
      height="100"
      className="h-auto w-[66%] max-w-[66vmin] origin-center fill-current"
    >
      <defs>
        <path
          id="circle"
          d="
        M 50, 50
        m -37, 0
        a 37,37 0 1,1 74,0
        a 37,37 0 1,1 -74,0"
        />
      </defs>
      <text fontSize="17">
        <textPath xlinkHref="#circle">
          You spin me right round, baby...
        </textPath>
      </text>
    </svg>
  );
};
