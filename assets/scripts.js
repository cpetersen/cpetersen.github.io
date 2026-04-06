document.addEventListener('DOMContentLoaded', function () {

  // Mobile menu toggle
  var toggle = document.querySelector('.site-nav .toggle');
  var nav = document.querySelector('.site-nav nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
      toggle.textContent = nav.classList.contains('open') ? 'Close' : 'Menu';
    });
  }

  // Theme toggle
  var themeBtn = document.querySelector('.theme-toggle');

  if (themeBtn) {
    themeBtn.addEventListener('click', function () {
      var current = document.documentElement.getAttribute('data-theme');
      var next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
    });
  }

  // Listen for system theme changes (only if no stored preference)
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function (e) {
    if (!localStorage.getItem('theme')) {
      document.documentElement.setAttribute('data-theme', e.matches ? 'dark' : 'light');
    }
  });

});
