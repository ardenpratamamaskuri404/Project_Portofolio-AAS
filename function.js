const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

function resetForm() {
  const form = document.getElementById('contactForm');
  if (form) {
      form.reset(); 
      alert('Semua kolom telah di-reset!');
  }
}