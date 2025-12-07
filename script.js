// ===============================
// SHOW LIVE UTC TIME (if element exists)
// ===============================
function showTime() {
  const element = document.getElementById("currentTime");
  if (element) {
    element.textContent = new Date().toUTCString();
  }
}

// ===============================
// HERO TYPING + CLOCK
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  // optional clock
  showTime();
  setInterval(showTime, 1000);

  // ----- HERO CAPTION TYPING (home page) -----
  const typingEl = document.getElementById("typingText");
  if (typingEl) {
    const fullText = "Solving business challenges with data-driven intelligence";
    let index = 0;
    const speed = 45; // ms per character

    function typeNextChar() {
      typingEl.textContent = fullText.slice(0, index);
      index += 1;

      if (index <= fullText.length) {
        setTimeout(typeNextChar, speed);
      }
    }

    typingEl.style.visibility = "visible";
    typeNextChar();
  }
});
