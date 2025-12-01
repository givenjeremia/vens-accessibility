"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useAccessibility } from "../hooks/useAccessibility";
export default function AccessibilityWidget() {
    const { state, setFontScale, toggleHighContrast } = useAccessibility();
    return (_jsxs("div", { style: {
            position: "fixed",
            bottom: 20,
            right: 20,
            zIndex: 9999,
            background: "#fff",
            border: "1px solid #ccc",
            padding: 10,
            borderRadius: 8,
            fontSize: 12,
        }, children: [_jsx("div", { children: _jsx("b", { children: "Aksesibilitas" }) }), _jsx("button", { onClick: () => setFontScale(1.2), children: "Perbesar Teks" }), _jsx("button", { onClick: () => setFontScale(1), children: "Normal" }), _jsxs("button", { onClick: toggleHighContrast, children: [state.highContrast
                        ? "Matikan"
                        : "Aktifkan", " Kontras Tinggi"] })] }));
}
