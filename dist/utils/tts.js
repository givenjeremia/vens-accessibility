export function speakSelectedText(lang = "id-ID") {
    if (!("speechSynthesis" in window))
        return;
    const text = window.getSelection()?.toString();
    if (!text)
        return;
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = lang;
    window.speechSynthesis.speak(u);
}
