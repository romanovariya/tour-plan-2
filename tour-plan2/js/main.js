var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    loop: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.slider-button--next',
      prevEl: '.slider-button--prev',
    },
    keyboard: {
        enabled: true,
        onlyInViewport: false,
      },
  });

var myMap;

// Дождёмся загрузки API и готовности DOM.
ymaps.ready(init);

function init () {
    // Создание экземпляра карты и его привязка к контейнеру с
    // заданным id ("map").
    myMap = new ymaps.Map('map', {
        // При инициализации карты обязательно нужно указать
        // её центр и коэффициент масштабирования.
        center: [7.891013, 98.294772], 
        zoom: 15
    }, {
        searchControlProvider: 'yandex#search'
    }),
    myGeoObject = new ymaps.GeoObject({
      geometry: {
          type: "Point",
          coordinates: [7.891013, 98.294772]
      },
  });

  myMap.geoObjects
    .add(myGeoObject);
}