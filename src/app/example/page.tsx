/* eslint-disable @next/next/no-img-element */
'use client';

import { EXAMPLE } from '@/constants/example';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import { SiNodedotjs, SiReact, SiTailwindcss } from 'react-icons/si';
import { TbEye, TbStack2, TbWorldShare } from 'react-icons/tb';

/* eslint-disable @next/next/no-img-element */

/* eslint-disable @next/next/no-img-element */

/* eslint-disable @next/next/no-img-element */

/* eslint-disable @next/next/no-img-element */

const Example = () => {
    return (
        <>
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ type: 'spring' }}
                className="h-[fit-content] relative w-full flex flex-col items-center overflow-hidden rounded-md bg-dot-slate-100/[0.24]"
            >
                <div className="px-5 sm:px-0 mt-28 sm:mt-36 w-auto space-y-5">
                    <h1 className="text-5xl md:text-5xl xl:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 leading-tight">
                        My Recent Works
                    </h1>
                    <p className="text-neutral-300 text-center">
                        Here are a few projects I&apos;ve worked on recently.
                    </p>
                </div>

                {/* card list */}
                <div className="grid lg:grid-cols-3 md:grid-cols-2 2xl:grid-cols-3 gap-10 my-20 mx-8 justify-center items-center">
                    {EXAMPLE.slice(0, 3).map((project: any, index: number) => (
                        <div
                            key={index}
                            className=" h-auto border border-stone-300 rounded-xl
          hover:scale-105 duration-300 flex flex-col dark:border-neutral-800 dark:bg-black relative"
                        >
                            <a
                                className="absolute px-7 py-1 rounded-bl-xl rounded-tr-xl right-0 bg-black bg-opacity-50 
              flex gap-2 items-center text-white"
                                href={project.urlDirect}
                            >
                                <span>Preview</span>
                                <TbWorldShare className="w-5 h-5 animate-bounce" />
                            </a>
                            <img
                                src={project.srcImage}
                                alt="projectImage.webp"
                                width={'100%'}
                                height={'100%'}
                                className="bg-cover rounded-t-xl"
                            />
                            <div className="p-4">
                                <h3 className="font-semibold text-xl mb-4">
                                    {project.title}
                                </h3>
                                <p className="text-base text-neutral-400 mb-2">
                                    {project.description}
                                </p>
                            </div>
                            <ul className="h-full flex flex-wrap items-end gap-3 pb-4 px-4 justify-self-start">
                                {project.icons.map(
                                    (icon: any, index_: number) => (
                                        <li
                                            key={index_}
                                            className="tooltip before:text-neutral-700 dark:text-white before:bg-neutral-200 
                  before:dark:bg-white before:content-[attr(data-tooltip)]"
                                            data-tooltip={icon.title}
                                        >
                                            <icon.SvgIcon
                                                className={`w-7 h-7 ${icon.class} `}
                                            />
                                        </li>
                                    ),
                                )}
                            </ul>
                        </div>
                    ))}
                </div>
            </motion.div>
        </>
    );
};

export default Example;
