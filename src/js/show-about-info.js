const showBtn = document.querySelector('[data-info-show]');
const additionTesxt = document.querySelector('[data-info-text]');

showBtn.addEventListener('click', onShowAboutInfo);

function onShowAboutInfo() {
  additionTesxt.classList.toggle('is-hide-info');
}
