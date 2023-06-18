"use client";
import { NavBarLogo } from "@atoms/NavBarLogo";
import { useMenuStore, MenuButton, MenuItem, Menu } from "@ariakit/react";
import { useRouter } from "next/navigation";
import { FC } from "react";

const HamburgerMenu: FC = () => {
  const menu = useMenuStore();
  const router = useRouter();

  return (
    <div className="flex flex-row items-center justify-between p-5">
      <div />
      <NavBarLogo />
      <>
        <MenuButton store={menu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-10 w-10"
            aria-label="Open menu"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </MenuButton>
        <Menu
          store={menu}
          gutter={8}
          className="rounded-xl bg-slate-600 p-5 font-bold text-white"
        >
          <MenuItem onClick={() => router.push("/login")}>Login</MenuItem>
        </Menu>
      </>
    </div>
  );
};

export default HamburgerMenu;
