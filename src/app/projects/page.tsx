'use client';

import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card';
import { PROJECTS } from '@/constants/projects';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function Projects() {
    return (
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
            <div className="grid lg:grid-cols-3 md:grid-cols-2 2xl:grid-cols-3 gap-10 my-20">
                {/* before: no large */}
                {PROJECTS.map((project, index) => (
                    <CardContainer className="inter-var" key={project.id}>
                        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-[90vw] sm:w-[70vw] md:w-[45vw] xl:w-[30rem] h-auto xl:h-[28rem] rounded-xl p-6 border">
                            <CardItem
                                translateZ="50"
                                className="text-xl font-bold text-neutral-600 dark:text-white"
                            >
                                {project.title}
                            </CardItem>
                            <CardItem
                                as="p"
                                translateZ="60"
                                className="text-neutral-400 text-sm max-w-sm mt-2"
                            >
                                Tech Stack: {project.skill}
                            </CardItem>
                            <CardItem translateZ="100" className="w-full mt-4">
                                <Image
                                    src={project.img}
                                    height="1000"
                                    width="1000"
                                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                    alt="thumbnail"
                                    priority
                                />
                            </CardItem>
                            <div className="flex justify-between items-center mt-5">
                                <CardItem
                                    translateZ={20}
                                    as={Link}
                                    href="https://twitter.com"
                                    target="__blank"
                                    className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                                >
                                    Try Now
                                </CardItem>
                                <CardItem
                                    translateZ={20}
                                    as={Link}
                                    href="https://github.com"
                                    target="__blank"
                                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                                >
                                    GitHub
                                </CardItem>
                            </div>
                        </CardBody>
                    </CardContainer>
                ))}
            </div>
        </motion.div>
    );
}
