import React from "react";
import Navbar from "@/components/Navbar";
import { Fleur_De_Leah } from "next/font/google";
import { cn } from "@/lib/utils";
import AnimationEntry from "@/components/LoadingAnimation/animation-entry";

const font = Fleur_De_Leah({
    variable: "--fancy-variable",
    weight: ["400"],
    subsets: ["latin"],
});

export default function Page() {
    return (
        <div className="flex flex-col items-start justify-start min-h-[calc(100vh-24rem)]">
            <div className="w-full">
                <Navbar />
            </div>
            <div
                className={cn(
                    "w-full grow flex items-center justify-center text-[10vw]",
                    font.className
                )}>
                Thank You for <br />
                Reaching out! ❤️
            </div>
            <AnimationEntry />
        </div>
    );
}
