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

/* ── Dynamic Experience Calculation ── */
function calculateYearsOfExperience() {
  const startDate = new Date('2018-01-01');
  const now = new Date();
  
  let years = now.getFullYear() - startDate.getFullYear();
  let months = now.getMonth() - startDate.getMonth();
  
  if (months < 0) {
    years--;
    months += 12;
  }
  if (months > 5) {
    years++;
  }
  
  const expValueElements = document.querySelectorAll('.years-exp-value');
  expValueElements.forEach(el => {
    el.setAttribute('data-target', years);
    el.classList.add('num-counter');
    el.textContent = '0';
  });
}

/* ── Number Counting Animation ── */
function initCounters() {
  const counters = document.querySelectorAll('.num-counter');
  const duration = 2500; // lengthened duration
  
  const counterObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute('data-target'), 10);
        if (isNaN(target)) return;
        
        const startTime = performance.now();
        
        function updateCounter(currentTime) {
          const elapsedTime = currentTime - startTime;
          const progress = Math.min(elapsedTime / duration, 1);
          // Ease Out Quad gives a more natural slow-down without freezing
          const easeOut = 1 - (1 - progress) * (1 - progress);
          
          // Math.round resolves the "hang" at target-1 values.
          el.textContent = Math.round(easeOut * target);
          
          if (progress < 1) {
            requestAnimationFrame(updateCounter);
          } else {
            el.textContent = target; 
          }
        }
        
        requestAnimationFrame(updateCounter);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
  
  counters.forEach(c => counterObserver.observe(c));
}

document.addEventListener('DOMContentLoaded', () => {
  calculateYearsOfExperience();
  initCounters();
});

/* ── Typewriter Effect ── */
document.addEventListener('DOMContentLoaded', () => {
  const line1 = document.getElementById('typewriter-line1');
  const line2 = document.getElementById('typewriter-line2');
  const cursor = document.getElementById('typewriter-cursor');
  if (!line1 || !line2) return;
  
  const text1 = "Ahmed Samir";
  const text2 = "Abd El Aal";
  let i = 0, j = 0;
  
  // Give it slightly randomized human pacing
  function typeLine1() {
    if (i < text1.length) {
      line1.textContent += text1.charAt(i);
      i++;
      setTimeout(typeLine1, 60 + Math.random() * 60);
    } else {
      setTimeout(typeLine2, 200);
    }
  }
  
  function typeLine2() {
    if (j < text2.length) {
      line2.textContent += text2.charAt(j);
      j++;
      setTimeout(typeLine2, 60 + Math.random() * 60);
    } else {
      setTimeout(() => cursor.classList.add('opacity-0'), 3000); // fade out cursor after 3 secs
    }
  }
  
  // Start typing after initial fade-up animation (0.7s)
  setTimeout(() => {
    if (cursor) cursor.classList.remove('opacity-0');
    typeLine1();
  }, 700);
});

/* ── Magnetic Cursor Glow ── */
document.addEventListener('DOMContentLoaded', () => {
  // Only initialize on devices with a precise pointer (mouse)
  if (window.matchMedia("(pointer: fine)").matches) {
    const glow = document.createElement('div');
    glow.className = 'pointer-events-none fixed inset-0 transition-opacity duration-500 opacity-0 mix-blend-screen';
    glow.style.zIndex = '-10'; // Keep behind content
    document.body.appendChild(glow);

    document.addEventListener('mousemove', (e) => {
      glow.style.opacity = '1';
      // Dynamic soft blue radial gradient following cursor
      glow.style.background = `radial-gradient(600px circle at ${e.clientX}px ${e.clientY}px, rgba(59, 130, 246, 0.15), transparent 60%)`;
    });
  }
});

/* ── 3D Card Tilt Effect ── */
document.addEventListener('DOMContentLoaded', () => {
  // Only initialize on devices with a precise pointer (mouse)
  if (window.matchMedia("(pointer: fine)").matches) {
    // Target stat cards, project wrappers, and experience list items
    const tiltElements = document.querySelectorAll('.stat-card, #projects .section-fade.group, #experience .bg-navy-900');

    tiltElements.forEach(el => {
      el.addEventListener('mousemove', (e) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        // Calculate rotation (-4 to 4 degrees)
        const rotateX = ((y - centerY) / centerY) * -4;
        const rotateY = ((x - centerX) / centerX) * 4;
        
        el.style.transform = `perspective(1000px) scale(1.02) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        el.style.transition = 'transform 0.1s ease-out';
      });
      
      el.addEventListener('mouseleave', () => {
        el.style.transform = `perspective(1000px) scale(1) rotateX(0deg) rotateY(0deg)`;
        // Spring back to original state with bounce
        el.style.transition = 'transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)';
      });
    });
  }
});

/* ── Project Modal Logic ── */
const projectData = {
  'pro-stores': {
    title: 'Pro Stores Manager',
    desc: '<div class="space-y-4"><p><strong class="text-emerald-400">Situation:</strong> Retail environments faced severe disruptions and data loss during frequent network outages.</p><p><strong class="text-emerald-400">Task:</strong> Architect a bulletproof SaaS Point-of-Sale system that guarantees 100% operational uptime irrespective of connection status.</p><p><strong class="text-emerald-400">Action:</strong> Engineered a robust Offline-First application using .NET MAUI Blazor Hybrid, featuring an advanced local SQLite synchronization engine that seamlessly maps to centralized nodes via RabbitMQ when connectivity resumes.</p><p><strong class="text-emerald-400">Result:</strong> Completely eliminated downtime for POS terminals, securing 50,000+ daily transactions with zero data-loss during complex reconnection phases.</p></div>',
    tech: ['.NET MAUI', 'Blazor Hybrid', 'SQLite', 'Offline-First', 'Hangfire', 'RabbitMQ']
  },
  'appify': {
    title: 'Appify — No-Code Platform',
    desc: '<div class="space-y-4"><p><strong class="text-violet-400">Situation:</strong> Non-technical business teams required a rapid way to deploy functional mobile apps without heavy engineering overhead.</p><p><strong class="text-violet-400">Task:</strong> Architect a scalable drag-and-drop mobile app builder with automated, intelligent backend scaffolding.</p><p><strong class="text-violet-400">Action:</strong> Designed a full-stack microservices ecosystem leveraging Ionic/Capacitor for the cross-platform frontend builder, coupled with a dynamic .NET Core backend that automatically generates secure REST APIs and PostgreSQL schemas on the fly.</p><p><strong class="text-violet-400">Result:</strong> Empowered 100+ B2B clients to ship production-ready applications 10x faster natively to App Stores, scaling efficiently on a Kubernetes infrastructure.</p></div>',
    tech: ['Ionic/Capacitor', 'Angular v22', '.NET Core', 'Docker', 'PostgreSQL', 'Microservices']
  },
  'eazy-order': {
    title: 'Eazy-Order — Cloud POS',
    desc: '<div class="space-y-4"><p><strong class="text-cyan-400">Situation:</strong> High-traffic restaurants experienced severe lag and order-dropping during peak rush hours using legacy monolithic systems.</p><p><strong class="text-cyan-400">Task:</strong> Develop a high-performance Restaurant Management System capable of handling thousands of concurrent requests seamlessly.</p><p><strong class="text-cyan-400">Action:</strong> Integrated RabbitMQ advanced message brokering to decouple order taking from backend processing. Built robust real-time SignalR hubs to instantly update kitchen displays and driver tracking apps without database polling.</p><p><strong class="text-cyan-400">Result:</strong> Successfully processed 10,000+ concurrent orders at peak hours with sub-200ms latency, drastically improving operational agility.</p></div>',
    tech: ['RabbitMQ', '.NET Core APIs', 'PostgreSQL', 'Real-Time Sync', 'SignalR']
  }
};

window.openProjectModal = function(id) {
  const modal = document.getElementById('project-modal');
  const modalContent = document.getElementById('project-modal-content');
  const data = projectData[id];
  if (!modal || !data) return;
  
  // Populate Data
  document.getElementById('modal-title').textContent = data.title;
  document.getElementById('modal-description').innerHTML = data.desc;
  
  const techContainer = document.getElementById('modal-tech');
  techContainer.innerHTML = data.tech.map(t => `<span class="tech-tag">${t}</span>`).join('');
  
  // Show Modal
  modal.classList.remove('opacity-0', 'pointer-events-none');
  modalContent.classList.remove('scale-95');
  modalContent.classList.add('scale-100');
  
  // Prevent body scroll
  document.body.style.overflow = 'hidden';
  
  // Re-initialize any new icons
  if (window.lucide) {
    window.lucide.createIcons();
  }
};

window.closeProjectModal = function() {
  const modal = document.getElementById('project-modal');
  const modalContent = document.getElementById('project-modal-content');
  if (!modal) return;
  
  modal.classList.add('opacity-0', 'pointer-events-none');
  modalContent.classList.remove('scale-100');
  modalContent.classList.add('scale-95');
  
  // Restore scroll
  document.body.style.overflow = '';
};

/* ── Dynamic Footer Year ── */
document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});
