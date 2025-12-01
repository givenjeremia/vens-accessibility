"use client";

import React, { ReactNode } from "react";
import {
  AccessibilityContextProvider,
} from "../context/AccessibilityContext";

export function AccessibilityProvider({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <AccessibilityContextProvider>
      {children}
    </AccessibilityContextProvider>
  );
}
