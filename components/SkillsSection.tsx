import React from "react";
import { Marquee } from "./magicui/marquee";
import { AnimatedTooltip } from "./ui/animated-tooltip";

const marqueeItems1 = [
    {
        name: "Next.js",
        url: "https://img.icons8.com/?size=100&id=MWiBjkuHeMVq&format=png&color=ffffff",
    },
    {
        name: "React",
        url: "https://icon.icepanel.io/Technology/svg/React.svg",
    },
    {
        name: "JavaScript",
        url: "https://icon.icepanel.io/Technology/svg/JavaScript.svg",
    },
    {
        name: "TypeScript",
        url: "https://icon.icepanel.io/Technology/svg/TypeScript.svg",
    },
    {
        name: "Python",
        url: "https://icon.icepanel.io/Technology/svg/Python.svg",
    },
    {
        name: "HTML",
        url: "https://icon.icepanel.io/Technology/svg/HTML5.svg",
    },
    {
        name: "CSS",
        url: "https://icon.icepanel.io/Technology/svg/CSS3.svg",
    },
    {
        name: "MarkDown",
        url: "https://img.icons8.com/?size=100&id=21831&format=png&color=000000",
    },
    {
        name: "Flutter",
        url: "https://icon.icepanel.io/Technology/svg/Flutter.svg",
    },
    {
        name: "Vue",
        url: "https://icon.icepanel.io/Technology/svg/Vue.js.svg",
    },
    {
        name: "Jquery",
        url: "https://icon.icepanel.io/Technology/svg/jQuery.svg",
    },
    {
        name: "Three.js",
        url: "https://canada1.discourse-cdn.com/flex035/uploads/threejs/original/2X/b/be2f75f72751c11cbe1593c69a99a52900bf12cb.svg",
    },
    {
        name: "MUI",
        url: "https://icon.icepanel.io/Technology/svg/Material-UI.svg",
    },
    {
        name: "ShadcnUI",
        url: "https://images.seeklogo.com/logo-png/51/1/shadcn-ui-logo-png_seeklogo-519786.png",
    },
    {
        name: "TailwindCSS",
        url: "https://icon.icepanel.io/Technology/svg/Tailwind-CSS.svg",
    },
];

const marqueeItems2 = [
    {
        name: "Node.js",
        url: "https://icon.icepanel.io/Technology/svg/Node.js.svg",
    },
    {
        name: "Express.js",
        url: "https://img.icons8.com/?size=100&id=kg46nzoJrmTR&format=png&color=ffffff",
    },
    {
        name: "Jwt",
        url: "https://img.icons8.com/?size=100&id=rHpveptSuwDz&format=png&color=000000",
    },
    {
        name: "Graphql",
        url: "https://icon.icepanel.io/Technology/svg/GraphQL.svg",
    },
    {
        name: "Firebase",
        url: "https://img.icons8.com/?size=100&id=62452&format=png&color=000000",
    },
    {
        name: "AppWrite",
        url: "https://icon.icepanel.io/Technology/svg/Appwrite.svg",
    },
    {
        name: "MongoDB",
        url: "https://icon.icepanel.io/Technology/svg/MongoDB.svg",
    },
    {
        name: "Supabase",
        url: "https://img.icons8.com/?size=100&id=sH0rW2TvYdr9&format=png&color=000000",
    },
    {
        name: "PostgresQl",
        url: "https://icon.icepanel.io/Technology/svg/PostgresSQL.svg",
    },
    {
        name: "MySql",
        url: "https://icon.icepanel.io/Technology/svg/MySQL.svg",
    },
    {
        name: "Redis",
        url: "https://icon.icepanel.io/Technology/svg/Redis.svg",
    },
    {
        name: "ElasticSearch",
        url: "https://icon.icepanel.io/Technology/png-shadow-512/Elastic-Search.png",
    },
    {
        name: "Git",
        url: "https://icon.icepanel.io/Technology/svg/Git.svg",
    },
    {
        name: "Github",
        url: "https://img.icons8.com/?size=100&id=efFfwotdkiU5&format=png&color=000000",
    },
    {
        name: "Vercel",
        url: "https://logowik.com/content/uploads/images/vercel1868.jpg",
    },
    {
        name: "Netlify",
        url: "https://img.icons8.com/?size=100&id=YsPdguLCFOMH&format=png&color=000000",
    },
    {
        name: "Docker",
        url: "https://img.icons8.com/?size=100&id=cdYUlRaag9G9&format=png&color=000000",
    },
];

const marqueeItems3 = [
    {
        name: "Tensorflow",
        url: "https://icon.icepanel.io/Technology/svg/TensorFlow.svg",
    },
    {
        name: "Pytorch",
        url: "https://icon.icepanel.io/Technology/svg/PyTorch.svg",
    },
    {
        name: "Opencv",
        url: "https://icon.icepanel.io/Technology/svg/OpenCV.svg",
    },
    {
        name: "Pandas",
        url: "https://icon.icepanel.io/Technology/png-shadow-512/Pandas.png",
    },
    {
        name: "Numpy",
        url: "https://icon.icepanel.io/Technology/svg/NumPy.svg",
    },
    {
        name: "SkLearn",
        url: "https://icon.icepanel.io/Technology/svg/scikit-learn.svg",
    },
    {
        name: "Jupyter",
        url: "https://icon.icepanel.io/Technology/png-shadow-512/Jupyter.png",
    },
    {
        name: "NPM",
        url: "https://icon.icepanel.io/Technology/svg/NPM.svg",
    },
    {
        name: "Bun",
        url: "https://icon.icepanel.io/Technology/svg/Bun.svg",
    },
    {
        name: "Fedora",
        url: "https://icon.icepanel.io/Technology/svg/Fedora.svg",
    },
    {
        name: "Webpack",
        url: "https://icon.icepanel.io/Technology/svg/Webpack.svg",
    },
];

export default function SkillsSection() {
    return (
        <>
            <div className="max-w-6xl mx-auto py-20 pb-10 px-4 md:px-8 lg:px-10">
                <h2
                    className="text-4xl mb-4 text-black dark:text-white max-w-4xl"
                    tabIndex={0}>
                    My Tech Stack
                </h2>
                <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-md">
                    My expertise spans a diverse range of <br /> technologies
                    enabling me to deliver comprehensive and cutting-edge
                    solutions across various platforms.
                </p>
            </div>
            <div className="relative flex max-w-6xl w-full mx-auto flex-col items-center justify-center overflow-x-hidden overflow-y-visible">
                <div className="h-32 flex flex-col">
                    <div className="grow" />
                    <Marquee pauseOnHover className="[--duration:20s]">
                        {marqueeItems1.map((item) => (
                            <Badge
                                key={item.name}
                                name={item.name}
                                icon={
                                    <img
                                        src={item.url}
                                        alt={item.name}
                                        className="w-16 max-md:w-10"
                                    />
                                }
                            />
                        ))}
                    </Marquee>
                </div>
                <Marquee pauseOnHover reverse className="[--duration:20s]">
                    {marqueeItems2.map((item) => (
                        <Badge
                            key={item.name}
                            name={item.name}
                            icon={
                                <img
                                    src={item.url}
                                    alt={item.name}
                                    className="w-16 max-md:w-10"
                                />
                            }
                        />
                    ))}
                </Marquee>
                <Marquee pauseOnHover className="[--duration:30s]">
                    {marqueeItems3.map((item) => (
                        <Badge
                            key={item.name}
                            name={item.name}
                            icon={
                                <img
                                    src={item.url}
                                    alt={item.name}
                                    className="w-16 max-md:w-10"
                                />
                            }
                        />
                    ))}
                </Marquee>
                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
            </div>
        </>
    );
}

function Badge({ icon, name }: { icon: React.ReactElement; name: string }) {
    // return (
    //     <div className="flex items-center gap-2">
    //         {icon} <span className="sr-only">{name}</span>
    //     </div>
    // );
    return (
        <div className="shrink-0 mx-1">
            <AnimatedTooltip
                items={[
                    {
                        id: 1,
                        name,
                        icon,
                    },
                ]}
            />
        </div>
    );
}
