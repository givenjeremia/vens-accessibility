import React, { ReactNode } from "react";
export type AccessibilityState = {
    fontScale: number;
    highContrast: boolean;
};
type AccessibilityContextValue = {
    state: AccessibilityState;
    setState: React.Dispatch<React.SetStateAction<AccessibilityState>>;
};
export declare function AccessibilityContextProvider({ children, }: {
    children: ReactNode;
}): import("react/jsx-runtime").JSX.Element;
export declare function useAccessibilityContext(): AccessibilityContextValue;
export {};
