// Active nav highlight
const here = location.pathname.replace(/\/+$/, '') || '/';
document.querySelectorAll('.menu a').forEach(a=>{
  const href = new URL(a.href);
  const path = href.pathname.replace(/\/+$/, '') || '/';
  if (path === here) a.setAttribute('aria-current','page');
});

// Reveal on load (hero text)
window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-reveal]').forEach(el => el.classList.add('in'));
});

// Reveal on scroll (sections/cards)
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target);} });
},{threshold:0.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
