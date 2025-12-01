export declare function useAccessibility(): {
    state: import("../context/AccessibilityContext").AccessibilityState;
    update: <K extends keyof import("../context/AccessibilityContext").AccessibilityState>(key: K, value: import("../context/AccessibilityContext").AccessibilityState[K]) => void;
    reset: () => void;
};
