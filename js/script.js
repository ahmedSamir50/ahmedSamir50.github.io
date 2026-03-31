/* =========================================================
   Ahmed Samir Portfolio – script.js
   Vanilla ES6+: nav scroll, mobile menu, Intersection Observer,
   active nav links, scroll-to-top
   ========================================================= */

'use strict';

/* ── Navbar scroll effect ── */
const navbar = document.getElementById('navbar');
const scrollTopBtn = document.getElementById('scroll-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    navbar.classList.add('scrolled');
    scrollTopBtn.classList.add('visible');
  } else {
    navbar.classList.remove('scrolled');
    scrollTopBtn.classList.remove('visible');
  }
  updateActiveNav();
}, { passive: true });

/* ── Active nav link on scroll ── */
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section[id]');

function updateActiveNav() {
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
  });
  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
  });
}

/* ── Mobile menu ── */
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu    = document.getElementById('mobile-menu');

mobileMenuBtn?.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.toggle('hidden');
  const icon = mobileMenuBtn.querySelector('[data-lucide]');
  icon?.setAttribute('data-lucide', isOpen ? 'menu' : 'x');
  lucide.createIcons();
});

// Close mobile menu on link click
mobileMenu?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
    const icon = mobileMenuBtn.querySelector('[data-lucide]');
    icon?.setAttribute('data-lucide', 'menu');
    lucide.createIcons();
  });
});

/* ── Scroll-to-top button ── */
scrollTopBtn?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ── Intersection Observer – scroll reveal ── */
const observerConfig = {
  threshold: 0.1,
  rootMargin: '0px 0px -60px 0px'
};

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target); // animate once
    }
  });
}, observerConfig);

document.querySelectorAll('.section-fade').forEach(el => {
  revealObserver.observe(el);
});

/* ── Init Lucide icons ── */
document.addEventListener('DOMContentLoaded', () => {
  lucide.createIcons();
});

/* ── Smooth scroll for all internal anchor links ── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = 72; // navbar height
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});
