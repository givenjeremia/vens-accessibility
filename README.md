# vens-accessibility ♿

Library **Accessibility Control** untuk Next.js / React  
Bahasa: 🇮🇩 Indonesia

## Fitur Utama
- Pengaturan ukuran font
- Font ramah disleksia
- Kontras tinggi / gelap
- Saturasi & monokrom
- Text To Speech
- Cursor besar
- Pengaturan tersimpan otomatis

## Instalasi
```bash
npm install vens-accessibility
```

## Penggunaan
```tsx
import "vens-accessibility/src/styles/accessibility.css";
import { AccessibilityProvider, AccessibilityWidget } from "vens-accessibility";

export default function RootLayout({ children }) {
  return (
    <AccessibilityProvider>
      {children}
      <AccessibilityWidget />
    </AccessibilityProvider>
  );
}
```

✅ Siap production  
✅ Bisa dipakai di banyak aplikasi