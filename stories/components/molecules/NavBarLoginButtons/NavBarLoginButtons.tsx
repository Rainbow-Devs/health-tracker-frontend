"use client";
import { NavBarActionButton } from "../../atoms/NavBarActionButton/NavBarActionButton";
import { usePathname } from "next/navigation";

export const NavBarLoginButtons: React.FC = () => {
  const pathname = usePathname();

  if (pathname === "/login") {
    return <div className="flex items-center space-x-1" />;
  }

  return (
    <div className="flex items-center space-x-1">
      <NavBarActionButton variant="linkStyle" href="/login">
        Log In
      </NavBarActionButton>
      <NavBarActionButton variant="buttonStyle" href="/login">
        Sign Up
      </NavBarActionButton>
    </div>
  );
};
