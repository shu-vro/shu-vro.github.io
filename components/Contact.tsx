"use client";
import React from "react";
import { Label } from "@/components/ui/label";
import { Input, TextArea } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { IoLogoGithub } from "react-icons/io5";
import { RiLinkedinFill } from "react-icons/ri";
import ButtonFancy from "./ui/ButtonFancy";
import { BsWhatsapp } from "react-icons/bs";
import { PiMessengerLogoBold } from "react-icons/pi";
import MainHeading from "./MainHeading";

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
                <MainHeading>Contact Me</MainHeading>
                <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-md">
                    Feel free to reach out to me via email or phone. You can
                    also find me on social media.
                </p>
            </div>
            <div className="grid grid-cols-2 max-lg:grid-cols-1 max-w-6xl mx-auto">
                <address className="px-4 md:px-8 lg:py-16">
                    <div>
                        <h3 className="text-2xl font-semibold mb-2 text-black dark:text-white">
                            Location
                        </h3>
                        <p className="text-neutral-700 dark:text-neutral-300">
                            Motihar Thana, Rajshahi, Bangladesh
                        </p>
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold mb-2 text-black dark:text-white">
                            Contact Info
                        </h3>
                        <p className="text-neutral-700 dark:text-neutral-300">
                            Email: official.shirshen@gmail.com
                        </p>
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold mb-2 text-black dark:text-white">
                            Social Links
                        </h3>
                        <div className="flex gap-4">
                            <a
                                href="https://github.com/shu-vro"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-2xl">
                                <ButtonFancy as="span" className="px-2">
                                    <IoLogoGithub />
                                    <span className="sr-only">GitHub</span>
                                </ButtonFancy>
                            </a>
                            <a
                                href="https://linkedin.com/in/shirshen-dasgupta"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-2xl">
                                <ButtonFancy as="span" className="px-2">
                                    <RiLinkedinFill />
                                    <span className="sr-only">LinkedIn</span>
                                </ButtonFancy>
                            </a>
                            <a
                                href="https://m.me/shirshen.shuvro"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-2xl">
                                <ButtonFancy as="span" className="px-2">
                                    <PiMessengerLogoBold />
                                    <span className="sr-only">Messenger</span>
                                </ButtonFancy>
                            </a>
                            <a
                                href="https://m.me/shirshen.shuvro"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-2xl">
                                <ButtonFancy as="span" className="px-2">
                                    <BsWhatsapp />
                                    <span className="sr-only">Whatsapp</span>
                                </ButtonFancy>
                            </a>
                        </div>
                    </div>
                </address>
                <div className="shadow-input mx-auto w-full max-w-6xl rounded-none p-4 md:p-8">
                    <form
                        className="my-8"
                        action={`https://formsubmit.co/${process.env.NEXT_PUBLIC_FORMSUBMIT_KEY}`}
                        method="POST">
                        <input
                            type="text"
                            name="_honey"
                            className="sr-only"
                            tabIndex={-1}
                        />
                        <LabelInputContainer className="mb-4">
                            <Label htmlFor="firstname">Name</Label>
                            <Input
                                id="name"
                                name="name"
                                placeholder="Your Name Here"
                                type="text"
                            />
                        </LabelInputContainer>
                        <LabelInputContainer className="mb-4">
                            <Label htmlFor="email">Email Address</Label>
                            <Input
                                id="email"
                                name="email"
                                placeholder="example@gmail.com"
                                type="email"
                            />
                        </LabelInputContainer>
                        <LabelInputContainer className="mb-4">
                            <Label htmlFor="email">Send Message</Label>
                            <TextArea
                                id="message"
                                name="message"
                                placeholder="Your Message Here..."
                            />
                        </LabelInputContainer>
                        <input
                            type="hidden"
                            name="_next"
                            value="https://shirshen.is-a.dev/thank-you"
                        />
                        {/* <input type="hidden" name="_captcha" value="false" /> */}
                        <input
                            type="hidden"
                            name="_autoresponse"
                            value="Thank you for contacting me! I appreciate your message and will get back to you soon."
                        />
                        <input type="hidden" name="_template" value="box" />
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
