"use client";
import { useEffect, useState, FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { NavBarLogo } from "@atoms/NavBarLogo";
import Link from "next/link";

const HamburgerMenu: FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false); // Reset menu state when the component mounts on the client
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="flex flex-row items-center justify-between p-5">
      <div />
      <NavBarLogo />
      <FontAwesomeIcon
        icon={faBars}
        style={{ width: "30px", height: "30px" }}
        onClick={toggleMenu}
        aria-label="Open menu"
      />

      {menuOpen && (
        <div
          data-testid="hamburgerMenu"
          // eslint-disable-next-line tailwindcss/no-custom-classname
          className={`hamburger-menu ${menuOpen ? "open" : ""}`}
        >
          <FontAwesomeIcon
            icon={faX}
            style={{ width: "25px", height: "25px" }}
            onClick={toggleMenu}
            aria-label="Close menu"
          />
          <ul className="flex flex-col items-center">
            <Link
              onClick={toggleMenu}
              href="/login"
              className="text-3xl font-bold"
            >
              Log In
            </Link>
          </ul>
        </div>
      )}
      <style jsx>{`
        .hamburger-menu {
          position: fixed;
          flex-direction: column;
          top: 0;
          right: -100%;
          width: 75%;
          height: 100%;
          background-color: #4b5563;
          padding: 20px;
          transition: right 0.3s ease-in-out;
          z-index: 999;
          color: #fff;
        }

        .hamburger-menu.open {
          right: 0;
        }
      `}</style>
    </div>
  );
};

export default HamburgerMenu;
