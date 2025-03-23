import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import SkillsSection from "@/components/SkillsSection";
import TimelineBase from "@/components/TimelineBase";
import { Metadata } from "next";

export default function Home() {
    return (
        <div>
            <Navbar />
            <Hero />
            <TimelineBase />
            <Projects />
            <SkillsSection />
        </div>
    );
}

export const metadata: Metadata = {
    title: "Shirshen",
    description: "Shirshen's Portfolio",
};
