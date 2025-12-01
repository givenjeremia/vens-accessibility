"use client";
import { useState } from "react";
import { useAccessibility } from "../hooks/useAccessibility";

function Card({
  label,
  onClick,
}: {
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="bg-white border rounded-xl p-4 flex flex-col items-center justify-center hover:bg-gray-100 transition"
    >
      <div className="text-xl font-bold mb-2">Aa</div>
      <span className="text-sm font-medium text-center">
        {label}
      </span>
    </button>
  );
}

export default function AccessibilityWidget() {
  const { state, update, reset } = useAccessibility();
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* FLOATING BUTTON */}
      <button
        onClick={() => setOpen(true)}
        className="fixed left-0 top-1/2 -translate-y-1/2 bg-blue-600 text-white p-3 rounded-r-xl z-[10000]"
      >
        ♿
      </button>

      {/* OVERLAY */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 z-[9999]"
        />
      )}

      {/* PANEL */}
      <aside
        className={`fixed top-0 left-0 h-screen w-[360px] bg-gray-100 z-[10000] 
        transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* HEADER */}
        <div className="bg-blue-600 text-white p-4 flex justify-between items-center">
          <h2 className="font-semibold">Accessibility Menu</h2>
          <button onClick={() => setOpen(false)}>✕</button>
        </div>

        <div className="p-4 space-y-6 overflow-y-auto h-full">
          {/* LANGUAGE */}
          <select
            value={state.language}
            onChange={(e) =>
              update("language", e.target.value)
            }
            className="w-full rounded-full p-3 border"
          >
            <option>English</option>
            <option>Indonesia</option>
            <option>Arabic</option>
            <option>Japanese</option>
          </select>

          {/* CONTENT */}
          <section>
            <h3 className="font-bold mb-3">
              Content Adjustments
            </h3>
            <div className="grid grid-cols-3 gap-3">
              <Card
                label="Font Size"
                onClick={() =>
                  update("fontSize", state.fontSize + 0.1)
                }
              />
              <Card
                label="Highlight Title"
                onClick={() =>
                  update(
                    "highlightTitles",
                    !state.highlightTitles
                  )
                }
              />
              <Card
                label="Highlight Links"
                onClick={() =>
                  update(
                    "highlightLinks",
                    !state.highlightLinks
                  )
                }
              />
              <Card
                label="Dyslexia Font"
                onClick={() =>
                  update(
                    "dyslexiaFont",
                    !state.dyslexiaFont
                  )
                }
              />
              <Card
                label="Letter Spacing"
                onClick={() =>
                  update(
                    "letterSpacing",
                    state.letterSpacing + 0.05
                  )
                }
              />
              <Card
                label="Line Height"
                onClick={() =>
                  update(
                    "lineHeight",
                    state.lineHeight + 0.1
                  )
                }
              />
            </div>
          </section>

          {/* COLORS */}
          <section>
            <h3 className="font-bold mb-3">
              Color Adjustments
            </h3>
            <div className="grid grid-cols-3 gap-3">
              <Card
                label="Dark Contrast"
                onClick={() =>
                  update("contrast", "dark")
                }
              />
              <Card
                label="Light Contrast"
                onClick={() =>
                  update("contrast", "light")
                }
              />
              <Card
                label="High Contrast"
                onClick={() =>
                  update("contrast", "high")
                }
              />
              <Card
                label="High Saturation"
                onClick={() =>
                  update("saturation", "high")
                }
              />
              <Card
                label="Low Saturation"
                onClick={() =>
                  update("saturation", "low")
                }
              />
              <Card
                label="Monochrome"
                onClick={() =>
                  update("saturation", "mono")
                }
              />
            </div>
          </section>

          {/* TOOLS */}
          <section>
            <h3 className="font-bold mb-3">Tools</h3>
            <div className="grid grid-cols-3 gap-3">
              <Card
                label="Zoom"
                onClick={() =>
                  update("zoom", state.zoom + 0.1)
                }
              />
              <Card
                label="Big Cursor"
                onClick={() =>
                  update(
                    "bigCursor",
                    !state.bigCursor
                  )
                }
              />
              <Card
                label="Reading Guide"
                onClick={() =>
                  update(
                    "readingGuide",
                    !state.readingGuide
                  )
                }
              />
            </div>
          </section>

          <button
            onClick={reset}
            className="w-full py-3 mt-4 bg-red-500 text-white rounded-xl"
          >
            Reset All
          </button>

          <p className="text-center text-xs text-gray-500 mt-4">
            Web Accessibility by Vens ❤️
          </p>
        </div>
      </aside>
    </>
  );
}
