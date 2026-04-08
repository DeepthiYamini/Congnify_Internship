/**
 * main.js — NEONSASS interactive behaviours
 *
 * Sections:
 *  1. Custom Cursor
 *  2. Mobile Menu Toggle
 *  3. Counter Animation (IntersectionObserver)
 *  4. Signup Form Submit
 */

// ─── 1. CUSTOM CURSOR ────────────────────────────────────────────────────────
(function initCursor() {
  const cursor = document.getElementById('cursor');
  const ring   = document.getElementById('cursorRing');

  if (!cursor || !ring) return;

  let mouseX = 0, mouseY = 0;
  let ringX  = 0, ringY  = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function animateCursor() {
    // Dot follows immediately
    cursor.style.left = mouseX + 'px';
    cursor.style.top  = mouseY + 'px';

    // Ring lags behind with lerp
    ringX += (mouseX - ringX) * 0.12;
    ringY += (mouseY - ringY) * 0.12;
    ring.style.left = ringX + 'px';
    ring.style.top  = ringY + 'px';

    requestAnimationFrame(animateCursor);
  }

  animateCursor();

  // Expand cursor on interactive elements
  const interactiveEls = document.querySelectorAll('a, button, .navbar__bars');

  interactiveEls.forEach((el) => {
    el.addEventListener('mouseenter', () => {
      cursor.style.width  = '20px';
      cursor.style.height = '20px';
      ring.style.width    = '60px';
      ring.style.height   = '60px';
      ring.style.opacity  = '0.2';
    });
    el.addEventListener('mouseleave', () => {
      cursor.style.width  = '12px';
      cursor.style.height = '12px';
      ring.style.width    = '36px';
      ring.style.height   = '36px';
      ring.style.opacity  = '0.5';
    });
  });
})();

// ─── 2. MOBILE MENU TOGGLE ───────────────────────────────────────────────────
(function initMobileMenu() {
  const menuToggle = document.getElementById('mobile-menu');
  const navMenu    = document.getElementById('nav-menu');

  if (!menuToggle || !navMenu) return;

  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('open');
  });

  // Close menu when a nav link is clicked
  navMenu.querySelectorAll('.navbar__links').forEach((link) => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
    });
  });
})();

// ─── 3. COUNTER ANIMATION ────────────────────────────────────────────────────
(function initCounters() {
  /**
   * Animates a numeric counter from 0 to `target`.
   *
   * @param {HTMLElement} el        - The element whose text content is updated.
   * @param {number}      target    - The final numeric value.
   * @param {string}      suffix    - Unit suffix appended after the number (e.g. '%', 'ms').
   * @param {number}      duration  - Animation duration in milliseconds.
   */
  function animateCounter(el, target, suffix, duration) {
    let current  = 0;
    const frameMs = 16;                          // ~60fps
    const step   = target / (duration / frameMs);

    const timer = setInterval(() => {
      current += step;

      if (current >= target) {
        el.textContent = target + suffix;
        clearInterval(timer);
        return;
      }

      el.textContent = Math.floor(current) + suffix;
    }, frameMs);
  }

  const statsSection = document.querySelector('.hero__stats');
  if (!statsSection) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        animateCounter(document.getElementById('stat1'), 12_847,    '',    1800);
        animateCounter(document.getElementById('stat2'), 4_200_000, '',    1800);
        animateCounter(document.getElementById('stat3'), 99,        '%',   1500);
        animateCounter(document.getElementById('stat4'), 12,        'ms',  1200);

        observer.disconnect(); // Run once
      });
    },
    { threshold: 0.3 }
  );

  observer.observe(statsSection);
})();

// ─── 4. SIGNUP FORM ──────────────────────────────────────────────────────────
(function initSignupForm() {
  const form = document.getElementById('signupForm');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const btn          = this.querySelector('.signup__submit');
    const originalHTML = btn.innerHTML;

    // Success state
    btn.innerHTML          = 'Access Granted <i class="fas fa-check"></i>';
    btn.style.background   = 'rgba(0,242,254,1)';
    btn.style.color        = '#000';

    // Reset after 3 s
    setTimeout(() => {
      btn.innerHTML        = originalHTML;
      btn.style.background = '';
      btn.style.color      = '';
      form.reset();
    }, 3000);
  });
})();