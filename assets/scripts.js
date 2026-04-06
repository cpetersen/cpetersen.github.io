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

});
