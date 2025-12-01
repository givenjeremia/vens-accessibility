"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

export type TextAlign = "left" | "center" | "right" | "justify";
export type ContrastMode =
  | "normal"
  | "dark"
  | "high"
  | "light";
export type SaturationMode =
  | "normal"
  | "high"
  | "low"
  | "mono";

export interface AccessibilityState {
  language: string;

  fontSize: number;
  fontWeight: number;
  textAlign: TextAlign;
  dyslexiaFont: boolean;

  letterSpacing: number;
  lineHeight: number;
  wordSpacing: number;

  highlightLinks: boolean;
  highlightTitles: boolean;

  brightness: number;
  blueLight: number;
  contrast: ContrastMode;
  saturation: SaturationMode;
  textColor: string;

  zoom: number;
  bigCursor: boolean;
  readingGuide: boolean;
  tts: boolean;
}

const DEFAULT: AccessibilityState = {
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

type Ctx = {
  state: AccessibilityState;
  setState: React.Dispatch<React.SetStateAction<AccessibilityState>>;
};

const AccessibilityContext = createContext<Ctx | null>(null);

export function AccessibilityProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [state, setState] = useState<AccessibilityState>(() => {
    if (typeof window === "undefined") return DEFAULT;
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

    localStorage.setItem(
      "vens-accessibility",
      JSON.stringify(state)
    );
  }, [state]);

  return (
    <AccessibilityContext.Provider value={{ state, setState }}>
      {children}
    </AccessibilityContext.Provider>
  );
}

export function useAccessibilityContext() {
  const ctx = useContext(AccessibilityContext);
  if (!ctx)
    throw new Error("useAccessibility inside AccessibilityProvider");
  return ctx;
}
