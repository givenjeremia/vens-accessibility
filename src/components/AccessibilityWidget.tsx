"use client";
import React, { useState } from "react";
import { useAccessibility } from "../hooks/useAccessibility";

const LANGUAGES = [
  "Hebrew","English","Russian","Chinese","Spanish","Arabic","Bengali",
  "Hindi","Portuguese","Japanese","German","Korean","French","Turkish",
  "Vietnamese","Telugu","Marathi","Tamil","Italian","Urdu","Gujarati",
  "Polish","Ukrainian","Persian","Malayalam","Kannada","Oriya",
  "Romanian","Azerbaijani","Hausa","Burmese","Serbocroatian",
  "Thai","Dutch","Yoruba","Sindhi"
];

export default function AccessibilityWidget() {
  const { state, update, reset } = useAccessibility();
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* TOGGLE BUTTON */}
      <button
        onClick={() => setOpen(true)}
        style={{
          position: "fixed",
          left: 0,
          top: "40%",
          zIndex: 10000,
          background: "#2563eb",
          color: "#fff",
          padding: "10px",
          borderRadius: "0 8px 8px 0",
        }}
      >
        ♿
      </button>

      {/* OVERLAY */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,.3)",
            zIndex: 9998,
          }}
        />
      )}

      {/* PANEL */}
      <aside
        style={{
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
        }}
      >
        <h2>Aksesibilitas</h2>
        <hr />

        {/* CONTENT */}
        <h4>Bahasa</h4>
        <select
          value={state.language}
          onChange={(e) => update("language", e.target.value)}
        >
          {LANGUAGES.map((l) => (
            <option key={l}>{l}</option>
          ))}
        </select>

        <h4>Font</h4>
        <label>Ukuran</label>
        <input type="range" min={0.8} max={1.6} step={0.1}
          value={state.fontSize}
          onChange={(e) => update("fontSize", +e.target.value)}
        />

        <label>Ketebalan</label>
        <input type="range" min={300} max={800} step={100}
          value={state.fontWeight}
          onChange={(e) => update("fontWeight", +e.target.value)}
        />

        <label>Disleksia</label>
        <input type="checkbox"
          checked={state.dyslexiaFont}
          onChange={() => update("dyslexiaFont", !state.dyslexiaFont)}
        />

        <h4>Spasi</h4>
        <label>Huruf</label>
        <input type="range" min={0} max={0.3} step={0.05}
          value={state.letterSpacing}
          onChange={(e) => update("letterSpacing", +e.target.value)}
        />

        <label>Baris</label>
        <input type="range" min={1} max={2} step={0.1}
          value={state.lineHeight}
          onChange={(e) => update("lineHeight", +e.target.value)}
        />

        <h4>Warna</h4>
        <input type="color"
          value={state.textColor}
          onChange={(e) => update("textColor", e.target.value)}
        />

        <button onClick={reset} style={{ marginTop: 20 }}>
          Reset
        </button>
      </aside>
    </>
  );
}
