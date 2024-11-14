import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import img from "../../../public/profile .jpg";

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
                Welcome to my portfolio! I am a passionate MERN Stack developer
                on a journey towards becoming a proficient full-stack developer.
                Currently pursuing my BCA degree from SGTBIMIT, I am deeply
                engrossed in crafting modern UI applications using cutting-edge
                frameworks like React. My portfolio showcases a collection of
                projects that demonstrate my skills and dedication to creating
                innovative solutions. Feel free to explore my projects.
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
          <h2 className="text-4xl font-bold my-10 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 leading-tight">
            What I Know
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10 mt-2">
            {/*  */}
          </div>
        </div>
      </div>
    </section>
  );
}
