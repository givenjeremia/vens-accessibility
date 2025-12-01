"use client";

import React from "react";
import { useAccessibility } from "../hooks/useAccessibility";

export default function AccessibilityWidget() {
  const { state, setFontScale, toggleHighContrast } = useAccessibility();

  return (
    <div
      style={{
        position: "fixed",
        bottom: 20,
        right: 20,
        zIndex: 9999,
        background: "#fff",
        border: "1px solid #ccc",
        padding: 10,
        borderRadius: 8,
        fontSize: 12,
      }}
    >
      <div>
        <b>Aksesibilitas</b>
      </div>

      <button onClick={() => setFontScale(1.2)}>
        Perbesar Teks
      </button>

      <button onClick={() => setFontScale(1)}>
        Normal
      </button>

      <button onClick={toggleHighContrast}>
        {state.highContrast
          ? "Matikan"
          : "Aktifkan"} Kontras Tinggi
      </button>
    </div>
  );
}
