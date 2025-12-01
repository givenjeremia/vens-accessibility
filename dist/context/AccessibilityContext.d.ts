import React, { ReactNode } from "react";
export type TextAlign = "left" | "center" | "right" | "justify";
export type ContrastMode = "normal" | "dark" | "high" | "light";
export type SaturationMode = "normal" | "high" | "low" | "mono";
export interface AccessibilityState {
    language: string;
    fontSize: number;
    fontWeight: number;
    textAlign: TextAlign;
    dyslexiaFont: boolean;
    letterSpacing: number;
    lineHeight: number;
    wordSpacing: number;
    highlightLinks: boolean;
    highlightTitles: boolean;
    brightness: number;
    blueLight: number;
    contrast: ContrastMode;
    saturation: SaturationMode;
    textColor: string;
    zoom: number;
    bigCursor: boolean;
    readingGuide: boolean;
    tts: boolean;
}
type Ctx = {
    state: AccessibilityState;
    setState: React.Dispatch<React.SetStateAction<AccessibilityState>>;
};
export declare function AccessibilityProvider({ children, }: {
    children: ReactNode;
}): import("react/jsx-runtime").JSX.Element;
export declare function useAccessibilityContext(): Ctx;
export {};
