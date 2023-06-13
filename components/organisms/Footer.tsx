import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import { WellPathMonoLogo } from "@images/WellPathMonoLogo";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-footerBg py-4 text-white">
      <div className="container mx-auto grid grid-cols-4 gap-4 px-4">
        <div className="flex flex-col space-y-2">
          <picture>
            <WellPathMonoLogo className="w-28 text-white" />
          </picture>

          <p>© 2023 Rainbow Devs</p>
        </div>
        <div className="flex flex-col space-y-2">
          <h4 className="font-bold">Follow Us</h4>
          <div className="flex flex-row space-x-2">
            <a
              href="https://github.com/Rainbow-Devs"
              target="_blank"
              title="Rainbow Devs GitHub Page"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/company/rainbow-devs"
              target="_blank"
              title="Rainbow Devs LinkedIn Page"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
        <div className="flex flex-col space-y-2">
          <h4 className="font-bold">WellPath</h4>
          <ul>
            <li>
              <Link href="/terms-of-service">Terms of Service</Link>
            </li>
            <li>
              <Link href="/privacy-policy">Privacy Policy</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col space-y-2">
          <h4 className="font-bold">Rainbow Devs</h4>
          <ul>
            <li>
              <Link href="/about-rainbow-devs">About Us</Link>
            </li>
            <li>
              <Link href="/contact-us">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
