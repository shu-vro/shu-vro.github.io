"use client";

import React, { useEffect, useRef } from "react";
import styles from "./cursor-styles.module.css";

export default function CustomCursor() {
    const dotRef = useRef<HTMLDivElement>(null);
    const circleRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        // detect if the user is using a touch device
        const isTouchDevice = "ontouchstart" in window;
        if (isTouchDevice) {
            return;
        }
        const mouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;

            dotRef.current?.animate(
                {
                    left: clientX + "px",
                    top: clientY + "px",
                },
                {
                    duration: 0,
                    fill: "both",
                }
            );
            circleRef.current?.animate(
                {
                    left: clientX + "px",
                    top: clientY + "px",
                },
                {
                    duration: 1000,
                    fill: "both",
                }
            );

            // detect if there is a link or button underneat the cursor
            const isLink = (e.target as HTMLElement).closest("a");
            const isButton = (e.target as HTMLElement).closest("button");
            if (isLink || isButton) {
                dotRef.current?.classList.add(styles["cursor-dot--hover"]);
                circleRef.current?.classList.add(
                    styles["cursor-circle--hover"]
                );
            }
            if (!isLink && !isButton) {
                dotRef.current?.classList.remove(styles["cursor-dot--hover"]);
                circleRef.current?.classList.remove(
                    styles["cursor-circle--hover"]
                );
            }
        };
        window.addEventListener("mousemove", mouseMove);
        return () => {
            window.removeEventListener("mousemove", mouseMove);
        };
    }, []);

    return (
        <>
            <div className={styles["cursor-dot"]} ref={dotRef} />
            <div className={styles["cursor-circle"]} ref={circleRef} />
        </>
    );
}
