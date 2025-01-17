import {
    SiCss3,
    SiFramer,
    SiHtml5,
    SiJavascript,
    SiNextdotjs,
    SiShadcnui,
    SiStyledcomponents,
    SiTailwindcss,
    SiTypescript,
} from 'react-icons/si';

type Icon = {
    SvgIcon: any;
    title: string;
    class: string;
    text: string;
};

type Project = {
    title: string;
    description: string;
    urlDirect: string;
    srcImage: string;
    icons: Array<Icon>;
    text?: string;
};

export const WORKS: Array<Project> = [
    {
        title: 'Aoshi Platform',
        description: 'Aoshi-AI is the link management platform for businesses.',
        urlDirect:
            'https://aoshi-management-platform-for-businesses.vercel.app/',
        srcImage: '/project6.png',
        icons: [
            {
                SvgIcon: SiNextdotjs,
                title: 'NextJS',
                class: 'fill-black dark:fill-white',
                text: 'NextJs',
            },
            {
                SvgIcon: SiTailwindcss,
                title: 'TailwindCSS',
                class: 'fill-blue-500',
                text: 'TailwindCss',
            },
            {
                SvgIcon: SiShadcnui,
                title: 'ShadcnUI',
                class: 'fill-white',
                text: 'ShadcnUI',
            },
            {
                SvgIcon: SiTypescript,
                title: 'Typescript',
                class: 'fill-blue-500 rounded',
                text: 'Typescript',
            },
            {
                SvgIcon: SiFramer,
                title: 'FramerMotion',
                class: 'fill-black dark:fill-white',
                text: 'Framer Motion',
            },
        ],
    },
];
