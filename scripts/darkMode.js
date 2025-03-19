document.addEventListener("DOMContentLoaded", () => {
  const darkModeToggle = document.getElementById("dark-mode-toggle");
  const body = document.body;

  // Load dark mode preference
  if (localStorage.getItem("dark-mode") === "enabled") {
    body.classList.add("dark-mode");
  }

  // Toggle dark mode
  darkModeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    // Save preference in localStorage
    if (body.classList.contains("dark-mode")) {
      localStorage.setItem("dark-mode", "enabled");
      darkModeToggle.textContent = "☀️"; // Change icon to sun
    } else {
      localStorage.setItem("dark-mode", "disabled");
      darkModeToggle.textContent = "🌙"; // Change icon to moon
    }
  });
});
