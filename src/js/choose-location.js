const mapEl = document.querySelector('.google-map');
const mapBtnListEl = document.querySelector('.map-nav');

const CITIES = {
  chicago:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d94993.13383504303!2d-87.83732414245601!3d41.92434462801499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd29d7c79d085%3A0xc19ae13c746621e!2sPretty%20Cool%20Ice%20Cream!5e0!3m2!1sru!2sua!4v1656583778896!5m2!1sru!2sua',
  losAngeles:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423289.4425051245!2d-118.69191970225074!3d34.01952594417153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c32716ff3da679%3A0xabd2e8191902857c!2sThe%20Ice%20Cream%20Shop!5e0!3m2!1sru!2sua!4v1656587106463!5m2!1sru!2sua',
  newYork:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387203.5442411961!2d-74.55398406877387!3d40.695387818963404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25b2a4fd39a27%3A0x598d4925e5bb1cf8!2sIce%20Cream%20House!5e0!3m2!1sru!2sua!4v1656587162246!5m2!1sru!2sua',
};

mapBtnListEl.addEventListener('click', onChangeLocation);

function onChangeLocation(e) {
  const targetBtn = e.target;
  if (targetBtn.nodeName !== 'BUTTON') {
    return;
  }

  const choosedCity = CITIES[e.target.dataset.city];
  if (choosedCity === mapEl.src) {
    return;
  }

  mapEl.src = choosedCity;
}
