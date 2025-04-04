"use client";

import { motion } from "motion/react";

export default function AnimationEntry() {
    return (
        <div className="fixed pointer-events-none top-0 left-0 w-full h-full flex flex-row z-999999 max-sm:flex-col">
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
                                duration: 3,
                                delay: i * 0.05 + 1,
                                ease: [0.16, 1, 0.3, 1],
                            }}
                            className="bg-[#fcf2f9] w-full h-full"
                            style={{ transformOrigin: "right" }}></motion.div>
                    </div>
                ))}
        </div>
    );
}
