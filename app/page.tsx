import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import SkillsSection from "@/components/SkillsSection";
import TimelineBase from "@/components/TimelineBase";
import AboutMe from "@/components/AboutMe";
import { Metadata } from "next";
import AnimationExit from "@/components/LoadingAnimation/animation-exit";
import { AnimationExitProvider } from "@/contexts/AnimationExitContext";
import LoadingAnimation from "@/components/LoadingAnimation";

export default function Home() {
    return (
        <div>
            <AnimationExitProvider>
                <Navbar />
                <Hero />
                <AboutMe />
                <TimelineBase />
                <Projects />
                <SkillsSection />
                <Contact />
                <AnimationExit />
            </AnimationExitProvider>
            <LoadingAnimation />
        </div>
    );
}

export const metadata: Metadata = {
    title: "Shirshen",
    description: "Shirshen's Portfolio",
};
