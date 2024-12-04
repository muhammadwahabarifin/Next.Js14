import {
    SiCss3,
    SiFramer,
    SiHtml5,
    SiJavascript,
    SiMongodb,
    SiNextdotjs,
    SiTailwindcss,
    SiTypescript,
} from 'react-icons/si';

type Icon = {
    SvgIcon: any;
    title: string;
    class: string;
};

type Project = {
    title: string;
    description: string;
    srcImage: string;
    icons: Array<Icon>;
};

export const EXAMPLE: Array<Project> = [
    {
        title: 'Code Framer',
        description: 'I created personal website for my portfolio.',
        srcImage: '/project1.webp',
        icons: [
            {
                SvgIcon: SiNextdotjs,
                title: 'NextJS',
                class: 'fill-black dark:fill-white',
            },
            {
                SvgIcon: SiFramer,
                title: 'FramerMotion',
                class: 'fill-black dark:fill-white',
            },
            {
                SvgIcon: SiTypescript,
                title: 'Typescript',
                class: 'fill-blue-800 rounded',
            },
            {
                SvgIcon: SiTailwindcss,
                title: 'TailwindCSS',
                class: 'fill-blue-400',
            },
        ],
    },
    {
        title: 'Fullstack Blog',
        description: 'I created personal website for my portfolio.',
        srcImage: '/project2.webp',
        icons: [
            {
                SvgIcon: SiNextdotjs,
                title: 'NextJS',
                class: 'fill-stone-950 dark:fill-white',
            },
            {
                SvgIcon: SiTailwindcss,
                title: 'TailwindCSS',
                class: 'fill-blue-400',
            },
            {
                SvgIcon: SiTypescript,
                title: 'Typescript',
                class: 'fill-blue-800 rounded',
            },
            {
                SvgIcon: SiMongodb,
                title: 'MongoDB',
                class: 'fill-green-600',
            },
        ],
    },
    {
        title: 'Studio Website',
        description:
            'I created a website for a e-commerce that sells products.',
        srcImage: '/project4.webp',
        icons: [
            {
                SvgIcon: SiHtml5,
                title: 'HTML5',
                class: 'fill-orange-800',
            },
            {
                SvgIcon: SiCss3,
                title: 'CSS3',
                class: 'fill-blue-800 rounded',
            },
            {
                SvgIcon: SiJavascript,
                title: 'Javascript',
                class: 'fill-yellow-400',
            },
        ],
    },
];
