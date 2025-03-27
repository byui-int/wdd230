document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("menu");

  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");

    // Toggle between hamburger and "X"
    if (navMenu.classList.contains("active")) {
      hamburger.innerHTML = "✖"; // X symbol when open
    } else {
      hamburger.innerHTML = "&#9776;"; // ≡ symbol when closed
    }
  });
});
