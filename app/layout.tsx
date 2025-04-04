import type { Metadata } from "next";
import { Dosis } from "next/font/google";
import localFont from "next/font/local";
import { ReactLenis } from "lenis/react";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import { cn } from "@/lib/utils";
import FooterSection from "@/components/footer";
import SparklesBackground from "@/components/SparklesBackground";

const font = Dosis({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const localFonts = localFont({
    variable: "--font-butler",
    src: [
        {
            path: "./fonts/butler/Butler/Butler_Ultra_Light.otf",
            weight: "100",
            style: "normal",
        },
        {
            path: "./fonts/butler/Butler/Butler_Light.otf",
            weight: "300",
            style: "normal",
        },
        {
            path: "./fonts/butler/Butler/Butler_Regular.otf",
            weight: "400",
            style: "normal",
        },
        {
            path: "./fonts/butler/Butler/Butler_Medium.otf",
            weight: "500",
            style: "normal",
        },
        {
            path: "./fonts/butler/Butler/Butler_Bold.otf",
            weight: "600",
            style: "normal",
        },
        {
            path: "./fonts/butler/Butler/Butler_Black.otf",
            weight: "700",
            style: "normal",
        },
        {
            path: "./fonts/butler/Butler/Butler_ExtraBold.otf",
            weight: "900",
            style: "normal",
        },
    ],
});

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className={cn(
                "dark",
                process.env.NODE_ENV !== "development" && "**:cursor-none!"
            )}>
            <head>
                <link rel="canonical" href="https://shirshen.vercel.app" />
                {process.env.NODE_ENV === "development" && (
                    <script
                        crossOrigin="anonymous"
                        src="https://unpkg.com/react-scan/dist/auto.global.js"
                    />
                )}
            </head>
            <body
                className={`${font.variable} ${localFonts.variable} antialiased relative min-h-full`}>
                <SparklesBackground />
                <ReactLenis root>
                    {children}

                    <FooterSection />
                </ReactLenis>
                <CustomCursor />
            </body>
        </html>
    );
}
