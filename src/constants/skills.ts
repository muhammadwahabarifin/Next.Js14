import React from 'react';
import {
    SiAmazonec2,
    SiAmazonrds,
    SiBootstrap,
    SiCodeigniter,
    SiCplusplus,
    SiCsharp,
    SiCss3,
    SiExpress,
    SiFacebook,
    SiFramer,
    SiGit,
    SiGithub,
    SiGithubpages,
    SiHtml5,
    SiJavascript,
    SiJquery,
    SiLaravel,
    SiMicrosoftazure,
    SiMongodb,
    SiMongoose,
    SiMysql,
    SiNextdotjs,
    SiPhp,
    SiPostgresql,
    SiReact,
    SiRedux,
    SiSass,
    SiTailwindcss,
    SiTypescript,
} from 'react-icons/si';

type Item = {
    // tooltip: string;
    SvgIcon: any;
    class?: string;
};

type Skills = {
    language?: Array<Item>;
    frontend?: Array<Item>;
    backend?: Array<Item>;
};

export const Skills = {
    language: [
        { SvgIcon: SiHtml5, class: 'fill-orange-500' },
        { SvgIcon: SiCss3, class: 'fill-blue-400' },
        { SvgIcon: SiJavascript, class: 'fill-yellow-400 rounded' },
        { SvgIcon: SiTypescript, class: 'fill-blue-800 rounded' },
    ],
    frontend: [
        { SvgIcon: SiNextdotjs, class: 'fill-stone-950 dark:fill-white' },
        { SvgIcon: SiReact, class: 'fill-blue-500' },
        { SvgIcon: SiTailwindcss, class: 'fill-blue-400' },
        { SvgIcon: SiBootstrap, class: 'fill-purple-500' },
        { SvgIcon: SiFramer, class: 'fill-stone-950 dark:fill-white' },
    ],
    backend: [
        { SvgIcon: SiMysql, class: 'fill-orange-500' },
        { SvgIcon: SiLaravel, class: 'fill-red-600' },
        { SvgIcon: SiMongodb, class: 'fill-green-500' },
        { SvgIcon: SiExpress, class: 'fill-white' },
    ],
    devops: [
        { SvgIcon: SiGit, class: 'fill-red-600' },
        { SvgIcon: SiMicrosoftazure, class: 'fill-sky-500' },
        { SvgIcon: SiAmazonec2, class: 'fill-orange-500' },
    ],
};
