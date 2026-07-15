const menuLinks = document.querySelectorAll('.page__menu a');
const html = document.documentElement;
const closeButton = document.querySelector('.icon--close');
const openButton = document.querySelector('.icon--menu');

if (menuLinks) {
  menuLinks.forEach((link) => {
    link.addEventListener('click', () => {
      html.classList.remove('is-menu-open');
    });
  });
}

if (closeButton) {
  closeButton.addEventListener('click', () => {
    html.classList.remove('is-menu-open');
  });
}

if (openButton) {
  openButton.addEventListener('click', () => {
    html.classList.add('is-menu-open');
  });
}
