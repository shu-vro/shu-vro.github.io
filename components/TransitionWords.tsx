"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

let words = [
    "Hello",
    "নমস্কার",
    "Bonjour",
    "Hola",
    "Ciao",
    "नमस्ते",
    "こんにちは",
];

export default function TransitionWords() {
    const [isVisible, setIsVisible] = useState(true);
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter((prev) => (prev + 1) % words.length);
        }, 3000 / words.length);

        const timer = setTimeout(() => {
            clearInterval(interval);
            setIsVisible(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <motion.div
            className="w-full h-screen flex justify-center items-center overflow-hidden"
            initial={{ height: "0vh" }}
            animate={{ height: isVisible ? "100vh" : "0vh" }}
            transition={{ duration: 1, ease: "easeInOut" }}>
            <div className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-4 py-2 text-2xl max-md:text-lg font-medium text-white backdrop-blur-3xl">
                    <div className="w-3 h-3 rounded-full bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] mr-2"></div>
                    {words[counter]}
                </span>
            </div>
        </motion.div>
    );
}
