import React from "react";
import ButtonFancy from "./ui/ButtonFancy";
import { AuroraText } from "./magicui/aurora-text";
import { SparklesText } from "./magicui/sparkles-text";
import { IoLogoGithub } from "react-icons/io5";
import { RiLinkedinFill } from "react-icons/ri";
import { BiLogoGmail } from "react-icons/bi";
import { AnimatedGridPattern } from "./magicui/animated-grid-pattern";
import { cn } from "@/lib/utils";

export default function Hero() {
    return (
        <div className="w-full mx-auto rounded-md  h-screen overflow-hidden">
            <AnimatedGridPattern
                numSquares={30}
                maxOpacity={0.1}
                duration={3}
                repeatDelay={1}
                className={cn(
                    "[mask-image:radial-gradient(700px_circle_at_center,white,transparent)]",
                    "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
                )}
            />
            {/* <div className="w-full absolute inset-0 h-screen -z-10">
                <SparklesCore
                    id="tsparticlesfullpage"
                    background="transparent"
                    minSize={0.6}
                    maxSize={1.4}
                    particleDensity={100}
                    className="w-full h-full"
                    particleColor="#FFFFFF"
                />
            </div> */}
            {/* <Vortex
                backgroundColor="black"
                rangeY={800}
                particleCount={500}
                baseHue={120}
                rangeSpeed={0.5}
                className="flex items-center justify-between flex-row px-2 md:px-10  py-4 w-full h-full"> */}
            <div className="h-screen flex items-center justify-between flex-row max-md:flex-col px-2 md:px-10 py-4 w-full">
                <div className="w-full z-10">
                    <h1 className="w-full text-[clamp(3.75rem,5vw,5.813rem)] font-bold flex flex-row justify-center gap-6">
                        <span>Hi, I'm</span> <SparklesText text="Shirshen" />
                    </h1>
                    <h1 className="text-[clamp(3.75rem,5vw+3rem,5.813rem)] font-bold tracking-tighter flex flex-row justify-center gap-6">
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
                    <p className="font-bold text-center">
                        I'm a full stack developer with a passion for creating{" "}
                        <br />
                        beautiful and functional web applications.
                    </p>
                    <div className="flex flex-row gap-2 mt-4 justify-center">
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
                            href="mail:official.shirshen@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-2xl">
                            <ButtonFancy as="span" className="px-2">
                                <BiLogoGmail />
                                <span className="sr-only">Mail</span>
                            </ButtonFancy>
                        </a>
                    </div>
                </div>
            </div>
            {/* </Vortex> */}
        </div>
    );
}
