"use client";

import { NavBarLogo } from "@atoms/NavBarLogo";
import { useMenuStore, MenuButton, MenuItem, Menu } from "@ariakit/react";
import { useRouter } from "next/navigation";
import { FC } from "react";

import { MobileMenuImage } from "../images/MobileMenuImage";

const HamburgerMenu: FC = () => {
  const menu = useMenuStore();
  const router = useRouter();

  return (
    <div className="flex flex-row items-center justify-between p-5">
      <div />
      <NavBarLogo />
      <>
        <MenuButton store={menu}>
          <MobileMenuImage />
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
