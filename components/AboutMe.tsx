"use client";

import React from "react";
import Chip from "./ui/custom-chip";
import { IoCodeSlash } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { GrLocation } from "react-icons/gr";
import { FaRegClock } from "react-icons/fa";
import ButtonFancy from "./ui/ButtonFancy";
import { useLenis } from "lenis/react";

const AboutMe = () => {
    const lenis = useLenis();
    return (
        <section
            className="max-w-6xl mx-auto py-16 px-4 md:px-8 lg:px-10"
            id="about">
            <h2 className="text-4xl my-20 text-black dark:text-white max-w-4xl">
                ABOUT ME
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Left column - Personal Info */}
                <div>
                    <h2
                        tabIndex={0}
                        className="text-4xl mb-4 text-black dark:text-white max-w-4xl">
                        Hi, I'm{" "}
                        <span className="text-purple-500">Shirshen</span>
                    </h2>

                    <div className="space-y-4 mb-8">
                        <div className="flex items-center gap-3">
                            <GrLocation className="text-xl text-purple-500" />
                            <span>
                                Based in{" "}
                                <span className="text-purple-500">
                                    Bangladesh
                                </span>
                            </span>
                        </div>

                        <div className="flex items-center gap-3">
                            <FaRegClock className="text-xl text-purple-500" />
                            <span>
                                <span className="text-purple-500">
                                    Full-time
                                </span>{" "}
                                Developer
                            </span>
                        </div>

                        <div className="flex items-center gap-3">
                            <IoCodeSlash className="text-xl text-purple-500" />
                            <span>
                                <span className="text-purple-500">
                                    Full Stack
                                </span>{" "}
                                Developer
                            </span>
                        </div>

                        <div className="flex items-center gap-3">
                            <SlCalender className="text-xl text-purple-500" />
                            <span>
                                <span className="text-purple-500">
                                    3+ Years
                                </span>{" "}
                                of work Experience
                            </span>
                        </div>
                    </div>

                    <p className="text-gray-700 dark:text-gray-300">
                        As a dedicated developer, I bring precision and creative
                        innovation to every project. I specialize in creating
                        robust, scalable web applications that combine
                        cutting-edge technology with intuitive user experiences.
                    </p>

                    <div className="mt-8 flex gap-4">
                        <a
                            href="#contact"
                            onClick={() => {
                                if (!lenis) return;
                                lenis.scrollTo("#contact", { duration: 2 });
                            }}>
                            <ButtonFancy as="span" className="border-0">
                                Get in Touch
                            </ButtonFancy>
                        </a>
                        <a
                            href="#projects"
                            onClick={() => {
                                if (!lenis) return;
                                lenis.scrollTo("#projects", { duration: 2 });
                            }}
                            className="border border-white/25 px-4 py-2 transition-colors rounded-full">
                            View Projects
                        </a>
                    </div>
                </div>

                {/* Right column - Skills & Services */}
                <div>
                    <div className="mb-10">
                        <h3 className="text-2xl mb-5">Key Skills</h3>
                        <div className="flex flex-wrap gap-3">
                            {[
                                "React",
                                "TypeScript",
                                "Next.js",
                                "TailwindCSS",
                                "C#",
                                "C++",
                                "Python",
                                "MachineLearning",
                            ].map((skill) => (
                                <Chip key={skill} className="text-lg">
                                    {skill}
                                </Chip>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-2xl mb-5">Services</h3>
                        <ul className="space-y-3">
                            {[
                                "Full Stack Development",
                                "Specialized in AI",
                                "Web Design & Development",
                                "Automation & Scripting",
                            ].map((service) => (
                                <li
                                    key={service}
                                    className="flex items-center gap-2">
                                    <span className="text-purple-500">→</span>
                                    <span>{service}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
