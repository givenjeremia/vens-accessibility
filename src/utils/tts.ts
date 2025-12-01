export function speakSelectedText(lang: string = "id-ID") {
  // Cek dukungan browser
  if (typeof window === "undefined") return;

  if (!("speechSynthesis" in window)) {
    alert("Browser Anda tidak mendukung Text To Speech");
    return;
  }

  const selectedText = window.getSelection()?.toString();

  if (!selectedText || selectedText.trim() === "") {
    alert("Silakan blok teks yang ingin dibacakan");
    return;
  }

  // Stop suara sebelumnya
  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(selectedText);
  utterance.lang = lang;       // contoh: id-ID, en-US
  utterance.rate = 1;          // kecepatan
  utterance.pitch = 1;         // nada
  utterance.volume = 1;        // volume

  window.speechSynthesis.speak(utterance);
}
