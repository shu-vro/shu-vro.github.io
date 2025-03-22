"use client";
import React from "react";
import Chip from "./ui/custom-chip";

export default function Projects() {
    return (
        <div className="min-h-screen py-20 w-full" id="projects">
            <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
                <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl">
                    Projects That I Have Done
                </h2>
                <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm">
                    I learn by doing. <br />
                    In the past 5 years, I have done many projects.
                </p>
            </div>
            {/* <LayoutGrid cards={cards} /> */}
            <div className="max-w-7xl mx-auto">
                <ProjectShowcase
                    id={1}
                    year="2021"
                    title="Startup 1"
                    description="A startup landing page template for a SaaS business."
                    tags={["React", "Tailwind CSS", "Framer Motion"]}
                    imageUrl="https://aceternity.com/cdn-cgi/image/width=640/https://assets.aceternity.com/templates/startup-1.webp"
                    projectLink="https://aceternity.com/templates/startup-1"
                />
            </div>
        </div>
    );
}

interface ProjectShowcaseProps {
    year: string;
    title: string;
    description: string;
    tags: string[];
    imageUrl: string;
    projectLink: string;
    id: number;
}

const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({
    year,
    title,
    description,
    tags,
    imageUrl,
    projectLink,
}) => {
    // const className = "before"
    return (
        <div className="flex flex-col md:flex-row items-center p-6 md:p-12 rounded-2xl shadow-lg">
            <div className="w-full md:w-1/2 lg:w-2/5 space-y-4">
                <div className="text-md uppercase tracking-wide text-gray-400 flex flex-row justify-start items-center gap-2">
                    <span>Creative Development</span>{" "}
                    <div className="w-2 h-2 rounded-full bg-red-500"></div>{" "}
                    <span>{year}</span>
                </div>
                <h2 className="text-7xl font-extralight">{title}</h2>
                <p className="text-gray-400">{description}</p>
                <div className="flex space-x-2">
                    {tags.map((tag, index) => (
                        <Chip key={index}>#{tag}</Chip>
                    ))}
                </div>
                <a
                    href={projectLink}
                    className="inline-block bg-white text-black px-5 py-2 rounded-lg font-medium hover:bg-gray-200 transition">
                    View Project →
                </a>
                <a
                    href={projectLink}
                    className="ml-2 inline-block bg-white text-black px-5 py-2 rounded-lg font-medium hover:bg-gray-200 transition">
                    Github Link →
                </a>
            </div>
            <div className="w-full md:w-1/2 lg:w-3/5 flex justify-center mt-6 md:mt-0">
                <img
                    src={imageUrl}
                    alt={title}
                    className="rounded-lg shadow-lg w-full transition-all brightness-100 hover:brightness-50"
                />
            </div>
        </div>
    );
};
