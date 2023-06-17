import { NavBarLogo } from "../../atoms/NavBarLogo/NavBarLogo";
import { NavBarLoginButtons } from "../../molecules/NavBarLoginButtons/NavBarLoginButtons";

export const NavBar: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-fitGray-500/30 bg-white/20 shadow-sm backdrop-blur dark:border-fitGray-300/30 dark:bg-fitGray-900/30 dark:shadow-md">
      <div className="flex h-14 items-center justify-between px-4 lg:container">
        <NavBarLogo />
        <nav>
          <NavBarLoginButtons />
        </nav>
      </div>
    </header>
  );
};
