/* eslint-disable no-undef */
const hamBurger = document.getElementById('hamburger');
const navUL = document.getElementById('navigation_bar');
hamBurger.addEventListener('click', () => {
  navUL.classList.toggle('show');
  document.getElementById('navigation_bar-right').classList.toggle('show');
});
