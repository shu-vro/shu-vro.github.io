"use client";
import React from "react";
import { Label } from "@/components/ui/label";
import { Input, TextArea } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export default function Contact() {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form submitted");
    };
    return (
        <>
            <div
                className="max-w-6xl mx-auto py-20 pb-10 px-4 md:px-8 lg:px-10"
                id="contact">
                <h2
                    className="text-4xl mb-4 text-black dark:text-white max-w-4xl"
                    tabIndex={0}>
                    Contact Me
                </h2>
                <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-md">
                    My expertise spans a diverse range of <br /> technologies
                    enabling me to deliver comprehensive and cutting-edge
                    solutions across various platforms.
                </p>
            </div>
            <div className="grid grid-cols-2 max-md:grid-cols-1 gap-4 md:gap-8 max-w-6xl mx-auto">
                <div className="" />
                <div className="shadow-input mx-auto w-full max-w-6xl rounded-none p-4 md:rounded-2xl md:p-8">
                    <form className="my-8" onSubmit={handleSubmit}>
                        <LabelInputContainer className="mb-4">
                            <Label htmlFor="firstname">Name</Label>
                            <Input
                                id="name"
                                placeholder="Your Name Here"
                                type="text"
                            />
                        </LabelInputContainer>
                        <LabelInputContainer className="mb-4">
                            <Label htmlFor="email">Email Address</Label>
                            <Input
                                id="email"
                                placeholder="example@gmail.com"
                                type="email"
                            />
                        </LabelInputContainer>
                        <LabelInputContainer className="mb-4">
                            <Label htmlFor="email">Send Message</Label>
                            <TextArea
                                id="message"
                                placeholder="Your Message Here..."
                            />
                        </LabelInputContainer>
                        <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />
                        <button
                            className="group/btn relative block py-4 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white text-xl shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
                            type="submit">
                            Send Message &rarr;
                            <BottomGradient />
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}

const BottomGradient = () => {
    return (
        <>
            <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
            <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
        </>
    );
};

const LabelInputContainer = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={cn("flex w-full flex-col space-y-2", className)}>
            {children}
        </div>
    );
};
