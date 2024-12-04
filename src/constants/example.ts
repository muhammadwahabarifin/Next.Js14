import {
    SiCss3,
    SiFramer,
    SiHtml5,
    SiJavascript,
    SiNextdotjs,
    SiStyledcomponents,
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
    urlDirect: string;
    srcImage: string;
    icons: Array<Icon>;
};

export const EXAMPLE: Array<Project> = [
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
        title: 'Evara E-commerce',
        description:
            'A Responsive Ecommerce Website Project With HTML CSS Javascript.',
        urlDirect: 'https://evara-ecommerce-phi.vercel.app/',
        srcImage: '/project7.png',
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
    {
        title: 'Bank Hotel',
        description:
            'A project to test styling capabilities while maintaining responsiveness',
        urlDirect: 'https://temmy-bank-hotel.vercel.app/',
        srcImage: '/project8.png',
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
                SvgIcon: SiStyledcomponents,
                title: 'StyledComponents',
                class: 'fill-amber-400',
            },
        ],
    },
];
