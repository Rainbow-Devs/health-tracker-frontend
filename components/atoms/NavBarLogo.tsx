"use client";

import { useRouter } from "next/navigation";

export const NavBarLogo: React.FC = () => {
  const router = useRouter();

  const clickHandler = () => {
    router.push("/");
  };

  return (
    <div className="w-full flex-1 font-bold md:w-auto md:flex-none">
      <button type="button" onClick={clickHandler}>
        Health Tracker
      </button>
    </div>
  );
};
