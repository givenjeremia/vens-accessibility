import { useAccessibilityContext } from "../context/AccessibilityContext";

export function useAccessibility() {
  const { state, setState } = useAccessibilityContext();

  function update<K extends keyof typeof state>(
    key: K,
    value: typeof state[K]
  ) {
    setState((prev) => ({ ...prev, [key]: value }));
  }

  function reset() {
    setState((prev) => ({ ...prev }));
    localStorage.removeItem("vens-accessibility");
    location.reload();
  }

  return { state, update, reset };
}
