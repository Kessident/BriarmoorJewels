let navButton = document.querySelector('.nav-button');
let nav = document.querySelector('nav');

let navMenuIsLocked = false;

navButton.addEventListener('mouseover', function(e) {
  if (!navMenuIsLocked) {
    this.classList.toggle('menu-active');
    let menuLinks = this.nextElementSibling;
    menuLinks.style.maxHeight = menuLinks.scrollHeight + 'px';
  }
});

navButton.addEventListener('click', function(e) {
  navMenuIsLocked = !navMenuIsLocked
});

nav.addEventListener('mouseleave', function(e) {
  if (!navMenuIsLocked) {
    let menuLinks = navButton.nextElementSibling;
    navButton.classList.toggle('menu-active');
    menuLinks.style.maxHeight = null;
  }
});
