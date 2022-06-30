const menuListEl = document.querySelector('.mob-menu__list');

menuListEl.addEventListener('click', onChangeCurrentPage);

function onChangeCurrentPage(e) {
  if (e.target.nodeName !== 'A') {
    return;
  }

  const prevtPage = menuListEl.querySelector('.mob-menu__link--curent');
  prevtPage.classList.remove('mob-menu__link--curent');
  const currentTarget = e.target;
  currentTarget.classList.add('mob-menu__link--curent');
}
