import React from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa6";

const Socials: React.FC<{ hidden: boolean }> = ({ hidden }) => {
  const linkStyle =
    "cursor-pointer text-gray-300 hover:text-white transition-all delay-100";
  return (
    <ul className={`text-xl ${hidden ? "hidden" : "flex"} md:flex gap-4`}>
      <li className={linkStyle}>
        <a href="WahabArf" target="_blank" aria-label="github profile">
          <FaGithub />
        </a>
      </li>
      <li className={linkStyle}>
        <a href="WahabArf" target="_blank" aria-label="github profile">
          <FaLinkedin />
        </a>
      </li>
      <li className={linkStyle}>
        <a href="WahabArf" target="_blank" aria-label="github profile">
          <FaInstagram />
        </a>
      </li>
      <li className={linkStyle}>
        <a href="WahabArf" target="_blank" aria-label="github profile">
          <FaTwitter />
        </a>
      </li>
    </ul>
  );
};

export default Socials;
