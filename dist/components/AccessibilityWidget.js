"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { useAccessibility } from "../hooks/useAccessibility";
const LANGUAGES = [
    "Hebrew", "English", "Russian", "Chinese", "Spanish", "Arabic", "Bengali",
    "Hindi", "Portuguese", "Japanese", "German", "Korean", "French", "Turkish",
    "Vietnamese", "Telugu", "Marathi", "Tamil", "Italian", "Urdu", "Gujarati",
    "Polish", "Ukrainian", "Persian", "Malayalam", "Kannada", "Oriya",
    "Romanian", "Azerbaijani", "Hausa", "Burmese", "Serbocroatian",
    "Thai", "Dutch", "Yoruba", "Sindhi"
];
export default function AccessibilityWidget() {
    const { state, update, reset } = useAccessibility();
    const [open, setOpen] = useState(false);
    return (_jsxs(_Fragment, { children: [_jsx("button", { onClick: () => setOpen(true), style: {
                    position: "fixed",
                    left: 0,
                    top: "40%",
                    zIndex: 10000,
                    background: "#2563eb",
                    color: "#fff",
                    padding: "10px",
                    borderRadius: "0 8px 8px 0",
                }, children: "\u267F" }), open && (_jsx("div", { onClick: () => setOpen(false), style: {
                    position: "fixed",
                    inset: 0,
                    background: "rgba(0,0,0,.3)",
                    zIndex: 9998,
                } })), _jsxs("aside", { style: {
                    position: "fixed",
                    top: 0,
                    left: open ? 0 : "-340px",
                    width: 320,
                    height: "100vh",
                    background: "white",
                    zIndex: 9999,
                    padding: 16,
                    overflowY: "auto",
                    transition: "left .3s",
                }, children: [_jsx("h2", { children: "Aksesibilitas" }), _jsx("hr", {}), _jsx("h4", { children: "Bahasa" }), _jsx("select", { value: state.language, onChange: (e) => update("language", e.target.value), children: LANGUAGES.map((l) => (_jsx("option", { children: l }, l))) }), _jsx("h4", { children: "Font" }), _jsx("label", { children: "Ukuran" }), _jsx("input", { type: "range", min: 0.8, max: 1.6, step: 0.1, value: state.fontSize, onChange: (e) => update("fontSize", +e.target.value) }), _jsx("label", { children: "Ketebalan" }), _jsx("input", { type: "range", min: 300, max: 800, step: 100, value: state.fontWeight, onChange: (e) => update("fontWeight", +e.target.value) }), _jsx("label", { children: "Disleksia" }), _jsx("input", { type: "checkbox", checked: state.dyslexiaFont, onChange: () => update("dyslexiaFont", !state.dyslexiaFont) }), _jsx("h4", { children: "Spasi" }), _jsx("label", { children: "Huruf" }), _jsx("input", { type: "range", min: 0, max: 0.3, step: 0.05, value: state.letterSpacing, onChange: (e) => update("letterSpacing", +e.target.value) }), _jsx("label", { children: "Baris" }), _jsx("input", { type: "range", min: 1, max: 2, step: 0.1, value: state.lineHeight, onChange: (e) => update("lineHeight", +e.target.value) }), _jsx("h4", { children: "Warna" }), _jsx("input", { type: "color", value: state.textColor, onChange: (e) => update("textColor", e.target.value) }), _jsx("button", { onClick: reset, style: { marginTop: 20 }, children: "Reset" })] })] }));
}
