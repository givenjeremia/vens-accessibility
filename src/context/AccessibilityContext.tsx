"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

export type AccessibilityState = {
  fontScale: number;
  highContrast: boolean;
};

type AccessibilityContextValue = {
  state: AccessibilityState;
  setState: React.Dispatch<React.SetStateAction<AccessibilityState>>;
};

const defaultState: AccessibilityState = {
  fontScale: 1,
  highContrast: false,
};

const AccessibilityContext =
  createContext<AccessibilityContextValue | null>(null);

export function AccessibilityContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [state, setState] = useState<AccessibilityState>(() => {
    if (typeof window === "undefined") return defaultState;
    const saved = localStorage.getItem("vens-a11y");
    return saved ? JSON.parse(saved) : defaultState;
  });

  useEffect(() => {
    document.documentElement.style.fontSize = `${state.fontScale * 100}%`;
    document.body.classList.toggle(
      "a11y-high-contrast",
      state.highContrast
    );
    localStorage.setItem("vens-a11y", JSON.stringify(state));
  }, [state]);

  return (
    <AccessibilityContext.Provider value={{ state, setState }}>
      {children}
    </AccessibilityContext.Provider>
  );
}

export function useAccessibilityContext() {
  const ctx = useContext(AccessibilityContext);
  if (!ctx) {
    throw new Error(
      "useAccessibilityContext harus digunakan di dalam AccessibilityProvider"
    );
  }
  return ctx;
}
