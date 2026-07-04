(() => {
  'use strict';

  /* ---------- Theme toggle (persisted) ---------- */
  const root = document.documentElement;
  const themeToggle = document.getElementById('themeToggle');
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (savedTheme) {
    root.setAttribute('data-theme', savedTheme);
  } else if (prefersDark) {
    root.setAttribute('data-theme', 'dark');
  }

  themeToggle.addEventListener('click', () => {
    const current = root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    const next = current === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  });

  /* ---------- Mobile nav ---------- */
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.classList.toggle('open', isOpen);
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });

  /* ---------- Sticky navbar shadow on scroll ---------- */
  const navbar = document.getElementById('navbar');
  const onScroll = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 12);
    scrollTopBtn.classList.toggle('visible', window.scrollY > 500);
  };
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---------- Scroll to top ---------- */
  const scrollTopBtn = document.getElementById('scrollTop');
  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  onScroll();

  /* ---------- Rotating hero role text ---------- */
  const roles = ['Android Developer', 'React Developer', 'Final-Year IT Student', 'Hackathon Builder'];
  const roleEl = document.getElementById('roleText');
  let roleIndex = 0;

  const rotateRole = () => {
    roleIndex = (roleIndex + 1) % roles.length;
    roleEl.style.opacity = 0;
    setTimeout(() => {
      roleEl.textContent = roles[roleIndex];
      roleEl.style.opacity = 1;
    }, 250);
  };
  roleEl.style.transition = 'opacity .25s ease';
  setInterval(rotateRole, 2600);

  /* ---------- Terminal typing effect ---------- */
  const terminalLines = [
    '$ whoami',
    'priyadharshini_a — Android & React Developer',
    '',
    '$ cat focus.txt',
    'Building clean, functional apps end-to-end.',
    '',
    '$ git log --oneline -3',
    'a1c9e2f React internship, Campus Connection',
    '7fb314d Android training, Vinsup Technologies',
    '2d8a06b ERP industry exposure, Thoothukudi',
    '',
    '$ git status',
    'On branch final-year',
    'Ready to ship. ✅'
  ];
  const terminalBody = document.getElementById('terminalBody');
  let li = 0, ci = 0;

  function typeTerminal() {
    if (li >= terminalLines.length) return;
    const line = terminalLines[li];
    if (ci <= line.length) {
      const printed = terminalLines.slice(0, li).join('\n');
      terminalBody.textContent = (printed ? printed + '\n' : '') + line.slice(0, ci);
      ci++;
      setTimeout(typeTerminal, line.startsWith('$') ? 38 : 18);
    } else {
      li++; ci = 0;
      setTimeout(typeTerminal, 220);
    }
  }
  typeTerminal();

  /* ---------- Scroll reveal + skill bars via IntersectionObserver ---------- */
  const revealTargets = document.querySelectorAll(
    '.section-eyebrow, .section-title, .section-sub, .about-text, .about-facts, ' +
    '.skill-card, .project-card, .commit, .edu-card, .cert-card, .achievement-card, .contact-grid'
  );
  revealTargets.forEach(el => el.classList.add('reveal'));

  const bars = document.querySelectorAll('.bar');

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealTargets.forEach(el => io.observe(el));
  bars.forEach(el => io.observe(el));

  /* ---------- Contact form (mailto fallback, no backend) ---------- */
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      status.textContent = 'Please fill in every field before sending.';
      status.style.color = 'var(--rust)';
      return;
    }

    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:athi876080@gmail.com?subject=${subject}&body=${body}`;

    status.textContent = 'Opening your email client…';
    status.style.color = 'var(--green)';
    form.reset();
  });

  /* ---------- Footer year ---------- */
  document.getElementById('year').textContent = new Date().getFullYear();
})();
