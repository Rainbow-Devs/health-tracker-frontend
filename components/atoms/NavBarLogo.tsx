"use client";

import { useRouter } from "next/navigation";

export const NavBarLogo: React.FC = () => {
  const router = useRouter();

  const clickHandler = () => {
    router.push("/");
  };

  return (
    <div className="w-full flex-1 font-bold md:w-auto md:flex-none">
      <button type="button" onClick={clickHandler} className="w-24 p-1">
        <div
          className="h-10 w-24 bg-transparent bg-[url('/images/wellpath-logo-color.svg')] bg-no-repeat [mask-position:center] [mask-repeat:no-repeat] dark:bg-white dark:bg-none dark:[mask-image:url('/images/wellpath-logo-mono.svg')]"
          aria-label="WellPath Logo"
        ></div>
      </button>
    </div>
  );
};
