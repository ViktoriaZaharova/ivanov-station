$(function () {
    //Сменим язык календаря на русский
    $.datepicker.setDefaults(
        {
            closeText: 'Закрыть',
            prevText: '',
            currentText: 'Сегодня',
            monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
                'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
            monthNamesShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн',
                'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
            dayNames: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
            dayNamesShort: ['вск', 'пнд', 'втр', 'срд', 'чтв', 'птн', 'сбт'],
            dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
            weekHeader: 'Не',
            dateFormat: 'dd.mm.yy',
            firstDay: 1,
            isRTL: false,
            showMonthAfterYear: false,
            yearSuffix: ''
        });
});

$(function () {
    $(".datepicker1").datepicker({
        numberOfMonths: 2,
        showButtonPanel: false,
        showOtherMonths: true,
        dateFormat: 'd M, y',
        range: 'period',
        onSelect: function (dateText, inst, extensionRange) {
            // extensionRange - объект расширения
            $('[name=startDate]').val(extensionRange.startDateText);
            $('[name=endDate]').val(extensionRange.endDateText);
        }
    });

    $('.datepicker1').datepicker('setDate', ['+4d', '+8d']);

    // объект расширения (хранит состояние календаря)
    var extensionRange = $('.datepicker1').datepicker('widget').data('datepickerExtensionRange');
    if (extensionRange.startDateText) $('[name=startDate]').val(extensionRange.startDateText);
    if (extensionRange.endDateText) $('[name=endDate]').val(extensionRange.endDateText);
});

$('.neiros-booking__form-item').on('click', function () {
    $('.neiros-booking__form-item').removeClass('active');
    $(this).addClass('active');
});

$(window).on('load resize', function() {
    if ($(window).width() > 992) {
        $('.neiros-booking__form-item').on('click', function () {
            if ($('.neiros-booking__form-item-last').hasClass('active')) {
                $('.neiros-booking__dropdown-total').fadeIn();
            } else {
                $('.neiros-booking__dropdown-total').fadeOut();
            }
        });
    }
});

$(document).mouseup(function (e) {
    var div = $(".neiros-booking__form-item");
    if (!div.is(e.target)
        && div.has(e.target).length === 0) {
        $('.neiros-booking__form-item').removeClass('active');
        $('.neiros-booking__dropdown-total').fadeOut();
        $('.neiros-booking__form-dropdown-icon').removeClass('btn-clear');
    }
    if ($('.neiros-booking__form-item-last').hasClass('active')) {
        $('.neiros-booking__dropdown-total').fadeIn();
    }
    else {
        $('.neiros-booking__dropdown-total').fadeOut();
    }
});
