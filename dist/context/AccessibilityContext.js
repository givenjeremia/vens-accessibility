"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useEffect, useState, } from "react";
const defaultState = {
    fontScale: 1,
    highContrast: false,
};
const AccessibilityContext = createContext(null);
export function AccessibilityContextProvider({ children, }) {
    const [state, setState] = useState(() => {
        if (typeof window === "undefined")
            return defaultState;
        const saved = localStorage.getItem("vens-a11y");
        return saved ? JSON.parse(saved) : defaultState;
    });
    useEffect(() => {
        document.documentElement.style.fontSize = `${state.fontScale * 100}%`;
        document.body.classList.toggle("a11y-high-contrast", state.highContrast);
        localStorage.setItem("vens-a11y", JSON.stringify(state));
    }, [state]);
    return (_jsx(AccessibilityContext.Provider, { value: { state, setState }, children: children }));
}
export function useAccessibilityContext() {
    const ctx = useContext(AccessibilityContext);
    if (!ctx) {
        throw new Error("useAccessibilityContext harus digunakan di dalam AccessibilityProvider");
    }
    return ctx;
}
