const visitCount = document.getElementById("visit-count");
let visits = localStorage.getItem("visits") || 0;
visits++;
localStorage.setItem("visits", visits);
visitCount.textContent = visits;
