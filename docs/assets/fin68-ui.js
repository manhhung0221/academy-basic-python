(function () {
  const applyFade = () => {
    const el = document.querySelector('.md-content');
    if (!el) return;
    el.classList.add('fade-enter');
    requestAnimationFrame(() => el.classList.add('fade-enter-active'));
    setTimeout(() => el.classList.remove('fade-enter', 'fade-enter-active'), 300);
  };

  const highlightActiveSection = () => {
    const container = document.querySelector('.md-main__inner');
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const inView = rect.top < window.innerHeight * 0.5 && rect.bottom > 100;
    container.classList.toggle('is-active', inView);
  };

  document.addEventListener('DOMContentLoaded', () => {
    applyFade();
    highlightActiveSection();
  });

  if (window.document$) {
    window.document$.subscribe(() => {
      applyFade();
      highlightActiveSection();
    });
  }

  document.addEventListener('scroll', highlightActiveSection, { passive: true });
})();