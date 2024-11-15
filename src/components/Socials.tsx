import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa6';

const Socials: React.FC<{ hidden: boolean }> = ({ hidden }) => {
    const linkStyle =
        'cursor-pointer text-gray-300 hover:text-white transition-all delay-100';
    return (
        <ul className={`text-xl ${hidden ? 'hidden' : 'flex'} md:flex gap-4`}>
            <li className={linkStyle}>
                <a
                    href="https://github.com/"
                    target="_blank"
                    aria-label="github profile"
                >
                    <FaGithub />
                </a>
            </li>
            <li className={linkStyle}>
                <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    aria-label="linkedin profile"
                >
                    <FaLinkedin />
                </a>
            </li>
            <li className={linkStyle}>
                <a
                    href="https://www.instagram.com/wahaaabbbb"
                    target="_blank"
                    aria-label="instagram profile"
                >
                    <FaInstagram />
                </a>
            </li>
            <li className={linkStyle}>
                <a
                    href="https://x.com/wahaaabbb?s=21"
                    target="_blank"
                    aria-label="twitter profile"
                >
                    <FaTwitter />
                </a>
            </li>
        </ul>
    );
};

export default Socials;
