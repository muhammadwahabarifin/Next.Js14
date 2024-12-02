'use client';

import {
    BackendSkills,
    DevopsSkills,
    FrontendSkills,
    LanguageSkills,
} from '@/components/skills/skill_icon';
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient';
import { ShootingStars } from '@/components/ui/shooting-stars';
import { StarsBackground } from '@/components/ui/stars-background';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { TbBrandVscode, TbLanguage } from 'react-icons/tb';

import img from '../../../public/profile .jpg';

export default function page() {
    return (
        <section className="flex flex-col items-center justify-center gap-10 dark:bg-dot-white/[0/16]">
            <div className="md:w-[90%] xl:w-[70%] px-4 md:px-0 my-20 md:my-32">
                <div className="flex md:justify-between">
                    <div className="space-y-10">
                        <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 leading-tight">
                            Know who I&apos;M
                        </h1>
                        <div className="space-y-4">
                            <p className="md:max-w-xl xl:max-w-2xl text-neutral-200 md:pr-4">
                                Welcome to my portfolio! I am a passionate MERN
                                Stack developer on my way to becoming a
                                proficient full-stack developer. I love building
                                modern UI applications using cutting-edge
                                frameworks like React. My portfolio features a
                                collection of projects that showcase my skills
                                and dedication to creating innovative solutions.
                                Feel free to explore my projects.
                            </p>
                            <HoverBorderGradient
                                containerClassName="rounded-xl"
                                as="button"
                                className="dark:bg-black bg-white text-black dark:text-white flex items-center justify-center space-x-2 w-28"
                            >
                                <Link href="/projects">Projects</Link>
                            </HoverBorderGradient>
                        </div>
                    </div>
                    <figure className="hidden md:block">
                        <Image
                            alt="profile"
                            src={img}
                            className="size-80 rounded-md grayscale object-cover"
                        />
                    </figure>
                </div>

                <div className="my-20">
                    <div className="flex gap-3 items-center">
                        <TbBrandVscode
                            strokeWidth="1"
                            className="h-full w-14"
                        />
                        <h2 className="text-4xl font-bold my-10 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 leading-tight">
                            My Skills
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-10 mt-2">
                        <div className="flex flex-col gap-5 min-w-80 p-4 rounded-2xl">
                            <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                                Language
                            </h1>
                            <div className="flex flex-wrap gap-2">
                                <ul className="flex flex-wrap gap-3 md:gap-5">
                                    <LanguageSkills />
                                </ul>
                            </div>
                        </div>
                        <div className="flex flex-col gap-5 min-w-80 p-4 rounded-2xl">
                            <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                                Frontend
                            </h1>
                            <div className="flex flex-wrap gap-2">
                                <ul className="flex flex-wrap gap-3 md:gap-5">
                                    <FrontendSkills />
                                </ul>
                            </div>
                        </div>
                        <div className="flex flex-col gap-5 min-w-80 p-4 rounded-2xl">
                            <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                                Backend
                            </h1>
                            <div className="flex flex-wrap gap-2">
                                <ul className="flex flex-wrap gap-3 md:gap-5">
                                    <BackendSkills />
                                </ul>
                            </div>
                        </div>
                        <div className="flex flex-col gap-5 min-w-80 p-4 rounded-2xl">
                            <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                                Devops
                            </h1>
                            <div className="flex flex-wrap gap-2">
                                <ul className="flex flex-wrap gap-3 md:gap-5">
                                    <DevopsSkills />
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="fixed -top-10 -left-10 -z-20 w-[80%] h-[18%] bg-gradient-to-r from-indigo-800 to-purple-900  blur-[150px] rounded-lg -rotate-12" />
            <div className="fixed top-0 z-50 w-[100%] h-screen translate-x-[100%] bg-black animate-slide-in-out" />
            <ShootingStars />
            <StarsBackground />
        </section>
    );
}
