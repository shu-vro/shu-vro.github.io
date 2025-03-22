"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MorphingText } from "../magicui/morphing-text";
import { cn } from "@/lib/utils";

export default function LoadingAnimation() {
    const [showText, setShowText] = useState(false);
    const [deleteText, setDeleteText] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setShowText(true), 4000);
        const timer2 = setTimeout(() => setDeleteText(true), 5000);
        return () => {
            clearTimeout(timer);
            clearTimeout(timer2);
        };
    }, []);
    return (
        <div className="fixed pointer-events-none top-0 left-0 w-full h-full flex flex-row z-999999">
            {Array(4)
                .fill(1)
                .map((_, i) => (
                    <div
                        className="w-full h-full flex justify-end items-center"
                        key={i}>
                        <motion.div
                            initial={{ scaleX: 1 }}
                            animate={{ scaleX: 0 }}
                            transition={{
                                duration: 2,
                                delay: i * 0.05 + 4,
                                ease: [0.16, 1, 0.3, 1],
                            }}
                            className="bg-[#fcf2f9] w-full h-full"
                            style={{ transformOrigin: "right" }}></motion.div>
                    </div>
                ))}

            {!deleteText && (
                <div className="w-full h-full flex justify-center items-center absolute top-0 left-0 z-999999 text-[#222020] font-[family-name:var(--font-butler)]">
                    <div className="h-30 w-full text-center overflow-hidden">
                        <div
                            className={cn(
                                "h-30 w-full text-center duration-1000",
                                showText && "animate-fadeOut"
                            )}>
                            <MorphingText
                                texts={["LOADING", "COMPLETED", "HI 👋🏻"]}
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
