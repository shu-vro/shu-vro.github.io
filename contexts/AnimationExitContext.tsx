"use client";

import { createContext, useContext, useState } from "react";

type AnimationExitContextType = {
    active: boolean;
    setActive: React.Dispatch<
        React.SetStateAction<AnimationExitContextType["active"]>
    >;
};

const AnimationExitContext = createContext({} as AnimationExitContextType);

export const useAnimationExit = () => {
    const context = AnimationExitContext;
    if (context === undefined) {
        throw new Error(
            "useAnimationExit must be used within a AnimationExitProvider"
        );
    }

    return useContext(context);
};

export function AnimationExitProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [active, setActive] = useState(false);
    return (
        <AnimationExitContext.Provider
            value={{
                active,
                setActive,
            }}>
            {children}
        </AnimationExitContext.Provider>
    );
}
