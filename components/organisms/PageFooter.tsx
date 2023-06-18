import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import { MonoLogo } from "@images/WellPathLogo";

export const PageFooter: React.FC = () => {
  return (
    <footer className="bg-footerBg-light p-10 text-white dark:bg-footerBg-dark sm:px-4">
      <div className="container mx-auto max-w-screen-lg sm:flex-col">
        <div className="flex flex-wrap">
          <div className="w-full px-4 sm:w-full lg:w-3/12">
            <div className="mb-10 w-full">
              <div className="mb-6 inline-block max-w-[160px]">
                <MonoLogo className="w-full text-white" />
              </div>
              <p className="mb-2 text-base text-slate-200">
                &copy; 2023 Rainbow Devs
              </p>
            </div>
          </div>
          <div className="w-full px-4 sm:w-1/3 lg:w-3/12">
            <div className="mb-10 w-full">
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
          <div className="w-full px-4 sm:w-1/3 lg:w-3/12">
            <div className="mb-10 w-full">
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
          <div className="w-full px-4 sm:w-1/3 lg:w-3/12">
            <div className="mb-10 w-full">
              <h4 className="mb-4 text-lg font-semibold text-white">
                Follow Us
              </h4>
              <div className="mb-2 flex w-full items-center text-slate-200 hover:text-white">
                <div className="mr-4 h-6 w-6">
                  <a
                    href="https://github.com/Rainbow-Devs"
                    target="_blank"
                    title="Rainbow Devs GitHub Page"
                  >
                    <FaGithub className="h-full w-full" />
                  </a>
                </div>
                <div className="mr-4 h-6 w-6">
                  <a
                    href="https://www.linkedin.com/company/rainbow-devs"
                    target="_blank"
                    title="Rainbow Devs LinkedIn Page"
                  >
                    <FaLinkedin className="h-full w-full" />
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
