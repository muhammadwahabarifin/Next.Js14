'use client';

import { Layers } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FaRegUser } from 'react-icons/fa';
import { GrHomeRounded } from 'react-icons/gr';
import { GrLocation } from 'react-icons/gr';
import { IoCloseOutline } from 'react-icons/io5';
import { PiPenNibStraight } from 'react-icons/pi';
// import dynamic from "next/dynamic";
import { RiMenu4Fill } from 'react-icons/ri';

import img from '../../../public/Logo.png';
import Socials from '../Socials';

const Navbar = () => {
    const pre = '-top-96 right-0';
    const post = 'right-10 bg-black top-14 p-10 md:p-0 md:bg-transparent';
    const [active, setActive] = useState<string>(pre);
    const menuHandler = () => {
        active === pre ? setActive(post) : setActive(pre);
    };
    const linkStyle =
        'cursor-pointer text-gray-300 hover:text-white transition-all delay-100';
    const linkSpan = 'flex gap-2 items-center';
    return (
        <div className="fixed w-full h-14 z-50 top-0 left-0">
            <nav className="backdrop-blur-md w-full flex items-center justify-between px-4 md:px-0 md:justify-around h-full">
                <div className="flex gap-2 cursor-default font-bold text-white items-center">
                    {/* <Image src={img} alt="Logo" className="w-4 h-5" priority /> */}
                    <h1>WahabArf</h1>
                </div>
                <div>
                    <ul
                        className={`absolute md:relative flex flex-col md:flex-row gap-6 md:top-0 md:right-0 rounded-xl ${active} transition-all`}
                    >
                        <li className={linkStyle} onClick={menuHandler}>
                            <Link href="/">
                                <span className={linkSpan}>
                                    <GrHomeRounded />
                                    Home
                                </span>
                            </Link>
                        </li>
                        <li className={linkStyle} onClick={menuHandler}>
                            <Link href="/about">
                                <span className={linkSpan}>
                                    <FaRegUser />
                                    About
                                </span>
                            </Link>
                        </li>
                        <li className={linkStyle} onClick={menuHandler}>
                            <Link href="/projects">
                                <span className={linkSpan}>
                                    <Layers className="size-5" />
                                    Projects
                                </span>
                            </Link>
                        </li>
                        <li className={linkStyle} onClick={menuHandler}>
                            <Link href="/contact">
                                <span className={linkSpan}>
                                    <GrLocation />
                                    Contact
                                </span>
                            </Link>
                        </li>
                        <li className={linkStyle} onClick={menuHandler}>
                            <Link href="/blog">
                                <span className={linkSpan}>
                                    <PiPenNibStraight />
                                    Blog
                                </span>
                            </Link>
                        </li>
                    </ul>
                </div>
                <Socials hidden={true} />
                <button
                    className="text-xl flex md:hidden z-10"
                    onClick={menuHandler}
                    aria-label="Navigation Menu"
                >
                    {active === pre ? <RiMenu4Fill /> : <IoCloseOutline />}
                </button>
            </nav>
        </div>
    );
};

export default Navbar;
