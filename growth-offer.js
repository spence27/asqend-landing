(() => {
  const example = document.querySelector('.sales-example');
  if (!example) return;

  const buttons = [...example.querySelectorAll('[data-example-view]')];
  for (const button of buttons) {
    button.addEventListener('click', () => {
      example.dataset.view = button.dataset.exampleView;
      for (const candidate of buttons) {
        candidate.setAttribute('aria-pressed', String(candidate === button));
      }
    });
  }

  // Without JavaScript both panels stay readable at every width.
  example.classList.add('is-interactive');
})();
