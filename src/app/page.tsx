'use client';

import Footer from '@/components/navigation/footer';
import BlurIn from '@/components/ui/blur-in';
import { Button } from '@/components/ui/button';
// import GradualSpacing from '@/components/ui/gradual-spacing';
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import { word } from '@/constants/projects';
import Link from 'next/link';
import React from 'react';

export default function page() {
    return (
        <>
            <div className="h-lvh w-full rounded-md flex md:items-center md:justify-center antialiased relative overflow-hidden dark:bg-grid-white/[0.1] justify-center">
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_30%,black)]" />
                {/* <Meteors number={50} /> */}
                <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-40 md:pt-0 flex flex-col items-center">
                    <BlurIn word="Hi I&#39;m WahabArf" />
                    <TextGenerateEffect words={word} className="capitalize" />
                    <div className="mt-10 flex gap-4 items-center">
                        <Button asChild className="py-2 px-5">
                            <Link href="#">Resume</Link>
                        </Button>
                        <Link href="about">
                            <HoverBorderGradient
                                containerClassName="rounded-md"
                                as="button"
                                className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-32"
                            >
                                <span className="flex items-center">
                                    About Me
                                </span>
                            </HoverBorderGradient>
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
