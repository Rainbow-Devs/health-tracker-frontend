import Link from "next/link";

import { MonoLogo } from "@images/WellPathLogo";
import { GitHubIcon, LinkedInIcon } from "@images/SocialIcons";

export const PageFooter: React.FC = () => {
  return (
    <footer className="bg-footerBg-light p-10 text-white dark:bg-footerBg-dark sm:px-4">
      <div className="container mx-auto max-w-screen-lg">
        <div className="grid grid-cols-12 text-center sm:text-left">
          <div className="col-span-12 row-start-4 sm:row-start-2 md:col-span-4 md:row-start-1">
            <div className="mb-10 w-full px-4">
              <div className="mb-6 inline-block max-w-[160px]">
                <MonoLogo className="w-full text-white" />
              </div>
              <p className="mb-2 text-base text-slate-200">
                &copy; 2023 Rainbow Devs
              </p>
            </div>
          </div>
          <div className="col-span-12 sm:col-span-4 md:col-span-3">
            <div className="mb-10 w-full px-4">
              <h4 className="mb-4 text-lg font-semibold text-white">
                WellPath
              </h4>
              <ul className="mb-2 flex flex-col space-y-2 text-slate-200">
                <li>
                  <Link href="/terms-of-service" className="hover:text-white">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy" className="hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-span-12 sm:col-span-4 md:col-span-3">
            <div className="mb-10 w-full px-4">
              <h4 className="mb-4 text-lg font-semibold text-white">
                Rainbow Devs
              </h4>
              <ul className="mb-2 flex flex-col space-y-2 text-slate-200">
                <li>
                  <Link href="/about-rainbow-devs" className="hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact-us" className="hover:text-white">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-span-12 sm:col-span-4 md:col-span-2">
            <div className="mb-16 w-full px-4 sm:mb-10">
              <h4 className="mb-4 text-lg font-semibold text-white">
                Follow Us
              </h4>
              <div className="mb-2 w-full text-slate-200 hover:text-white">
                <div className="mx-3 inline-block h-8 w-8 sm:mx-2 sm:ml-0 md:h-6 md:w-6">
                  <a
                    href="https://github.com/Rainbow-Devs"
                    target="_blank"
                    title="Rainbow Devs GitHub Page"
                  >
                    <GitHubIcon className="h-full w-full" />
                  </a>
                </div>
                <div className="mx-3 inline-block h-8 w-8 sm:mx-2 md:h-6 md:w-6">
                  <a
                    href="https://www.linkedin.com/company/rainbow-devs"
                    target="_blank"
                    title="Rainbow Devs LinkedIn Page"
                  >
                    <LinkedInIcon className="h-full w-full" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default PageFooter;

