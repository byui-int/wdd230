const form = document.getElementById("myForm");
const password = document.getElementById("password");
const cpassword = document.getElementById("cpassword");
const message = document.getElementById("message");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form from submitting

  if (password.value !== cpassword.value) {
    message.textContent = "Passwords do not match.";
    message.className = "error";
  } else {
    message.textContent = "Passwords match. Form submitted!";
    message.className = "success";

    // You can submit the form here or perform other actions
    // form.submit();
  }
});

// Optional: live validation
cpassword.addEventListener("input", () => {
  if (cpassword.value === password.value) {
    message.textContent = "Passwords match.";
    message.className = "success";
  } else {
    message.textContent = "Passwords do not match.";
    message.className = "error";
  }
});
