(() => {
  const status = document.getElementById('copy-status');
  let timer;

  function announce(message) {
    status.textContent = message;
    status.classList.add('visible');
    clearTimeout(timer);
    timer = setTimeout(() => status.classList.remove('visible'), 2400);
  }

  document.querySelectorAll('[data-copy]').forEach((button) => {
    button.addEventListener('click', async () => {
      const url = new URL(button.dataset.copy, window.location.href).href;
      try {
        await navigator.clipboard.writeText(url);
        announce('Canvas link copied.');
      } catch {
        window.prompt('Copy this Canvas link:', url);
      }
    });
  });
})();
