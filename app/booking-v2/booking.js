$('.neiros-booking__form-item').on('click', function () {
    $('.neiros-booking__form-item').removeClass('active');
    $(this).addClass('active');
    $('.slick-slider').slick('setPosition');

});

$(window).on('load resize', function() {
    if ($(window).width() > 992) {
        $('.neiros-booking__form-item').on('click', function () {
            if ($('.neiros-booking__form-item-last').hasClass('active')) {
                $('.neiros-booking__dropdown-total').fadeIn();
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
});

$('.slider-dates').slick({
    slidesToShow: 7,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
});


$('.neiros-booking__form-item').each(function () {
    $(this).find('.inp-radio').click(function () {
        $(this).parents('.neiros-booking__form-item').find('.neiros-booking__form-dropdown-icon').addClass('btn-clear');
    });
});