"use client";

import { useEffect, useRef } from "react";
import { HyperText } from "./magicui/hyper-text";
import { NumberTicker } from "./magicui/number-ticker";
import { useInView, useAnimation, motion } from "motion/react";
import { cn } from "@/lib/utils";

export interface StatsTileProps extends React.HTMLAttributes<HTMLDivElement> {
    // Define any custom props for your component here
}

function StatsTile({ children, className, ...rest }: StatsTileProps) {
    return (
        <div
            className={cn(
                "rounded-(--radius) space-y-4 border py-8 max-md:py-4 font-bold flex flex-row justify-center items-center gap-2",
                className
            )}
            {...rest}>
            {children}
        </div>
    );
}

export default function StatsSection() {
    const mainControls = useAnimation();
    // const slideControls = useAnimation();

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        } else {
            mainControls.start("hidden");
        }
    }, [isInView, mainControls]);
    return (
        <motion.div
            ref={ref}
            variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            className="mx-auto max-w-6xl my-0 px-6 max-md:my-8 w-full"
            transition={{
                duration: 0.5,
                delay: 5,
            }}>
            <div className="grid gap-3 *:text-start sm:grid-cols-3">
                <StatsTile>
                    <div className="text-6xl m-0 max-md:text-4xl">
                        <HyperText
                            animateOnHover={false}
                            // delay={2000}
                            duration={1500}>
                            Jr.
                        </HyperText>
                    </div>
                    <p className="text-lg">
                        Professional <br /> Level
                    </p>
                </StatsTile>
                <StatsTile>
                    <div className="text-6xl m-0 max-md:text-4xl break-words">
                        <NumberTicker value={15} />+
                    </div>
                    <p className="text-xl">
                        Projects <br /> Done
                    </p>
                </StatsTile>
                <StatsTile>
                    <div className="text-6xl m-0 max-md:text-4xl break-words">
                        <NumberTicker value={3} />+
                    </div>
                    <p className="text-xl">
                        Years Of <br /> Experience
                    </p>
                </StatsTile>
            </div>
        </motion.div>
    );
}
