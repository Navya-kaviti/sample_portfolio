// Set year in footer
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("year").textContent = new Date().getFullYear();
});

// Simple form handler
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("formAlert").style.display = "block";
  setTimeout(() => {
    document.getElementById("formAlert").style.display = "none";
  }, 3500);
  this.reset();
});

const navLinks = document.querySelectorAll('.nav-close');
  const navbarCollapse = document.getElementById('navbarNav');

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      let bsCollapse = new bootstrap.Collapse(navbarCollapse, { toggle: false });
      bsCollapse.hide();
    });
  });