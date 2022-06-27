// Инициализация карты
ymaps.ready(init2);

function init2 () {

    //Центрирование и выбор масштаба карты
    var myMap2 = new ymaps.Map('map2', {
        center: [60.273609, 29.827101],
        zoom: 13
    });

    // Создание своей метки
    var myPlacemark2 = new ymaps.Placemark(
        // Координаты метки
        [60.273609, 29.827101] , {
            // Свойства метки
            hintContent: '', //Подсказка при наведении на маркер
            iconContent: '',

        }, {
            iconImageHref: 'img/pin_red.png',  // картинка иконки
            iconImageSize: [35, 45],                                      // размеры картинки
        });

    // Добавление метки на карту
    myMap2.geoObjects.add(myPlacemark2);

    //Элементы управления
    myMap2.controls
    // Кнопка изменения масштаба
        .add('zoomControl')
        // Список типов карты
        .add('typeSelector')
        // Кнопка изменения масштаба - справа
        .add('smallZoomControl', { right: 5, top: 75 })
        // Стандартный набор кнопок
        .add('mapTools')
        //Линейка масштаба
        .add(new ymaps.control.ScaleLine());

}