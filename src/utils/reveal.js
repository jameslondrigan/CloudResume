// src/utils/reveal.js
export function initReveal() {
  // Mark the page ready once everything’s loaded (for the hero/header fade)
  window.addEventListener('load', () => {
    document.body.classList.add('ready');
  });

  const toReveal = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    // Very old browsers: just show everything
    toReveal.forEach(el => el.classList.add('in'));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { rootMargin: '0px 0px -10% 0px' });

  toReveal.forEach(el => io.observe(el));
}
