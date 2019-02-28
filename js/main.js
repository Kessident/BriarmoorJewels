let navButton = document.getElementsByClassName("nav-button")[0];

navButton.addEventListener("click", function(e) {
  this.classList.toggle("menu-active");
  let menuLinks = this.nextElementSibling;
  if (menuLinks.style.maxHeight) {
    menuLinks.style.maxHeight = null;
  } else {
    menuLinks.style.maxHeight = menuLinks.scrollHeight + "px";
  }
});
