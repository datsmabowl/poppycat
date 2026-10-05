(() => {
  const panels = [...document.querySelectorAll('.panel')];
  const links = [...document.querySelectorAll('nav a')];
  const main = document.querySelector('main');
  function show(moveFocus = false) {
    const requested = location.hash.slice(1) || 'home';
    const active = panels.find(panel => panel.id === requested) || panels[0];
    panels.forEach(panel => { panel.hidden = panel !== active; });
    links.forEach(link => {
      if (link.hash === '#' + active.id) link.setAttribute('aria-current', 'page');
      else link.removeAttribute('aria-current');
    });
    document.title = active.id.charAt(0).toUpperCase() + active.id.slice(1) + ' | Poppy Cat Productions';
    main.scrollTop = 0;
    if (moveFocus) main.focus({ preventScroll: true });
  }
  document.documentElement.classList.add('js');
  show();
  window.addEventListener('hashchange', () => show(true));
})();