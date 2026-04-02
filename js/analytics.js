/* =========================================================
   Ahmed Samir Portfolio – analytics.js
   Custom GA4 Event Tracking:
   - CV download (view)
   - Project card clicks (with project name)
   - Contact link interactions (email, LinkedIn, GitHub)
   - Section scroll depth milestones (25%, 50%, 75%, 100%)
   - Skills section engagement
   - Outbound link awareness
   ========================================================= */

'use strict';

/* ── Safe gtag wrapper (guard if GA is blocked by an adblocker) ── */
function track(eventName, params) {
  try {
    if (typeof gtag === 'function') {
      gtag('event', eventName, params);
    }
  } catch (e) {
    // silently fail — never break the portfolio UI
  }
}

document.addEventListener('DOMContentLoaded', () => {

  /* ─────────────────────────────────────────────────────────────
     1. CV / RESUME CLICK
     Fires when the user clicks either the nav CV button
     or the mobile "Download CV" link.
  ───────────────────────────────────────────────────────────── */
  document.querySelectorAll('a[href*="drive.google.com"]').forEach(link => {
    link.addEventListener('click', () => {
      track('cv_download_click', {
        event_category: 'engagement',
        event_label: 'CV / Resume',
        link_url: link.href
      });
    });
  });


  /* ─────────────────────────────────────────────────────────────
     2. PROJECT CARD CLICKS
     Captures which project the visitor was interested in.
  ───────────────────────────────────────────────────────────── */
  document.querySelectorAll('.project-card, [data-category]').forEach(card => {
    card.addEventListener('click', (e) => {
      // Try to get project title from the card's heading
      const titleEl = card.querySelector('h3, h2, [class*="font-bold"]');
      const projectName = titleEl ? titleEl.textContent.trim() : 'Unknown Project';
      const category = card.getAttribute('data-category') || 'general';

      track('project_card_click', {
        event_category: 'projects',
        event_label: projectName,
        project_category: category
      });
    });
  });

  /* Also track "View Full Project" links inside project detail pages */
  document.querySelectorAll('a[href*="/projects/"]').forEach(link => {
    link.addEventListener('click', () => {
      const projectSlug = link.href.split('/projects/')[1]?.replace(/\/$/, '') || 'unknown';
      track('project_detail_open', {
        event_category: 'projects',
        event_label: projectSlug
      });
    });
  });


  /* ─────────────────────────────────────────────────────────────
     3. CONTACT INTERACTIONS
     Tracks every contact channel the visitor taps.
  ───────────────────────────────────────────────────────────── */
  const contactTargets = [
    { selector: 'a[href^="mailto:"]',                 label: 'Email' },
    { selector: 'a[href*="linkedin.com"]',             label: 'LinkedIn' },
    { selector: 'a[href*="github.com/ahmedSamir50"]',  label: 'GitHub' },
  ];

  contactTargets.forEach(({ selector, label }) => {
    document.querySelectorAll(selector).forEach(link => {
      link.addEventListener('click', () => {
        track('contact_click', {
          event_category: 'contact',
          event_label: label,
          link_url: link.href
        });
      });
    });
  });


  /* ─────────────────────────────────────────────────────────────
     4. SKILLS SECTION ENGAGEMENT
     Fires once when the Skills section enters the viewport.
  ───────────────────────────────────────────────────────────── */
  const skillsSection = document.getElementById('skills');
  if (skillsSection) {
    const skillsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          track('skills_section_viewed', {
            event_category: 'engagement',
            event_label: 'Skills Section'
          });
          skillsObserver.unobserve(skillsSection);
        }
      });
    }, { threshold: 0.3 });
    skillsObserver.observe(skillsSection);
  }


  /* ─────────────────────────────────────────────────────────────
     5. OUTBOUND LINK TRACKING (generic)
     Catches any external link not already tracked above.
  ───────────────────────────────────────────────────────────── */
  document.querySelectorAll('a[target="_blank"]').forEach(link => {
    // Skip already-handled links
    if (
      link.href.includes('drive.google.com') ||
      link.href.includes('linkedin.com') ||
      link.href.includes('github.com/ahmedSamir50')
    ) return;

    link.addEventListener('click', () => {
      track('outbound_link_click', {
        event_category: 'outbound',
        event_label: link.href,
        link_text: link.textContent.trim().slice(0, 60)
      });
    });
  });

}); // end DOMContentLoaded


/* ─────────────────────────────────────────────────────────────
   6. SCROLL DEPTH MILESTONES  (25 / 50 / 75 / 100 %)
   Fires once per milestone so you can see how far visitors read.
───────────────────────────────────────────────────────────── */
(function initScrollDepth() {
  const milestones = [25, 50, 75, 100];
  const fired = new Set();

  window.addEventListener('scroll', () => {
    const scrollTop    = window.scrollY || document.documentElement.scrollTop;
    const docHeight    = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPct    = docHeight > 0 ? Math.round((scrollTop / docHeight) * 100) : 0;

    milestones.forEach(milestone => {
      if (scrollPct >= milestone && !fired.has(milestone)) {
        fired.add(milestone);
        track('scroll_depth', {
          event_category: 'engagement',
          event_label: `${milestone}%`,
          scroll_depth_pct: milestone
        });
      }
    });
  }, { passive: true });
})();


/* ─────────────────────────────────────────────────────────────
   7. TIME ON PAGE MILESTONES (30s / 60s / 2min / 5min)
   Gives a strong signal of genuine engagement vs. bounces.
───────────────────────────────────────────────────────────── */
(function initTimeOnPage() {
  const timepoints = [
    { seconds: 30,  label: '30 seconds' },
    { seconds: 60,  label: '1 minute'   },
    { seconds: 120, label: '2 minutes'  },
    { seconds: 300, label: '5 minutes'  },
  ];

  timepoints.forEach(({ seconds, label }) => {
    setTimeout(() => {
      track('time_on_page', {
        event_category: 'engagement',
        event_label: label,
        seconds_on_page: seconds
      });
    }, seconds * 1000);
  });
})();


/* ─────────────────────────────────────────────────────────────
   8. SECTION IMPRESSIONS via IntersectionObserver
   Tracks which named sections a visitor actually sees.
───────────────────────────────────────────────────────────── */
(function initSectionImpressions() {
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const sectionId = entry.target.id || entry.target.dataset.section || 'unnamed';
        track('section_impression', {
          event_category: 'visibility',
          event_label: sectionId
        });
        sectionObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });

  // Observe all named sections
  document.querySelectorAll('section[id]').forEach(sec => {
    sectionObserver.observe(sec);
  });
})();
