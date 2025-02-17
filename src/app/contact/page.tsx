'use client';

import Socials from '@/components/Socials';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';
import { IoPhonePortraitOutline } from 'react-icons/io5';
import { MdEmail } from 'react-icons/md';

const Contact = () => {
    return (
        <motion.div
            className="h-screen flex flex-col items-center justify-center bg-grid-white/[0.04]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring' }}
        >
            <section className="px-5 w-full sm:w-4/5 md:w-[45rem]">
                <div className="relative flex flex-col gap-2 items-center mb-10">
                    <h1 className="text-5xl sm:text-6xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 leading-tight">
                        Get In Touch
                    </h1>
                    <Link
                        href="mailto:xyz@gmail.com"
                        className="flex items-center hover:underline hover:underline-offset-4"
                    >
                        <MdEmail />
                        &nbsp;Wahabarf699@gmail.com
                    </Link>
                    <p className="flex items-center">
                        {/* <IoPhonePortraitOutline /> */}
                        &#64;wahabarf
                    </p>
                    <div className="mt-2">
                        <Socials hidden={false} />
                    </div>
                </div>
                <form className="space-y-8">
                    <input
                        type="text"
                        required
                        className="bg-transparent border-b border-white h-10 px-4 outline-none w-full"
                        placeholder="Name"
                        name="name"
                    />
                    <input
                        type="email"
                        required
                        name="email"
                        className="bg-transparent border-b border-white h-10 px-4 outline-none w-full"
                        placeholder="Email"
                    />
                    <textarea
                        className="h-28 max-h-60 bg-transparent border-b border-white px-4 outline-none w-full"
                        placeholder="Message"
                        name="message"
                        required
                    />
                    <Button type="submit" className="w-28 rounded-none">
                        Send
                    </Button>
                </form>
                <div className="absolute bg-neutral-800 blur-[100px] top-10 sm:top-0 size-72 sm:size-96 -z-10" />
            </section>
        </motion.div>
    );
};

export default Contact;
