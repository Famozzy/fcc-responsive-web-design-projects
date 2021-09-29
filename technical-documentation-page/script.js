const navBurgerElement = document.querySelector('.nav-burger');
const navListElement = document.querySelector('.nav-list');

navBurgerElement.addEventListener('click', function () {
  navListElement.classList.toggle('show');
});

navListElement.addEventListener('click', function (e) {
  const that = e.target;
  if (that.className == 'nav-link') {
    navListElement.classList.remove('show');
  }
});
