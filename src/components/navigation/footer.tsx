'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

import Socials from '../Socials';
import { HoverBorderGradient } from '../ui/hover-border-gradient';

const Footer = () => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 200 }}
            className="flex flex-col items-center gap-8 my-6 px-5 sm:px-20"
        >
            <div className="flex justify-between w-full sm:items-center flex-col sm:flex-row gap-5">
                <h1 className="text-2xl sm:text-4xl font-bold">
                    Let&apos;s Work Together
                </h1>
                <Link href="/contact">
                    <HoverBorderGradient
                        containerClassName="rounded-full"
                        as="button"
                        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
                    >
                        <span className="flex items-center">
                            Contact Now &nbsp;
                            <ArrowUpRight />
                        </span>
                    </HoverBorderGradient>
                </Link>
            </div>
            <hr className="w-full" />
            <div className="w-full flex-col flex gap-5 md:gap-0 md:flex-row md:justify-between">
                <h2 className="text-xl text-neutral-300">WahabArf</h2>
                <p className="text-neutral-400 text-sm">
                    © 2024 All Rights Reserved | WahabArf
                </p>
                <Socials hidden={false} />
            </div>
        </motion.section>
    );
};

export default Footer;
