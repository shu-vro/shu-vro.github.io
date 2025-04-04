"use client";

import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import { useAnimationExit } from "@/contexts/AnimationExitContext";

export default function AnimatedLink({
    href,
    children,
    ...rest
}: React.ComponentProps<typeof Link>) {
    const router = useRouter();
    const { setActive } = useAnimationExit();
    return (
        <Link
            href={href}
            {...rest}
            onClick={async (e) => {
                e.preventDefault();
                setActive(true);
                // wait 2 seconds
                await new Promise((resolve) => setTimeout(resolve, 2500));
                router.push(href as string);
            }}>
            {children}
        </Link>
    );
}
