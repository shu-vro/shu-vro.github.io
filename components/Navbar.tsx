"use client";

import { ScrollCallback } from "lenis";
import { useLenis } from "lenis/react";
import React, { useEffect, useState } from "react";
import Logo from "./Logo";

export default function Navbar() {
    const lenis = useLenis();
    const [showNavbar, setShowNavbar] = useState(true);

    useEffect(() => {
        if (!lenis) return;
        let lastScroll = 0;
        const onScroll: ScrollCallback = ({ scroll }) => {
            // Compare current scroll with previous scroll position to determine direction
            if (scroll > lastScroll + 5) {
                // Scrolled down a bit
                setShowNavbar(false);
            } else if (scroll < lastScroll - 5) {
                // Scrolled up a bit
                setShowNavbar(true);
            }
            lastScroll = scroll;
        };

        lenis.on("scroll", onScroll);
        return () => {
            lenis.off("scroll", onScroll);
        };
    }, [lenis]);

    return (
        <nav
            className={`sticky top-0 left-0 right-0 z-50 transition-transform duration-300 bg-black/20 backdrop-blur-md ${
                showNavbar ? "translate-y-0" : "-translate-y-full"
            }`}>
            <div className="max-w-6xl mx-auto py-4 px-4 md:px-8 lg:px-10 h-15">
                <div className="flex justify-between items-center">
                    <div>
                        <a
                            href="#"
                            onClick={() => {
                                if (!lenis) return;
                                lenis.scrollTo(0);
                            }}>
                            <Logo />
                        </a>
                    </div>
                    <div>
                        <ul className="flex space-x-4">
                            <li>
                                <a
                                    href="#home"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        if (!lenis) return;
                                        lenis.scrollTo(0, {
                                            duration: 2,
                                        });
                                    }}
                                    className="text-neutral-900 dark:text-neutral-100">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        if (!lenis) return;
                                        lenis.scrollTo("#about", {
                                            duration: 2,
                                        });
                                    }}
                                    className="text-neutral-900 dark:text-neutral-100">
                                    About
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        if (!lenis) return;
                                        lenis.scrollTo("#projects", {
                                            duration: 2,
                                        });
                                    }}
                                    className="text-neutral-900 dark:text-neutral-100">
                                    Projects
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>
                                <a
                                    href="#"
                                    className="text-neutral-900 dark:text-neutral-100">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}
