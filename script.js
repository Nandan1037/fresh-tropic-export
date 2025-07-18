// Script for form submission
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Collect form values (optional)
    const name = form.querySelector("input[type='text']").value;
    const email = form.querySelector("input[type='email']").value;
    const message = form.querySelector("textarea").value;

    // Basic form validation
    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }

    // Simulate message send
    alert("Thank you " + name + "! Your message has been sent. We'll contact you soon.");
    
    // Reset form
    form.reset();
  });
});
