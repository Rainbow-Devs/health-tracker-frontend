"use client";

import {
  MenuButton,
  Menu,
  MenuSeparator,
  MenuButtonArrow,
  useMenuStore
} from "@ariakit/react";
import { usePathname } from "next/navigation";

import { NavBarActionButton } from "@atoms/NavBarActionButton";
import { buttonStyle } from "@atoms/GenericButton";

const menuItemStyles =
  "flex cursor-default items-center gap-2 rounded p-2 scroll-m-2 disabled:opacity-25 outline-none active:bg-[hsl(204_100%_40%)] active:text-white";

interface LoginButtonProps {
  userId?: number;
}

export const NavBarLoginButtons: React.FC = ({ userId }: LoginButtonProps) => {
  const pathname = usePathname();
  const menu = useMenuStore();

  if (pathname === "/login") {
    return null;
  }

  if (userId && userId > -1) {
    return (
      <>
        <div className="flex flex-row justify-end md:hidden">
          <>
            <MenuButton store={menu} className={buttonStyle}>
              Menu
              <MenuButtonArrow />
            </MenuButton>
            <Menu
              store={menu}
              gutter={8}
              className="relative z-50 flex max-h-[var(--popover-available-height)] min-w-[180px] flex-col overflow-auto overscroll-contain rounded-lg border border-solid border-slate-300 bg-white p-2 text-fitGray-900 shadow-lg outline-none dark:border-slate-500 dark:bg-gray-950 dark:text-white"
            >
              <NavBarActionButton
                variant="linkStyle"
                className={menuItemStyles}
                href="/profile"
              >
                My Profile
              </NavBarActionButton>
              <MenuSeparator className="my-2 h-0 w-full border-t border-slate-300 dark:border-slate-700" />
              <NavBarActionButton
                variant="linkStyle"
                className={menuItemStyles}
                href="/"
              >
                Home
              </NavBarActionButton>
              <NavBarActionButton
                variant="linkStyle"
                className={menuItemStyles}
                href="/fitness-log"
              >
                Fitness Log
              </NavBarActionButton>
              <NavBarActionButton
                variant="linkStyle"
                className={menuItemStyles}
                href="/reminders"
              >
                Reminders
              </NavBarActionButton>
              <MenuSeparator className="my-2 h-0 w-full border-t border-slate-300 dark:border-slate-700" />
              <NavBarActionButton
                variant="buttonStyle"
                className={menuItemStyles}
                href="/logout"
              >
                Log Out
              </NavBarActionButton>
            </Menu>
          </>
        </div>
        <div className="hidden md:flex md:flex-row md:justify-between md:space-x-1">
          <div className="flex w-1/2 flex-col md:flex-row md:justify-start">
            <NavBarActionButton variant="linkStyle" href="/">
              Home
            </NavBarActionButton>
            <NavBarActionButton variant="linkStyle" href="/fitness-log">
              Fitness Log
            </NavBarActionButton>
            <NavBarActionButton variant="linkStyle" href="/reminders">
              Reminders
            </NavBarActionButton>
          </div>
          <div className="flex w-1/2 flex-col md:flex-row md:justify-end">
            <NavBarActionButton
              variant="linkStyle"
              href="/logout"
              className="mr-2"
            >
              Log Out
            </NavBarActionButton>
            <NavBarActionButton variant="buttonStyle" href="/profile">
              My Profile
            </NavBarActionButton>
          </div>
        </div>
      </>
    );
  }

  return (
    <div className="hidden md:flex md:flex-row md:justify-between md:space-x-1">
      <NavBarActionButton variant="buttonStyle" href="/login">
        Get Started
      </NavBarActionButton>
    </div>
  );
};
