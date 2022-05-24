export default function drawMap(latitude, longitude) {
  // Функция ymaps.ready() будет вызвана, когда
  // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
  ymaps.ready(init);

  function init() {
    // Создание карты.
    // https://tech.yandex.ru/maps/doc/jsapi/2.1/dg/concepts/map-docpage/
    const myMap = new ymaps.Map("map", {
      // Координаты центра карты.
      // Порядок по умолчнию: «широта, долгота».
      center: [latitude, longitude],
      // Уровень масштабирования. Допустимые значения:
      // от 0 (весь мир) до 19.
      zoom: 12,
      // Элементы управления
      // https://tech.yandex.ru/maps/doc/jsapi/2.1/dg/concepts/controls/standard-docpage/
      controls: [
        "zoomControl", // Ползунок масштаба
        "rulerControl", // Линейка
        "routeButtonControl", // Панель маршрутизации
        "trafficControl", // Пробки
        "typeSelector", // Переключатель слоев карты
        "fullscreenControl", // Полноэкранный режим

        // Поисковая строка
        new ymaps.control.SearchControl({
          options: {
            // вид - поисковая строка
            size: "large",
            // Включим возможность искать не только топонимы, но и организации.
            provider: "yandex#search",
          },
        }),
      ],
    });

    // Добавление метки
    // https://tech.yandex.ru/maps/doc/jsapi/2.1/ref/reference/Placemark-docpage/
    const myPlacemark = new ymaps.Placemark([latitude, longitude], {
      // Хинт показывается при наведении мышкой на иконку метки.
      hintContent: "Содержимое всплывающей подсказки",
      // Балун откроется при клике по метке.
      balloonContent: "Содержимое балуна",
    });

    // После того как метка была создана, добавляем её на карту.
    myMap.geoObjects.add(myPlacemark);
  }
}
