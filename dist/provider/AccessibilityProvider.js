"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { AccessibilityContextProvider, } from "../context/AccessibilityContext";
export function AccessibilityProvider({ children, }) {
    return (_jsx(AccessibilityContextProvider, { children: children }));
}
