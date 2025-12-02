// reveal elements when scrolling
const elements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');

function revealOnScroll() {
    elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            el.classList.add('show');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('resize', revealOnScroll);
document.addEventListener('DOMContentLoaded', revealOnScroll);

// simple nav toggle for mobile
function toggleMenu() {
  const nav = document.querySelector('.nav-links');
  if (!nav) return;
  nav.classList.toggle('active');
}
