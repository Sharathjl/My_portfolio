// script.js

const typedText = document.getElementById("typed");

<script>
  function toggleMenu() {
    const menu = document.getElementById("mobileMenu");
    menu.classList.toggle("active");
  }
</script>

// Customize the list of roles here
const words = ["VLSI Enthusiast", "RTL Designer", "Digital Logic Developer", "ASIC Explorer"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeSpeed = 100;

function type() {
  const currentWord = words[wordIndex];
  const partialWord = currentWord.substring(0, charIndex);

  typedText.textContent = partialWord;

  if (!isDeleting && charIndex < currentWord.length) {
    charIndex++;
    setTimeout(type, typeSpeed);
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(type, typeSpeed / 2);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) wordIndex = (wordIndex + 1) % words.length;
    setTimeout(type, 800);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  type();
});
