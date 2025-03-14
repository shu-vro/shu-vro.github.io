import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import Chip from "./ui/custom-chip";

function CommonImageComponent({ src, ...rest }: { src: string }) {
    return (
        <Image
            src={src || "sadff"}
            alt="cards template"
            width={500}
            height={500}
            {...rest}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
        />
    );
}

export default function TimelineBase() {
    const data = [
        {
            title: "2023",
            content: (
                <div>
                    <p className="text-neutral-800 dark:text-neutral-200 text-lg md:text-2xl font-normal mb-8">
                        Earned a place in the Computer Science and Engineering
                        (CSE) department at{" "}
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.ruet.ac.bd/"
                            className="text-blue-500">
                            Rajshahi University of Engineering & Technology
                            (RUET)
                        </a>
                        , marking a significant milestone in my academic journey
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-neutral-700 dark:text-neutral-300 mb-8">
                        <li>
                            Secured admission through rigorous preparation and
                            competitive exams
                        </li>
                        <li>
                            Stepped into a dynamic learning environment focused
                            on computing and innovation
                        </li>
                        <li>
                            Strengthened problem-solving and analytical thinking
                            skills
                        </li>
                        <li>
                            Gained exposure to core computer science concepts
                            and engineering principles
                        </li>
                        <li>
                            Began collaborating with peers on projects and
                            technical challenges
                        </li>
                        <li>
                            Laid the foundation for advanced studies in
                            algorithms, software development, and AI
                        </li>
                        <li>
                            Opened doors to research, internships, and career
                            opportunities in the tech industry
                        </li>
                        <li>
                            Started exploring artificial intelligence and
                            machine learning
                        </li>
                    </ul>

                    <div className="flex flex-row gap-2 mt-4 justify-start items-center flex-wrap">
                        <Chip>RUET</Chip>
                        <Chip>CSE</Chip>
                        <Chip>EngineeringLife</Chip>
                        <Chip>AIAndML</Chip>
                    </div>
                </div>
            ),
        },
        {
            title: "2022",
            content: (
                <div>
                    <p className="text-neutral-800 dark:text-neutral-200 text-lg md:text-2xl font-normal mb-4">
                        Achieved a CGPA of 5.00 out of 5.00, demonstrating
                        strong academic performance
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-neutral-700 dark:text-neutral-300">
                        <li>
                            Strengthened problem-solving and analytical thinking
                            skills
                        </li>
                        <li>Built a disciplined and goal-oriented mindset</li>
                        <li>
                            Laid a solid foundation for higher education in
                            computer science
                        </li>
                        <li>
                            Gained in-depth knowledge of mathematics, physics,
                            and programming concepts
                        </li>
                        <li>
                            Developed a keen interest in technology and
                            innovation
                        </li>
                        <li>
                            Enhanced time management and self-learning abilities
                        </li>
                        <li>
                            Prepared for competitive exams and future academic
                            challenges
                        </li>
                    </ul>

                    <div className="flex flex-row gap-2 mt-4 justify-start items-center flex-wrap">
                        <Chip>Mathematics</Chip>
                        <Chip>Physics</Chip>
                        <Chip>IT</Chip>
                        <Chip>Chemistry</Chip>
                    </div>
                </div>
            ),
        },
        {
            title: "2021",
            content: (
                <div>
                    <p className="text-neutral-800 dark:text-neutral-200 text-lg md:text-2xl font-normal mb-4">
                        Started actively developing web projects while diving
                        into competitive programming
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-neutral-700 dark:text-neutral-300">
                        <li>
                            Built real-world projects, applying frontend and
                            backend development skills
                        </li>
                        <li>
                            Learned and practiced Next.js, making it a core part
                            of my tech stack
                        </li>
                        <li>
                            Gained experience with Vue, PHP, and MySQL, with
                            MySQL remaining in use
                        </li>
                        <li>
                            Improved problem-solving abilities through
                            competitive programming
                        </li>
                        <li>
                            Developed a deeper understanding of full-stack
                            development principles
                        </li>
                        <li>
                            Built optimized and scalable web applications with
                            best practices
                        </li>
                        <li>
                            Gained experience working with APIs, authentication,
                            and databases
                        </li>
                        <li>
                            Learned how to debug efficiently and write cleaner,
                            maintainable code
                        </li>
                        <li>
                            Improved coding speed and accuracy through regular
                            competitive programming challenges
                        </li>
                        <li>
                            Started exploring advanced JavaScript concepts and
                            performance optimization techniques
                        </li>
                        <li>
                            Strengthened logical reasoning and structured
                            thinking through algorithmic problem-solving
                        </li>
                    </ul>
                    <div className="flex flex-row gap-2 mt-4 justify-start items-center flex-wrap">
                        <Chip>#WebDevelopment</Chip>
                        <Chip>#NextJS</Chip>
                        <Chip>#FullStack</Chip>
                        <Chip>#CompetitiveProgramming</Chip>
                        <Chip>#ProblemSolving</Chip>
                        <Chip>#AlgorithmDesign</Chip>
                        <Chip>#MySQL</Chip>
                        <Chip>#FrontendDevelopment</Chip>
                        <Chip>#BackendDevelopment</Chip>
                        <Chip>#APIs</Chip>
                        <Chip>#CleanCode</Chip>
                        <Chip>#ScalableApps</Chip>
                        <Chip>#Debugging</Chip>
                        <Chip>#CodeOptimization</Chip>
                        <Chip>#JavaScript</Chip>
                        <Chip>#ReactJS</Chip>
                        <Chip>#ProgrammingChallenges</Chip>
                        <Chip>#DatabaseManagement</Chip>
                        <Chip>#CSFundamentals</Chip>
                    </div>
                </div>
            ),
        },
        {
            title: "Early 2020",
            content: (
                <div>
                    <p className="text-neutral-800 dark:text-neutral-200 text-lg md:text-2xl font-normal mb-4">
                        Began my journey as a web developer, turning ideas into
                        interactive digital experiences
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-neutral-700 dark:text-neutral-300">
                        <li>Explored HTML, CSS, and JavaScript fundamentals</li>
                        <li>
                            Built my first projects, enhancing problem-solving
                            skills
                        </li>
                        <li>
                            Developed a passion for creating dynamic and
                            user-friendly web applications
                        </li>
                        <li>
                            Learned modern frameworks like React.js and Next.js
                        </li>
                        <li>
                            Gained experience in backend development with
                            Node.js and databases
                        </li>
                    </ul>

                    <div className="flex flex-row gap-2 mt-4 justify-start items-center flex-wrap">
                        <Chip>Programming</Chip>
                        <Chip>Web</Chip>
                        <Chip>React</Chip>
                        <Chip>Problem Solving</Chip>
                    </div>
                </div>
            ),
        },
    ];
    return (
        <div className="w-full">
            <Timeline data={data} />
        </div>
    );
}
