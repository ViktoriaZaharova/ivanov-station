// Инициализация карты
ymaps.ready(init);

function init () {

    //Центрирование и выбор масштаба карты
    var myMap = new ymaps.Map('map', {
        center: [60.273609, 29.827101],
        zoom: 13
    });

    // Создание своей метки
    var myPlacemark = new ymaps.Placemark(
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
    myMap.geoObjects.add(myPlacemark);

    //Элементы управления
    myMap.controls
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


    function onResizeMap() {
        if ($(window).width() > '992') {
            //Set New center
            myMap.setCenter([60.274786, 29.868660], 13, {
                checkZoomRange: true
            });
        }
    } onResizeMap();

    window.onresize = function () {
        onResizeMap();
    };

}