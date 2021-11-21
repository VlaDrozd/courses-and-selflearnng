import './scss/base.scss';
import './js/script';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

ymaps.ready(init);
function init() {
  let myMap = new ymaps.Map("map", {
    center: [55.76, 37.64],
    zoom: 7
  });
}

