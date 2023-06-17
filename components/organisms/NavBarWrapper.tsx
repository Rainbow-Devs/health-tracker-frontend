"use client";

import { useEffect, useState } from "react";
import HamburgerMenu from "./HamburgerMenu";
import { NavBar } from "./NavBar";

export default function NavBarWrapper() {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Initial check for mobile screen on component mount
    handleResize();

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  // if is mobile return hamburger menu else return navbar
  return <>{isMobile ? <HamburgerMenu /> : <NavBar />}</>;
}
