"use client";
import React from "react";
import { SparklesCore } from "@components/ui/sparkles";
import { useMediaQuery } from "react-responsive";

export default function SparklesPreview() {
    const prefersReducedMotion = useMediaQuery({
        query: "(prefers-reduced-motion: no-preference)",
    });
    return (
        false && (
            <div className="w-full absolute inset-0 pointer-events-none select-none">
                <SparklesCore
                    background="transparent"
                    minSize={0.6}
                    maxSize={1.4}
                    particleDensity={0.5}
                    className="w-full h-full"
                    particleColor="#FFFFFF"
                    particleSize={2}
                />
            </div>
        )
    );
}
