import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-gray-500 px-32 text-lg font-medium ">
      <div className="flex items-center justify-between py-8">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div>
          Build with
          <span className="text-md text-pink-500 ">&nbsp;&#9825;</span>
          &nbsp;by Andres Parra
        </div>
        <Link href="/algo">Link</Link>
        <Link href="/">Link</Link>
      </div>
    </footer>
  );
};
