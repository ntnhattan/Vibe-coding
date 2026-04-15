const form = document.getElementById("loginForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const togglePasswordButton = document.getElementById("togglePassword");
const statusMessage = document.getElementById("statusMessage");

togglePasswordButton.addEventListener("click", () => {
  const isHidden = passwordInput.type === "password";
  passwordInput.type = isHidden ? "text" : "password";
  togglePasswordButton.textContent = isHidden ? "Hide" : "Show";
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  statusMessage.className = "status-message";

  if (!email || !password) {
    statusMessage.textContent = "Enter both your email and password.";
    statusMessage.classList.add("error");
    return;
  }

  if (!email.includes("@")) {
    statusMessage.textContent = "Use a valid email address.";
    statusMessage.classList.add("error");
    return;
  }

  if (password.length < 8) {
    statusMessage.textContent = "Password must be at least 8 characters.";
    statusMessage.classList.add("error");
    return;
  }

  statusMessage.textContent = "Login request validated. Connect this form to your backend next.";
  statusMessage.classList.add("success");
});
