const productListEl = document.querySelector('.produsct__list');

productListEl.addEventListener('click', onShowInfo);

function onShowInfo(e) {
  const targetBtn = e.target;
  const isBtn =
    e.target.nodeName === 'BUTTON' || targetBtn.nodeName === 'svg' || targetBtn.nodeName === 'use';

  if (!isBtn) {
    return;
  }

  const parentEl = targetBtn.closest('.product__card');
  const mainInfoEl = parentEl.querySelector('.product__main');
  const additionInfoEl = parentEl.querySelector('.product__addition');

  mainInfoEl.classList.toggle('hide');
  additionInfoEl.classList.toggle('hide');
}
