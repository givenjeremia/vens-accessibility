"use client";

import React, { useState } from "react";
import { useAccessibility } from "../hooks/useAccessibility";
import { speakSelectedText } from "../utils/tts";


const LANGUAGES = [
  "Indonesian","English","Arabic","Japanese","Chinese","Korean","French",
  "German","Spanish","Portuguese","Russian","Hindi","Bengali","Urdu"
];

export default function AccessibilityWidget() {
  const { state, update, reset } = useAccessibility();
  const [open, setOpen] = useState(false);

  const Section = ({ title, children }: any) => (
    <section style={{ marginBottom: 16 }}>
      <h4 style={{ fontWeight: 600, marginBottom: 8 }}>{title}</h4>
      {children}
    </section>
  );

  return (
    <>
      {/* FLOATING BUTTON */}
      <button
        onClick={() => setOpen(true)}
        style={{
          position: "fixed",
          left: 0,
          top: "40%",
          zIndex: 10000,
          background: "#2563eb",
          color: "#fff",
          padding: "12px",
          borderRadius: "0 8px 8px 0",
          cursor: "pointer",
        }}
        aria-label="Accessibility Menu"
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
          left: open ? 0 : "-360px",
          width: 340,
          height: "100vh",
          background: "#fff",
          zIndex: 9999,
          padding: 16,
          overflowY: "auto",
          transition: "left .3s",
          boxShadow: "2px 0 10px rgba(0,0,0,.15)",
        }}
      >
        <h2 style={{ marginBottom: 8 }}>Aksesibilitas Data</h2>
        <hr />

        {/* LANGUAGE */}
        <Section title="Bahasa">
          <select
            value={state.language}
            onChange={(e) => update("language", e.target.value)}
            style={{ width: "100%" }}
          >
            {LANGUAGES.map((l) => (
              <option key={l}>{l}</option>
            ))}
          </select>
        </Section>

        {/* FONT */}
        <Section title="Teks">
          <label>Ukuran Huruf</label>
          <input
            type="range"
            min={0.8}
            max={1.8}
            step={0.1}
            value={state.fontSize}
            onChange={(e) => update("fontSize", +e.target.value)}
          />

          <label>Ketebalan</label>
          <input
            type="range"
            min={300}
            max={800}
            step={100}
            value={state.fontWeight}
            onChange={(e) => update("fontWeight", +e.target.value)}
          />

          <label>
            <input
              type="checkbox"
              checked={state.dyslexiaFont}
              onChange={() =>
                update("dyslexiaFont", !state.dyslexiaFont)
              }
            />{" "}
            Font Disleksia
          </label>
        </Section>

        {/* SPACING */}
        <Section title="Spasi">
          <label>Spasi Huruf</label>
          <input
            type="range"
            min={0}
            max={0.3}
            step={0.05}
            value={state.letterSpacing}
            onChange={(e) =>
              update("letterSpacing", +e.target.value)
            }
          />

          <label>Jarak Baris</label>
          <input
            type="range"
            min={1}
            max={2.5}
            step={0.1}
            value={state.lineHeight}
            onChange={(e) =>
              update("lineHeight", +e.target.value)
            }
          />
        </Section>

        {/* HIGHLIGHT */}
        <Section title="Highlight">
          <label>
            <input
              type="checkbox"
              checked={state.highlightLinks}
              onChange={() =>
                update(
                  "highlightLinks",
                  !state.highlightLinks
                )
              }
            />{" "}
            Sorot Link
          </label>

          <label>
            <input
              type="checkbox"
              checked={state.highlightTitles}
              onChange={() =>
                update(
                  "highlightTitles",
                  !state.highlightTitles
                )
              }
            />{" "}
            Sorot Judul
          </label>
        </Section>

        {/* COLORS */}
        <Section title="Warna & Kontras">
          <label>Brightness</label>
          <input
            type="range"
            min={0.6}
            max={1.4}
            step={0.05}
            value={state.brightness}
            onChange={(e) =>
              update("brightness", +e.target.value)
            }
          />

          <label>Blue Light</label>
          <input
            type="range"
            min={0}
            max={1}
            step={0.1}
            value={state.blueLight}
            onChange={(e) =>
              update("blueLight", +e.target.value)
            }
          />

          <label>Mode Kontras</label>
          <select
            value={state.contrast}
            onChange={(e) =>
              update("contrast", e.target.value as any)
            }
          >
            <option value="normal">Normal</option>
            <option value="dark">Dark</option>
            <option value="high">High</option>
            <option value="light">Light</option>
          </select>

          <label>Saturasi</label>
          <select
            value={state.saturation}
            onChange={(e) =>
              update("saturation", e.target.value as any)
            }
          >
            <option value="normal">Normal</option>
            <option value="high">Tinggi</option>
            <option value="low">Rendah</option>
            <option value="mono">Monokrom</option>
          </select>

          <label>Warna Teks</label>
          <input
            type="color"
            value={state.textColor}
            onChange={(e) =>
              update("textColor", e.target.value)
            }
          />
        </Section>

        {/* TOOLS */}
        <Section title="Alat Bantu">
          <label>
            <input
              type="checkbox"
              checked={state.bigCursor}
              onChange={() =>
                update("bigCursor", !state.bigCursor)
              }
            />{" "}
            Kursor Besar
          </label>

          <label>
            <input
              type="checkbox"
              checked={state.readingGuide}
              onChange={() =>
                update(
                  "readingGuide",
                  !state.readingGuide
                )
              }
            />{" "}
            Panduan Membaca
          </label>

          <label>Zoom Halaman</label>
          <input
            type="range"
            min={1}
            max={2}
            step={0.1}
            value={state.zoom}
            onChange={(e) =>
              update("zoom", +e.target.value)
            }
          />

          <button
            style={{
              marginTop: 8,
              padding: 8,
              width: "100%",
              background: "#2563eb",
              color: "#fff",
              borderRadius: 6,
            }}
            onClick={() =>
              speakSelectedText(
                state.language === "English"
                  ? "en-US"
                  : "id-ID"
              )
            }
          >
            🎤 Baca Teks Terpilih
          </button>
        </Section>

        <hr />

        {/* RESET */}
        <button
          onClick={reset}
          style={{
            width: "100%",
            padding: 10,
            marginTop: 12,
            background: "#ef4444",
            color: "#fff",
            borderRadius: 6,
          }}
        >
          Reset Semua
        </button>
      </aside>
    </>
  );
}
