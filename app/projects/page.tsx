import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
    title: "Projects",
    description: "Projects",
};

export default function Page() {
    return (
        <div>
            <Navbar />
            <Projects />
        </div>
    );
}
