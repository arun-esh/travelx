// NAVIGATION
// --------------------------------------------------------------------------------------------------------------------

const btnNav = document.querySelector('.btn-mobile-nav');
const headerNav = document.querySelector('.header');

btnNav.addEventListener('click', function () {
  headerNav.classList.toggle('nav-open');
});

