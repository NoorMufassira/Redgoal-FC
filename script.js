// script.js
document.getElementById('newsletter').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('You are now subscribed to RedGoal FC!');
});
// script.js for about.html
document.addEventListener("DOMContentLoaded", () => {
  // Simple nav active highlighting
  const navLinks = document.querySelectorAll("nav ul li a");
  navLinks.forEach(link => {
    if (window.location.pathname.includes(link.getAttribute("href"))) {
      link.classList.add("active");
    }
  });

  // Fade-in effect for scroll
  const faders = document.querySelectorAll(".leader");

  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = "translateY(0)";
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.2,
  });

  faders.forEach(el => {
    el.style.opacity = 0;
    el.style.transform = "translateY(20px)";
    appearOnScroll.observe(el);
  });
});
