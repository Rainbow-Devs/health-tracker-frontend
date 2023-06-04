"use client";

import { NavBarActionButton } from "@atoms/NavBarActionButton";
import { usePathname } from "next/navigation";

export const NavBarLoginButtons: React.FC = () => {
  const pathname = usePathname();

  if (pathname === "/login") {
    return <div className="flex items-center space-x-1" />;
  }

  return (
    <div className="flex items-center space-x-1">
      <NavBarActionButton
        variant="linkStyle"
        bgColor="none"
        textColor="gray"
        href="/login"
      >
        Log In
      </NavBarActionButton>
      <NavBarActionButton
        variant="buttonStyle"
        bgColor="primary"
        textColor="white"
        href="/login"
      >
        Sign Up
      </NavBarActionButton>
    </div>
  );
};
