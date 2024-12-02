import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const Blog = () => {
    return (
        <>
            <div className="absolute top-0 -z-10 h-full w-full bg-black"> </div>
            <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div>
            <div className="min-h-screen flex justify-center items-center w-full flex-col mx-auto">
                <h1 className="text-4xl text-center font-semibold">
                    COMMING SOON 🚀
                </h1>
                <Link
                    href="/"
                    className="flex items-center text-2xl mr-2 text-blue-400 hover:opacity-70"
                >
                    Go To Back
                    <span className="ml-1 items-center">
                        <ArrowRight size={18} />
                    </span>
                </Link>
            </div>
        </>
    );
};

export default Blog;
