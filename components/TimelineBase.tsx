import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import Chip from "./ui/custom-chip";
import timelne from "@/template/timeline.json";

export default function TimelineBase() {
    const data = timelne.map((item) => ({
        title: item.title,
        content: (
            <div>
                <h4 className="text-neutral-800 dark:text-neutral-200 text-xl md:text-3xl font-normal mb-8">
                    {item.description}
                </h4>
                <ul className="list-disc list-inside space-y-1 text-neutral-700 dark:text-neutral-300 mb-8">
                    {item.specs.map((spec) => (
                        <li key={spec}>{spec}</li>
                    ))}
                </ul>
                <div className="flex flex-row gap-2 mt-4 justify-start items-center flex-wrap">
                    {item.tags.map((tag) => (
                        <Chip key={tag}>{tag}</Chip>
                    ))}
                </div>
            </div>
        ),
    }));
    return (
        <div className="w-full">
            <Timeline data={data} />
        </div>
    );
}
