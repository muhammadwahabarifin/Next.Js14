import { ShootingStars } from '@/components/ui/shooting-stars';
import { StarsBackground } from '@/components/ui/stars-background';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const Blog = () => {
    return (
        <>
            <div className="min-h-screen flex justify-center items-center w-full flex-col mx-auto">
                <h1 className="text-4xl text-center font-semibold">
                    COMMING SOON 🚀
                </h1>
                <Link
                    href="/"
                    className="flex items-center text-2xl mr-2 text-blue-400 hover:opacity-70 cursor-pointer"
                >
                    Go To Back
                    <span className="ml-1 items-center">
                        <ArrowRight size={18} />
                    </span>
                </Link>
            </div>
            <div className="fixed -top-10 -left-10 -z-20 w-[80%] h-[18%] bg-gradient-to-r from-indigo-800 to-purple-900  blur-[150px] rounded-lg -rotate-12" />
            <div className="fixed top-0 z-50 w-[100%] h-screen translate-x-[100%] bg-black animate-slide-in-out" />
            <ShootingStars />
            <StarsBackground />
        </>
    );
};

export default Blog;
