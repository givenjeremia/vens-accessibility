"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useEffect, useState, } from "react";
const DEFAULT = {
    language: "id",
    fontSize: 1,
    fontWeight: 400,
    textAlign: "left",
    dyslexiaFont: false,
    letterSpacing: 0,
    lineHeight: 1.6,
    wordSpacing: 0,
    highlightLinks: false,
    highlightTitles: false,
    brightness: 1,
    blueLight: 0,
    contrast: "normal",
    saturation: "normal",
    textColor: "#000000",
    zoom: 1,
    bigCursor: false,
    readingGuide: false,
    tts: false,
};
const AccessibilityContext = createContext(null);
export function AccessibilityProvider({ children, }) {
    const [state, setState] = useState(() => {
        if (typeof window === "undefined")
            return DEFAULT;
        const saved = localStorage.getItem("vens-accessibility");
        return saved ? { ...DEFAULT, ...JSON.parse(saved) } : DEFAULT;
    });
    useEffect(() => {
        const root = document.documentElement;
        const body = document.body;
        root.style.fontSize = `${state.fontSize * 100}%`;
        root.style.lineHeight = String(state.lineHeight);
        root.style.letterSpacing = `${state.letterSpacing}em`;
        root.style.wordSpacing = `${state.wordSpacing}em`;
        root.style.fontWeight = String(state.fontWeight);
        root.style.textAlign = state.textAlign;
        root.style.color = state.textColor;
        root.style.transform = `scale(${state.zoom})`;
        body.style.filter = `
      brightness(${state.brightness})
      sepia(${state.blueLight})
    `;
        body.classList.toggle("a11y-dyslexia", state.dyslexiaFont);
        body.classList.toggle("a11y-links", state.highlightLinks);
        body.classList.toggle("a11y-titles", state.highlightTitles);
        body.classList.toggle("a11y-big-cursor", state.bigCursor);
        body.classList.toggle("a11y-reading-guide", state.readingGuide);
        body.dataset.contrast = state.contrast;
        body.dataset.saturation = state.saturation;
        localStorage.setItem("vens-accessibility", JSON.stringify(state));
    }, [state]);
    return (_jsx(AccessibilityContext.Provider, { value: { state, setState }, children: children }));
}
export function useAccessibilityContext() {
    const ctx = useContext(AccessibilityContext);
    if (!ctx)
        throw new Error("useAccessibility inside AccessibilityProvider");
    return ctx;
}
