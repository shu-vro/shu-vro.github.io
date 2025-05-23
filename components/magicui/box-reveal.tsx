"use client";

import { motion, useAnimation, useInView } from "motion/react";
import React, { useEffect, useRef } from "react";

interface BoxRevealProps {
    children: React.JSX.Element;
    width?: "fit-content" | "100%";
    boxColor?: string;
    duration?: number;
    delay?: number;
}

export const BoxReveal = ({
    children,
    width = "fit-content",
    boxColor = "#fcf2f9",
    duration,
    delay,
}: BoxRevealProps) => {
    const mainControls = useAnimation();
    const slideControls = useAnimation();

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            slideControls.start("visible");
            mainControls.start("visible");
        } else {
            slideControls.start("hidden");
            mainControls.start("hidden");
        }
    }, [isInView, mainControls, slideControls]);

    return (
        <div
            ref={ref}
            style={{ position: "relative", width, overflow: "hidden" }}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{
                    duration: duration ? duration : 2,
                    delay: 0.25 + (delay || 0),
                    ease: [0.16, 1, 0.3, 1],
                }}>
                {children}
            </motion.div>

            <motion.div
                variants={{
                    hidden: { left: 0 },
                    visible: { left: "100%" },
                }}
                initial="hidden"
                animate={slideControls}
                transition={{
                    duration: duration ? duration : 0.5,
                    ease: "easeIn",
                    delay: delay || 0,
                }}
                style={{
                    position: "absolute",
                    top: 4,
                    bottom: 4,
                    left: 0,
                    right: 0,
                    zIndex: 20,
                    background: boxColor,
                }}
            />
        </div>
    );
};
