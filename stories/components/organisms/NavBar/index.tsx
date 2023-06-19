import { NavBarLogo } from "@atoms/NavBarLogo";
import { NavBarLoginButtons } from "@molecules/NavBarLoginButtons";

export const NavBar: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-fitGray-500/30 bg-white/20 shadow-sm backdrop-blur dark:border-fitGray-300/30 dark:bg-fitGray-900/30 dark:shadow-md">
      <div className="container flex h-14 max-w-screen-lg items-center justify-between px-4">
        <NavBarLogo />
        <nav>
          <NavBarLoginButtons />
        </nav>
      </div>
    </header>
  );
};
