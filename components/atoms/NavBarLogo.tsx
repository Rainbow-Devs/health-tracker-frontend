"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import { ColorLogo, MonoLogo } from "@images/WellPathLogo";

export const NavBarLogo: React.FC = () => {
  const router = useRouter();
  const [wellpathLogo, setWellpathLogo] = useState(<></>);

  const clickHandler = () => {
    router.push("/");
  };

  useEffect(() => {
    const colorSchemeQueryList = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );

    const setNavbarLogo = (e: MediaQueryList | MediaQueryListEvent) => {
      console.dir(e);
      if (e.matches) {
        setWellpathLogo(<MonoLogo className="w-full" />);
      } else {
        setWellpathLogo(<ColorLogo className="w-full" />);
      }
    };

    setNavbarLogo(colorSchemeQueryList);
    colorSchemeQueryList.addEventListener("change", setNavbarLogo);
  }, []);

  return (
    <div className="w-full flex-1 font-bold md:w-auto md:flex-none">
      <button type="button" onClick={clickHandler} className="w-24 p-1">
        {wellpathLogo}
      </button>
    </div>
  );
};
