"use client";
import { Button, CustomLink } from "@/atoms";
import { useRouter } from "next/navigation";
import Image from "next/image";

export const Navbar = () => {
  const router = useRouter();

  const navigateOnClick = (path: string) => router.push(path);

  return (
    <nav
      className="w-full border-b-[1px] border-dark-gray
    bg-white"
    >
      <div className="mx-auto justify-between px-4 pl-[100px] md:flex md:items-center md:px-8 lg:max-w-7xl">
        <div className="flex items-center justify-between py-[30px] md:block">
          <CustomLink path="/">
            <Image
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
              src="/next.svg"
              alt="Next.js Logo"
              width={159}
              height={17}
              priority
            />
          </CustomLink>
        </div>
        <div className="sm: py-[27px]">
          <ul className="flex-1 items-center justify-center space-y-8 justify-self-center md:flex md:space-x-6 md:space-y-0">
            <li>
              <CustomLink
                path="/login"
                fontColor="medium-gray"
                fontSize="small"
                fontWeight="medium"
              >
                Log in
              </CustomLink>
            </li>
            <li>
              <Button
                bgColor="primary"
                fontColor="white"
                hasShadow
                onButtonClick={() => void navigateOnClick("/signup")}
                size="small"
              >
                Sign up
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
