import React from "react";
import ButtonFancy from "./ui/ButtonFancy";
import { AuroraText } from "./magicui/aurora-text";
import { IoLogoGithub } from "react-icons/io5";
import { RiLinkedinFill } from "react-icons/ri";
import { BiLogoGmail } from "react-icons/bi";
import { AnimatedGridPattern } from "./magicui/animated-grid-pattern";
import { cn } from "@/lib/utils";
import { Spotlight } from "./ui/spotlight-new";
import StatsSection from "./stats";
import { BoxReveal } from "./magicui/box-reveal";

export default function Hero() {
    return (
        <div className="relative w-full h-full mx-auto rounded-md" id="home">
            <Spotlight />
            <AnimatedGridPattern
                numSquares={30}
                maxOpacity={0.1}
                duration={3}
                repeatDelay={1}
                className={cn(
                    "[mask-image:radial-gradient(700px_circle_at_center,white,transparent)]",
                    "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12 absolute"
                )}
            />
            <div className="h-[calc(100vh-60px-126px)] max-md:h-auto flex items-center justify-start max-md:items-start flex-row w-full max-w-6xl mx-auto">
                <div className="w-full px-12 max-md:mt-12">
                    <BoxReveal delay={4.5}>
                        <h1 className="w-full text-4xl md:text-6xl lg:text-7xl font-bold flex flex-row justify-start gap-6 max-[400px]:flex-col max-[400px]:gap-0">
                            <span>Hi, I'm</span>
                            <span>Shirshen</span>
                            {/* <SparklesText text="Shirshen" /> */}
                        </h1>
                    </BoxReveal>
                    <BoxReveal delay={4.75}>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter flex flex-row justify-start items-start max-md:flex-col gap-6 max-md:gap-0">
                            <AuroraText
                                colors={[
                                    "#00FF87",
                                    "#60EFFF",
                                    "#60efff",
                                    "#60EFFF",
                                    "#00FF87",
                                    "#ff1b6b",
                                ]}>
                                Full Stack
                            </AuroraText>
                            <AuroraText
                                colors={[
                                    "#1e90ff",
                                    "#A020F0",
                                    "#1e90ff",
                                    "#A020F0",
                                    "#1e90ff",
                                    "#A020F0",
                                ]}>
                                Developer
                            </AuroraText>
                        </h1>
                    </BoxReveal>
                    <div className="font-bold text-start text-xl my-6">
                        <BoxReveal delay={4.85}>
                            <span>
                                I'm a full stack developer with a passion for
                                creating{" "}
                            </span>
                        </BoxReveal>
                        {/* <br /> */}
                        <BoxReveal delay={5.1}>
                            <span>
                                beautiful and functional web applications.{" "}
                            </span>
                        </BoxReveal>
                    </div>

                    <BoxReveal delay={5.25}>
                        <div className="flex flex-row gap-2 mt-4 justify-start">
                            <ButtonFancy>Download CV</ButtonFancy>
                            <a
                                href="https://github.com/shu-vro"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-2xl">
                                <ButtonFancy as="span" className="px-2">
                                    <IoLogoGithub />
                                    <span className="sr-only">GitHub</span>
                                </ButtonFancy>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/shirshen"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-2xl">
                                <ButtonFancy as="span" className="px-2">
                                    <RiLinkedinFill />
                                    <span className="sr-only">LinkedIn</span>
                                </ButtonFancy>
                            </a>
                            <a
                                href="mailto:official.shirshen@gmail.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-2xl">
                                <ButtonFancy as="span" className="px-2">
                                    <BiLogoGmail />
                                    <span className="sr-only">Mail</span>
                                </ButtonFancy>
                            </a>
                        </div>
                    </BoxReveal>
                </div>
            </div>

            <StatsSection />
            {/* </Vortex> */}
        </div>
    );
}
