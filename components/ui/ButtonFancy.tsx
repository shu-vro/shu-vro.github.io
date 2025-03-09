import React, { ElementType } from "react";
import { HoverBorderGradient } from "./hover-border-gradient";
import { cn } from "@/lib/utils";

export default function ButtonFancy({
    children,
    className,
    ...rest
}: {
    children: React.ReactNode;
    className?: string;
} & React.PropsWithChildren<
    {
        as?: React.ReactNode;
        containerClassName?: string;
        className?: string;
        duration?: number;
        clockwise?: boolean;
    } & React.HTMLAttributes<HTMLElement>
>) {
    return (
        <HoverBorderGradient
            className={cn("cursor-pointer", className)}
            {...rest}>
            {children}
        </HoverBorderGradient>
    );
}
