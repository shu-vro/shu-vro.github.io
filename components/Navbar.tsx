"use client";

import { ScrollCallback } from "lenis";
import { useLenis } from "lenis/react";
import React, { useEffect, useState } from "react";
// import Logo from "./Logo";
// import Link from "next/link";

// export default function Navbar() {
//     const lenis = useLenis();
//     const [showNavbar, setShowNavbar] = useState(true);

//     useEffect(() => {
//         if (!lenis) return;
//         let lastScroll = 0;
//         const onScroll: ScrollCallback = ({ scroll }) => {
//             // Compare current scroll with previous scroll position to determine direction
//             if (scroll > lastScroll + 5) {
//                 // Scrolled down a bit
//                 setShowNavbar(false);
//             } else if (scroll < lastScroll - 5) {
//                 // Scrolled up a bit
//                 setShowNavbar(true);
//             }
//             lastScroll = scroll;
//         };

//         lenis.on("scroll", onScroll);
//         return () => {
//             lenis.off("scroll", onScroll);
//         };
//     }, [lenis]);

//     return (
//         <nav
//             className={`sticky top-0 left-0 right-0 z-50 transition-transform duration-300 bg-black/20 backdrop-blur-md ${
//                 showNavbar ? "translate-y-0" : "-translate-y-full"
//             }`}>
//             <div className="max-w-6xl mx-auto py-4 px-4 md:px-8 lg:px-10 h-15">
//                 <div className="flex justify-between items-center">
//                     <div>
//                         <Link
//                             href="/"
//                             onClick={() => {
//                                 if (!lenis) return;
//                                 lenis.scrollTo(0);
//                             }}>
//                             <Logo />
//                         </Link>
//                     </div>
//                     <div>
//                         <ul className="flex space-x-4">
//                             <li>
//                                 <Link
//                                     href="/#home"
//                                     onClick={(e) => {
//                                         if (!lenis) return;
//                                         lenis.scrollTo(0, {
//                                             duration: 2,
//                                         });
//                                     }}
//                                     className="text-neutral-900 dark:text-neutral-100">
//                                     Home
//                                 </Link>
//                             </li>
//                             <li>
//                                 <Link
//                                     href="/#about"
//                                     onClick={(e) => {
//                                         if (!lenis) return;
//                                         lenis.scrollTo("#about", {
//                                             duration: 2,
//                                         });
//                                     }}
//                                     className="text-neutral-900 dark:text-neutral-100">
//                                     About
//                                 </Link>
//                             </li>
//                             <li>
//                                 <Link
//                                     href="/#projects"
//                                     onClick={(e) => {
//                                         if (!lenis) return;
//                                         lenis.scrollTo("#projects", {
//                                             duration: 2,
//                                         });
//                                     }}
//                                     className="text-neutral-900 dark:text-neutral-100">
//                                     Projects
//                                 </Link>
//                             </li>
//                         </ul>
//                     </div>
//                     <div>
//                         <ul>
//                             <li>
//                                 <Link
//                                     href="/#contact"
//                                     onClick={(e) => {
//                                         if (!lenis) return;
//                                         lenis.scrollTo("#contact", {
//                                             duration: 2,
//                                         });
//                                     }}
//                                     className="text-neutral-900 dark:text-neutral-100">
//                                     Contact
//                                 </Link>
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//             </div>
//         </nav>
//     );
// }

import {
    Navbar,
    NavBody,
    NavItems,
    MobileNav,
    NavbarButton,
    MobileNavHeader,
    MobileNavToggle,
    MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import Logo from "./Logo";
import Link from "next/link";

export default function NavbarDemo() {
    const lenis = useLenis();
    const navItems = [
        {
            name: "Home",
            link: "#home",
        },
        {
            name: "About",
            link: "#about",
        },
        {
            name: "Projects",
            link: "#projects",
        },
    ];

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <>
            <Navbar>
                {/* Desktop Navigation */}
                <NavBody>
                    <Link
                        href="#"
                        className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 text-sm font-normal text-black">
                        <Logo />
                    </Link>
                    <NavItems
                        items={navItems}
                        onItemClick={(e) => {
                            e.preventDefault();
                            const target = e.currentTarget.getAttribute("href");
                            if (!target || !lenis) return;

                            lenis.scrollTo(target, {
                                duration: 2,
                            });
                        }}
                    />
                    <div className="flex items-center gap-4">
                        <NavbarButton
                            href="#contact"
                            variant="secondary"
                            onClick={(e) => {
                                e.preventDefault();
                                const target =
                                    e.currentTarget.getAttribute("href");
                                if (!target || !lenis) return;
                                lenis.scrollTo(target, {
                                    duration: 2,
                                });
                            }}>
                            Contact
                        </NavbarButton>
                    </div>
                </NavBody>

                {/* Mobile Navigation */}
                <MobileNav>
                    <MobileNavHeader>
                        <Link
                            href="#"
                            className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 text-sm font-normal text-black">
                            <Logo />
                        </Link>
                        <MobileNavToggle
                            isOpen={isMobileMenuOpen}
                            onClick={() =>
                                setIsMobileMenuOpen(!isMobileMenuOpen)
                            }
                        />
                    </MobileNavHeader>

                    <MobileNavMenu
                        isOpen={isMobileMenuOpen}
                        onClose={() => setIsMobileMenuOpen(false)}>
                        {navItems.map((item, idx) => (
                            <Link
                                key={`mobile-link-${idx}`}
                                href={item.link}
                                onClick={(e) => {
                                    e.preventDefault();
                                    const target =
                                        e.currentTarget.getAttribute("href");
                                    if (!target || !lenis) return;
                                    lenis.scrollTo(target, {
                                        duration: 2,
                                    });
                                    setIsMobileMenuOpen(false);
                                }}
                                className="relative text-neutral-600 dark:text-neutral-300 w-full">
                                <span className="block">{item.name}</span>
                            </Link>
                        ))}
                        <div className="flex w-full flex-col gap-4">
                            <NavbarButton
                                href="#contact"
                                onClick={(e) => {
                                    e.preventDefault();
                                    const target =
                                        e.currentTarget.getAttribute("href");
                                    if (!target || !lenis) return;
                                    lenis.scrollTo(target, {
                                        duration: 2,
                                    });
                                    setIsMobileMenuOpen(false);
                                }}
                                variant="primary"
                                className="w-full">
                                Contact
                            </NavbarButton>
                        </div>
                    </MobileNavMenu>
                </MobileNav>
            </Navbar>

            {/* Navbar */}
        </>
    );
}
