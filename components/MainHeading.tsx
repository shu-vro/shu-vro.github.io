import React from "react";
import { PointerHighlight } from "./ui/pointer-highlight";
import { cn } from "@/lib/utils";

type Props = {
    children: React.ReactNode;
    className?: string;
} & React.ComponentProps<"h1">;

export default function MainHeading({
    children,
    className = "",
    ...rest
}: Props) {
    return (
        <h2
            className={cn(
                "text-4xl mb-4 text-black dark:text-white max-w-4xl",
                className
            )}
            tabIndex={0}>
            <PointerHighlight
                rectangleClassName="bg-emerald-200/30 dark:bg-emerald-700/30 border-emerald-300/30 dark:border-emerald-600/30 rounded-xs"
                pointerClassName="text-indigo-500">
                <span className="relative z-10 px-2 py-3">{children}</span>
            </PointerHighlight>
        </h2>
    );
}
