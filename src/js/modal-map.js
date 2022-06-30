const refs = {
  openMaplBtn: document.querySelector('.js-open-map'),
  closemapBtn: document.querySelector('.js-close-map'),
  modalMap: document.querySelector('.backdrop-map'),
};

refs.openMaplBtn.addEventListener('click', toggleModal);
refs.closemapBtn.addEventListener('click', toggleModal);

function toggleModal() {
  refs.modalMap.classList.toggle('is-hidden');
}
