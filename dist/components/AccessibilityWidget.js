"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { useAccessibility } from "../hooks/useAccessibility";
import { speakSelectedText } from "../utils/tts";
const LANGUAGES = [
    "Indonesian", "English", "Arabic", "Japanese", "Chinese", "Korean", "French",
    "German", "Spanish", "Portuguese", "Russian", "Hindi", "Bengali", "Urdu"
];
export default function AccessibilityWidget() {
    const { state, update, reset } = useAccessibility();
    const [open, setOpen] = useState(false);
    const Section = ({ title, children }) => (_jsxs("section", { style: { marginBottom: 16 }, children: [_jsx("h4", { style: { fontWeight: 600, marginBottom: 8 }, children: title }), children] }));
    return (_jsxs(_Fragment, { children: [_jsx("button", { onClick: () => setOpen(true), style: {
                    position: "fixed",
                    left: 0,
                    top: "40%",
                    zIndex: 10000,
                    background: "#2563eb",
                    color: "#fff",
                    padding: "12px",
                    borderRadius: "0 8px 8px 0",
                    cursor: "pointer",
                }, "aria-label": "Accessibility Menu", children: "\u267F" }), open && (_jsx("div", { onClick: () => setOpen(false), style: {
                    position: "fixed",
                    inset: 0,
                    background: "rgba(0,0,0,.3)",
                    zIndex: 9998,
                } })), _jsxs("aside", { style: {
                    position: "fixed",
                    top: 0,
                    left: open ? 0 : "-360px",
                    width: 340,
                    height: "100vh",
                    background: "#fff",
                    zIndex: 9999,
                    padding: 16,
                    overflowY: "auto",
                    transition: "left .3s",
                    boxShadow: "2px 0 10px rgba(0,0,0,.15)",
                }, children: [_jsx("h2", { style: { marginBottom: 8 }, children: "Aksesibilitas" }), _jsx("hr", {}), _jsx(Section, { title: "Bahasa", children: _jsx("select", { value: state.language, onChange: (e) => update("language", e.target.value), style: { width: "100%" }, children: LANGUAGES.map((l) => (_jsx("option", { children: l }, l))) }) }), _jsxs(Section, { title: "Teks", children: [_jsx("label", { children: "Ukuran Huruf" }), _jsx("input", { type: "range", min: 0.8, max: 1.8, step: 0.1, value: state.fontSize, onChange: (e) => update("fontSize", +e.target.value) }), _jsx("label", { children: "Ketebalan" }), _jsx("input", { type: "range", min: 300, max: 800, step: 100, value: state.fontWeight, onChange: (e) => update("fontWeight", +e.target.value) }), _jsxs("label", { children: [_jsx("input", { type: "checkbox", checked: state.dyslexiaFont, onChange: () => update("dyslexiaFont", !state.dyslexiaFont) }), " ", "Font Disleksia"] })] }), _jsxs(Section, { title: "Spasi", children: [_jsx("label", { children: "Spasi Huruf" }), _jsx("input", { type: "range", min: 0, max: 0.3, step: 0.05, value: state.letterSpacing, onChange: (e) => update("letterSpacing", +e.target.value) }), _jsx("label", { children: "Jarak Baris" }), _jsx("input", { type: "range", min: 1, max: 2.5, step: 0.1, value: state.lineHeight, onChange: (e) => update("lineHeight", +e.target.value) })] }), _jsxs(Section, { title: "Highlight", children: [_jsxs("label", { children: [_jsx("input", { type: "checkbox", checked: state.highlightLinks, onChange: () => update("highlightLinks", !state.highlightLinks) }), " ", "Sorot Link"] }), _jsxs("label", { children: [_jsx("input", { type: "checkbox", checked: state.highlightTitles, onChange: () => update("highlightTitles", !state.highlightTitles) }), " ", "Sorot Judul"] })] }), _jsxs(Section, { title: "Warna & Kontras", children: [_jsx("label", { children: "Brightness" }), _jsx("input", { type: "range", min: 0.6, max: 1.4, step: 0.05, value: state.brightness, onChange: (e) => update("brightness", +e.target.value) }), _jsx("label", { children: "Blue Light" }), _jsx("input", { type: "range", min: 0, max: 1, step: 0.1, value: state.blueLight, onChange: (e) => update("blueLight", +e.target.value) }), _jsx("label", { children: "Mode Kontras" }), _jsxs("select", { value: state.contrast, onChange: (e) => update("contrast", e.target.value), children: [_jsx("option", { value: "normal", children: "Normal" }), _jsx("option", { value: "dark", children: "Dark" }), _jsx("option", { value: "high", children: "High" }), _jsx("option", { value: "light", children: "Light" })] }), _jsx("label", { children: "Saturasi" }), _jsxs("select", { value: state.saturation, onChange: (e) => update("saturation", e.target.value), children: [_jsx("option", { value: "normal", children: "Normal" }), _jsx("option", { value: "high", children: "Tinggi" }), _jsx("option", { value: "low", children: "Rendah" }), _jsx("option", { value: "mono", children: "Monokrom" })] }), _jsx("label", { children: "Warna Teks" }), _jsx("input", { type: "color", value: state.textColor, onChange: (e) => update("textColor", e.target.value) })] }), _jsxs(Section, { title: "Alat Bantu", children: [_jsxs("label", { children: [_jsx("input", { type: "checkbox", checked: state.bigCursor, onChange: () => update("bigCursor", !state.bigCursor) }), " ", "Kursor Besar"] }), _jsxs("label", { children: [_jsx("input", { type: "checkbox", checked: state.readingGuide, onChange: () => update("readingGuide", !state.readingGuide) }), " ", "Panduan Membaca"] }), _jsx("label", { children: "Zoom Halaman" }), _jsx("input", { type: "range", min: 1, max: 2, step: 0.1, value: state.zoom, onChange: (e) => update("zoom", +e.target.value) }), _jsx("button", { style: {
                                    marginTop: 8,
                                    padding: 8,
                                    width: "100%",
                                    background: "#2563eb",
                                    color: "#fff",
                                    borderRadius: 6,
                                }, onClick: () => speakSelectedText(state.language === "English"
                                    ? "en-US"
                                    : "id-ID"), children: "\uD83C\uDFA4 Baca Teks Terpilih" })] }), _jsx("hr", {}), _jsx("button", { onClick: reset, style: {
                            width: "100%",
                            padding: 10,
                            marginTop: 12,
                            background: "#ef4444",
                            color: "#fff",
                            borderRadius: 6,
                        }, children: "Reset Semua" })] })] }));
}
