// Dynamically set the current year
document.getElementById("year").textContent = new Date().getFullYear();

// Display the last modified date
document.getElementById(
  "lastModified"
).textContent = `Last Modified: ${document.lastModified}`;
