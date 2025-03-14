"use client";

import { useLenis } from "lenis/react";
import React from "react";

export default function Navbar() {
    const lenis = useLenis();
    return (
        <nav>
            <div className="max-w-7xl mx-auto py-4 px-4 md:px-8 lg:px-10 h-15">
                <div className="flex justify-between items-center">
                    <div>
                        <a
                            href="#"
                            onClick={() => {
                                if (!lenis) return;
                                lenis.scrollTo(0);
                            }}
                            className="text-lg font-bold text-neutral-900 dark:text-neutral-100">
                            Shirshen
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
