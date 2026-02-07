document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const feedback = document.getElementById("feedback");

  if (name === "" || email === "" || message === "") {
    feedback.textContent = "Please fill in all fields.";
    feedback.className = "error";
  } else {
    feedback.textContent = "Form submitted successfully!";
    feedback.className = "success";

    // Optional: reset form
    document.getElementById("contactForm").reset();
  }
});
