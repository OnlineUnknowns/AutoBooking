/* =========================================================
   BOOKING AUTO BOT — SITE SCRIPT
   1. Config
   2. Navigation (mobile menu, sticky state)
   3. Download link wiring
   4. Scroll reveal (IntersectionObserver)
   5. Stat count-up
   6. Hero product visualization sequence
   7. Footer year
   ========================================================= */

(function () {
  'use strict';

  /* ---------- 1. CONFIG ----------
     Update DOWNLOAD_URL with the real GitHub Releases URL (or a direct
     link to BookingAutoBot-Setup.exe) once the public repository is live.
     This is the ONLY place the download destination needs to change —
     every "Download for Windows" button reads from it. */
  var CONFIG = {
    DOWNLOAD_URL: 'https://www.mediafire.com/file/qaan2af6fdvk7mw/BookingAutoBot-Setup.rar/file',
    REDUCED_MOTION: window.matchMedia('(prefers-reduced-motion: reduce)').matches
  };

  /* ---------- 2. NAVIGATION ---------- */
  var navToggle = document.getElementById('navToggle');
  var mobileMenu = document.getElementById('mobileMenu');

  if (navToggle && mobileMenu) {
    navToggle.addEventListener('click', function () {
      var isOpen = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!isOpen));
      navToggle.setAttribute('aria-label', isOpen ? 'Open menu' : 'Close menu');
      if (isOpen) {
        mobileMenu.setAttribute('hidden', '');
      } else {
        mobileMenu.removeAttribute('hidden');
      }
    });

    mobileMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.setAttribute('aria-label', 'Open menu');
        mobileMenu.setAttribute('hidden', '');
      });
    });
  }

  /* ---------- 3. DOWNLOAD LINK WIRING ---------- */
  document.querySelectorAll('[data-download-url], #heroDownloadBtn').forEach(function (btn) {
    btn.setAttribute('href', CONFIG.DOWNLOAD_URL);
    btn.setAttribute('target', '_blank');
    btn.setAttribute('rel', 'noopener');
  });

  /* ---------- 4. SCROLL REVEAL ---------- */
  var revealTargets = document.querySelectorAll(
    '.section__head, .section__col, .benefit, .region-group, .provider-row, ' +
    '.feature-system, .office-item, .step, .faq-item, .download-panel, .mini-panel'
  );

  revealTargets.forEach(function (el) { el.setAttribute('data-reveal', ''); });

  if ('IntersectionObserver' in window && !CONFIG.REDUCED_MOTION) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry, i) {
          if (entry.isIntersecting) {
            var delay = (i % 6) * 70;
            setTimeout(function () {
              entry.target.classList.add('is-visible');
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    revealTargets.forEach(function (el) { observer.observe(el); });
  } else {
    revealTargets.forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* ---------- 5. STAT COUNT-UP ---------- */
  function animateCount(el) {
    var target = parseInt(el.getAttribute('data-count-to'), 10) || 0;
    var suffix = el.getAttribute('data-suffix') || '';
    if (CONFIG.REDUCED_MOTION) {
      el.textContent = target + suffix;
      return;
    }
    var duration = 800;
    var start = null;

    function step(ts) {
      if (start === null) start = ts;
      var progress = Math.min((ts - start) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * target) + suffix;
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  var statEls = document.querySelectorAll('[data-count-to]');
  if ('IntersectionObserver' in window && statEls.length) {
    var statObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            animateCount(entry.target);
            statObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    statEls.forEach(function (el) { statObserver.observe(el); });
  } else {
    statEls.forEach(animateCount);
  }

  /* ---------- 6. HERO PRODUCT VISUALIZATION SEQUENCE ----------
     Deterministic, looping sequence representing the real product flow:
     Monitoring -> Scanning -> Slot detected -> Telegram alert sent.
     Not randomized, not decorative — mirrors the app's own log console
     and status indicators described in the product report. */
  var logLine = document.getElementById('logLine');
  var detectedStatus = document.getElementById('detectedStatus');
  var detectedTask = document.getElementById('detectedTask');
  var telegramToast = document.getElementById('telegramToast');

  var SEQUENCE = [
    { text: 'Checking VFS Rabat calendar — Schengen, National Visa…', duration: 2600, state: 'monitoring' },
    { text: 'Scanning available appointment dates…', duration: 2200, state: 'monitoring' },
    { text: 'Slot detected — VFS Rabat, Schengen', duration: 2000, state: 'detected' },
    { text: 'Telegram alert sent ✓', duration: 2800, state: 'alert' }
  ];

  function runHeroSequence(index) {
    var step = SEQUENCE[index % SEQUENCE.length];
    if (logLine) logLine.textContent = step.text;

    if (detectedStatus) {
      var textEl = detectedStatus.querySelector('.app-task__status-text');
      if (step.state === 'detected' || step.state === 'alert') {
        detectedStatus.setAttribute('data-state', 'detected');
        if (textEl) textEl.textContent = 'Slot found';
        if (detectedTask) detectedTask.classList.add('is-detected');
      } else {
        detectedStatus.setAttribute('data-state', 'monitoring');
        if (textEl) textEl.textContent = 'Monitoring';
        if (detectedTask) detectedTask.classList.remove('is-detected');
      }
    }

    if (telegramToast) {
      if (step.state === 'alert') {
        telegramToast.classList.add('is-visible');
      } else {
        telegramToast.classList.remove('is-visible');
      }
    }

    setTimeout(function () {
      runHeroSequence(index + 1);
    }, step.duration);
  }

  if (logLine && !CONFIG.REDUCED_MOTION) {
    runHeroSequence(0);
  } else if (logLine) {
    logLine.textContent = 'Slot detected — VFS Rabat, Schengen. Telegram alert sent.';
  }

  /* ---------- 7. FOOTER YEAR ---------- */
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

})();
