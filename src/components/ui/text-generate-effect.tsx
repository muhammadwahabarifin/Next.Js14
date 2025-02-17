/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { cn } from '@/lib/utils';
import { motion, stagger, useAnimate } from 'framer-motion';
import { useEffect } from 'react';

/* eslint-disable react-hooks/exhaustive-deps */

/* eslint-disable react-hooks/exhaustive-deps */

/* eslint-disable react-hooks/exhaustive-deps */

export const TextGenerateEffect = ({
    words,
    className,
    filter = true,
    duration = 0.5,
}: {
    words: string;
    className?: string;
    filter?: boolean;
    duration?: number;
}) => {
    const [scope, animate] = useAnimate();
    let wordsArray = words.split(' ');
    useEffect(() => {
        animate(
            'span',
            {
                opacity: 1,
                filter: filter ? 'blur(0px)' : 'none',
            },
            {
                duration: duration ? duration : 1,
                delay: stagger(0.1),
            },
        );
    }, [scope.current]);

    const renderWords = () => {
        return (
            <motion.div ref={scope}>
                {wordsArray.map((word, idx) => {
                    return (
                        <motion.span
                            key={word + idx}
                            className="opacity-0"
                            style={{
                                filter: filter ? 'blur(10px)' : 'none',
                            }}
                        >
                            {word}{' '}
                        </motion.span>
                    );
                })}
            </motion.div>
        );
    };

    return (
        <div className={cn('font-bold', className)}>
            <div className="mt-4">
                <div className=" mt-10 font-normal text-base md:text-xl text-neutral-400 max-w-72 md:max-w-3xl text-center mx-auto">
                    {renderWords()}
                </div>
            </div>
        </div>
    );
};
