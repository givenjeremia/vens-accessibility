import { useAccessibilityContext } from "../context/AccessibilityContext";
export function useAccessibility() {
    const { state, setState } = useAccessibilityContext();
    return {
        state,
        setFontScale(scale) {
            setState((prev) => ({
                ...prev,
                fontScale: scale,
            }));
        },
        toggleHighContrast() {
            setState((prev) => ({
                ...prev,
                highContrast: !prev.highContrast,
            }));
        },
    };
}
