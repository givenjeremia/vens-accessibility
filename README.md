
# vens-accessibility ♿

Library Accessibility lengkap untuk Next.js dengan popup kiri & tombol floating.

## Fitur Utama

### 🔍 Zoom
Memperbesar seluruh halaman termasuk teks dan gambar.

### 🖱 Big Cursor
Cursor besar untuk pengguna low vision & motor assistance.

### 📖 Reading Guide
Garis panduan membaca horizontal.

### 🎤 Text To Speech
Membaca teks yang dipilih user.

### 🎨 Color Adjustments
- Dark / High / Light Contrast
- Monochrome / Saturation
- Brightness & Blue light

### 🔤 Text Adjustments
- Font size
- Font weight
- Letter spacing
- Line height
- Word spacing
- Dyslexia font
- Highlight links & titles

## Cara Pakai

```tsx
import "vens-accessibility/src/styles/accessibility.css";
import { AccessibilityProvider, AccessibilityWidget } from "vens-accessibility";

export default function Layout({ children }) {
  return (
    <AccessibilityProvider>
      {children}
      <AccessibilityWidget />
    </AccessibilityProvider>
  );
}
```

## Catatan
- State tersimpan otomatis
- Tidak butuh library tambahan
- Cocok untuk WCAG compliance
