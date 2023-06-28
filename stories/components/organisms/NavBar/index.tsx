import { NavBarLogo } from "@atoms/NavBarLogo";
import { NavBarLoginButtons } from "@molecules/NavBarLoginButtons";

export const NavBar: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-fitGray-500/30 bg-white/60 shadow-sm backdrop-blur dark:border-fitGray-300/30 dark:bg-footerBg-light/60 dark:shadow-md">
      <div className="container flex h-14 max-w-screen-lg flex-row items-center px-4">
        <NavBarLogo />
        <nav className="w-3/4 lg:w-2/3">
          <NavBarLoginButtons />
        </nav>
      </div>
    </header>
  );
};
