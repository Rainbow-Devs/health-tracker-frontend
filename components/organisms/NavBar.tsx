import { NavBarLogo } from "@atoms/NavBarLogo";
import { NavBarLoginButtons } from "@molecules/NavBarLoginButtons";

export const NavBar: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-gray-50/90 backdrop-blur dark:border-none dark:bg-gray-400">
      <div className="container flex h-14 items-center justify-between px-4">
        <NavBarLogo />
        <nav>
          <NavBarLoginButtons />
        </nav>
      </div>
    </header>
  );
};
