import { BackgroundLines } from '@/components/ui/background-lines';
import { ShootingStars } from '@/components/ui/shooting-stars';
import { StarsBackground } from '@/components/ui/stars-background';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const Blog = () => {
    return (
        <>
            <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
                <div>
                    <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
                        COMMING SOON !
                    </h2>
                    <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
                        Design By WahabArf
                    </p>
                </div>
            </BackgroundLines>
        </>
    );
};

export default Blog;
