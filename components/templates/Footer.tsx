import React from 'react';
import ImportImage from '/components/atoms/ImportImage.tsx'
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-custom-color py-4 text-white">
      <div className="container mx-auto px-4 grid grid-cols-4 gap-4">
        <div>
          <ol>
            <li>
              <picture>
                <ImportImage imageIndex={0} />
              </picture>
            </li>
            <h2>© 2023 Rainbow Devs</h2>
            <li>
            </li>
          </ol>
        </div>
        <div>
          <h2>Follow Us</h2>
          <div style={{ display: 'flex', gap: '10px' }}>
            <a href="https://github.com/Rainbow-Devs" target="_blank" title="Rainbow Devs Github Page"
            >
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/company/rainbow-devs" target="_blank"
            title="Rainbow Devs LinkedIn Page"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
        <div>
          <h2>WellPath</h2>
          <ol>
            <li>
              <a href="#">Terms of Service</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ol>
        </div>
        <div>
          <h2>Rainbow Devs</h2>
          <ol>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ol>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
