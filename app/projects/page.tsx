import AnimationEntry from "@/components/LoadingAnimation/animation-entry";
import AnimationExit from "@/components/LoadingAnimation/animation-exit";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import { AnimationExitProvider } from "@/contexts/AnimationExitContext";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
    title: "Projects",
    description: "Projects",
};

export default function Page() {
    return (
        <div>
            <AnimationExitProvider>
                <Navbar />
                <Projects />
                <AnimationEntry />
                <AnimationExit />
            </AnimationExitProvider>
        </div>
    );
}
