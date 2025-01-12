//for responsive navbar
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Example: Expand the search bar with an animated effect
document.getElementById("search-bar").addEventListener("focus", function () {
  this.style.transition = "width 0.4s ease-in-out";
});

// Scroll Animation - Fade In
window.addEventListener("scroll", function () {
  const fadeIns = document.querySelectorAll(".fade-in");

  fadeIns.forEach((fadeIn) => {
    const rect = fadeIn.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      fadeIn.classList.add("visible");
    }
  });
});

// Scroll Animation - Fade In
window.addEventListener("scroll", function () {
  const fadeIns = document.querySelectorAll(".fade-in");

  fadeIns.forEach((fadeIn) => {
    const rect = fadeIn.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      fadeIn.classList.add("visible");
    }
  });
});

// Form Submission (this is just a demo and won't actually send emails)
document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you for reaching out! We will get back to you soon.");
    document.getElementById("contact-form").reset();
  });
