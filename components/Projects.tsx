"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "motion/react";
import Chip from "./ui/custom-chip";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import projects from "@template/projects.json";
import { useAnimation, useInView } from "motion/react";
import AnimatedLink from "./AnimatedLink";
import MainHeading from "./MainHeading";

interface ProjectShowcaseProps {
    year: string;
    title: string;
    description: string;
    tags: string[];
    imageUrl: string;
    projectLink: string;
    ghLink: string;
    id: number;
    alternate: boolean;
    color: string;
}

const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({
    year,
    title,
    description,
    tags,
    imageUrl,
    projectLink,
    ghLink,
    alternate,
    color,
    id,
}) => {
    const mainControls = useAnimation();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        } else {
            mainControls.start("hidden");
        }
    }, [isInView, mainControls]);

    // Text container: slides in from the left if not alternate, from right if alternate.
    const textVariants = {
        hidden: { opacity: 0, x: alternate ? 100 : -100 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { type: "spring", stiffness: 100, damping: 20 },
        },
    };

    // Image container: slides in from the opposite direction.
    const imageVariants = {
        hidden: { opacity: 0, x: alternate ? -100 : 100 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { type: "spring", stiffness: 100, damping: 20 },
        },
    };

    return (
        <div
            data-id={id.toString().padStart(2, "0")}
            ref={ref}
            className={cn(
                "max-w-6xl w-full mx-auto flex flex-col md:flex-row items-center p-6 md:p-12 rounded-2xl shadow-lg relative gap-2",
                alternate ? "md:flex-row-reverse" : "",
                `before:content-[attr(data-id)] before:absolute before:top-1/2 before:w-screen before:-translate-y-1/2 before:-translate-x-1/2 before:text-[250px] before:text-white/10 before:select-none before:pointer-events-none`,
                alternate ? "text-right" : "text-left",
                "before:left-1/2"
            )}>
            <motion.div
                variants={textVariants}
                className={cn(
                    "w-full md:w-1/2 lg:w-2/5 space-y-4",
                    alternate && "text-right"
                )}>
                <div
                    className={cn(
                        "text-md uppercase tracking-wide text-gray-400 flex flex-row justify-start items-center gap-2",
                        alternate && "justify-end"
                    )}>
                    <span>Creative Development</span>{" "}
                    <div className="w-2 h-2 rounded-full bg-red-500"></div>{" "}
                    <span>{year}</span>
                </div>
                <h2 className="text-7xl font-extralight">{title}</h2>
                <p className="text-gray-400">{description}</p>
                <div
                    className={cn(
                        "flex gap-2 items-center flex-wrap",
                        alternate && "justify-end"
                    )}>
                    {tags.map((tag, index) => (
                        <Chip key={index}>#{tag}</Chip>
                    ))}
                </div>
                <a
                    href={projectLink}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-block bg-white text-black px-5 py-2 rounded-lg font-medium hover:bg-gray-200 transition">
                    View Project →
                </a>
                <a
                    href={ghLink}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="ml-2 inline-block border border-white text-white px-5 py-2 rounded-lg font-medium transition">
                    Github Link →
                </a>
            </motion.div>
            <motion.div
                variants={imageVariants}
                className="w-full md:w-1/2 lg:w-3/5 mt-6 md:mt-0 h-full">
                <Link
                    href={projectLink}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="w-full h-full block">
                    <span className="sr-only">{title} project showcase</span>
                    {/* <Image
                        src={imageUrl}
                        alt={title}
                        width={800}
                        height={800 / 1.5}
                        className="rounded-lg shadow-lg w-full transition-all brightness-100 hover:brightness-60"
                    /> */}
                    <DesktopMockup src={imageUrl} color={color} />
                </Link>
            </motion.div>
        </div>
    );
};

export default function Projects() {
    return (
        <div className="min-h-screen py-20 w-full" id="projects">
            <div className="max-w-6xl mx-auto py-20 px-4 md:px-8 lg:px-10">
                <MainHeading>Projects That I Have Done</MainHeading>
                <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm">
                    I learn by doing. <br />
                    In the past 5 years, I have done many projects.
                </p>
            </div>
            <div className="mx-auto w-full overflow-x-hidden overflow-y-visible">
                {projects.map((project, index) => (
                    <ProjectShowcase
                        key={index}
                        id={index + 1}
                        {...project}
                        alternate={index % 2 === 1}
                    />
                ))}
            </div>
            <div className="w-full mt-10">
                <AnimatedLink
                    href="/projects"
                    className="relative h-12 overflow-hidden rounded-full p-[2px] active:scale-95 duration-200 ease-[ease] mx-auto block w-48">
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-4 py-2 text-xl font-medium text-white backdrop-blur-3xl">
                        LOAD MORE
                    </span>
                </AnimatedLink>
            </div>
        </div>
    );
}

function DesktopMockup({ src, color }: { src: string; color: string }) {
    console.log(color);
    return (
        <div
            className="flex items-center justify-center h-full text-[0.4vw] max-md:text-[1.2vw] rounded-2xl"
            style={{ backgroundColor: color }}>
            <div className="w-[68.125em] py-12 overflow-hidden">
                <div className="relative w-[55.375em] h-[36em] bg-black rounded-t-[1.7em] mx-auto overflow-hidden">
                    {/* <!-- Camera (pseudo-element replacement) --> */}
                    <div className="absolute top-[0.5em] left-0 right-0 mx-auto w-[6em] h-[1.1em] bg-black rounded-b-[0.4em] z-[999]"></div>

                    {/* <!-- Light reflection effect (pseudo-element replacement) --> */}
                    <div className="absolute top-0 right-0 w-0 h-0 border-t-[28.125em] border-l-[18.75em] border-transparent border-t-[rgba(255,255,255,0.18)] z-[150]"></div>

                    <div
                        className="absolute top-[1.5%] left-[1%] w-[98%] h-[96%] rounded-t-[1.2em] bg-cover bg-no-repeat z-[100]"
                        style={{
                            backgroundImage: `url(${src})`,
                        }}></div>
                </div>

                <div className="relative w-[68.125em] h-[1.25em] bg-[#eff0f4]">
                    {/* <!-- Side gradients --> */}
                    <div className="absolute left-0 top-0 h-full w-[4em] bg-gradient-to-r from-[rgba(226,228,227,0.35)] via-[rgba(140,141,145,0.35)] to-[rgba(226,228,227,0.35)]"></div>
                    <div className="absolute right-0 top-0 h-full w-[4em] bg-gradient-to-r from-[rgba(226,228,227,0.35)] via-[rgba(140,141,145,0.35)] to-[rgba(226,228,227,0.35)]"></div>

                    {/* <!-- Indent --> */}
                    <div className="h-[0.75em] w-[10em] mx-auto bg-gradient-to-b from-[rgba(153,154,158,0.75)] to-[rgba(44,45,47,0.6)] rounded-b-[8em]"></div>
                </div>

                <div className="w-[68em] h-[0.55em] mx-auto bg-gradient-to-b from-[rgba(153,154,158,0.75)] to-[rgba(44,45,47,0.6)] rounded-b-[8em] shadow-[0_19px_38px_rgba(0,0,0,0.05),_0_15px_12px_rgba(0,0,0,0.05)]"></div>
            </div>
        </div>
    );
}
