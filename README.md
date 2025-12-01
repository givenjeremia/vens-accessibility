# vens-accessibility ♿

Library Accessibility sederhana untuk Next.js (Bahasa Indonesia)

## Cara Pakai
```tsx
import "vens-accessibility/src/styles/accessibility.css";
import {
  AccessibilityProvider,
  AccessibilityWidget
} from "vens-accessibility";

export default function RootLayout({ children }) {
  return (
    <AccessibilityProvider>
      {children}
      <AccessibilityWidget />
    </AccessibilityProvider>
  );
}
```

## Fitur
- Perbesar teks
- Mode kontras tinggi
- State tersimpan otomatis