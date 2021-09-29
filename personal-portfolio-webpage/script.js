const navBurgerElement = document.querySelector('.nav-burger');
const navListElement = document.querySelector('.nav-list');

function showNavList() {
  navListElement.classList.toggle('active');
}

navBurgerElement.addEventListener('click', showNavList);

navListElement.addEventListener('click', function (e) {
  const that = e.target;
  if (
    that.className === 'nav-link' &&
    navListElement.classList.contains('active')
  ) {
    showNavList();
  }
});
