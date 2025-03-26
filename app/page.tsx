import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import SkillsSection from "@/components/SkillsSection";
import TimelineBase from "@/components/TimelineBase";
import AboutMe from "@/components/AboutMe";
import { Metadata } from "next";

export default function Home() {
    return (
        <div>
            <Navbar />
            <Hero />
            <AboutMe />
            <TimelineBase />
            <Projects />
            <SkillsSection />
            <Contact />
        </div>
    );
}

export const metadata: Metadata = {
    title: "Shirshen",
    description: "Shirshen's Portfolio",
};
