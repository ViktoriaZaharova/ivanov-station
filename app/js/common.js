// анимированный скролл к блоку
$('.go_to').click(function (e) {
    e.preventDefault();
    var scroll_el = $(this).attr('href');
    if ($(scroll_el).length !== 0) {
        $('html, body').animate({
            scrollTop: $(scroll_el).offset().top
        }, 500);
    }
    return false;
});



$('.cottages-slider1').slick({
    slidesToShow: 3,
    variableWidth: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="img/left-arrow.png" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="img/right-arrow.png" alt=""></button>',
    // infinite: false,
    appendArrows: '.cottages-slider-nav1',
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                variableWidth: false,
            }
        }

    ]
});


$('.cottages-slider2').slick({
    slidesToShow: 3,
    variableWidth: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="img/left-arrow.png" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="img/right-arrow.png" alt=""></button>',
    // infinite: false,
    rtl: true,
    appendArrows: '.cottages-slider-nav2',
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                variableWidth: false,
            }
        }

    ]
});

$('.cottages-slider3').slick({
    slidesToShow: 3,
    variableWidth: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="img/left-arrow.png" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="img/right-arrow.png" alt=""></button>',
    // infinite: false,
    appendArrows: '.cottages-slider-nav3',
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                variableWidth: false,
            }
        }

    ]
});

$('.cottages-slider4').slick({
    slidesToShow: 3,
    variableWidth: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="img/left-arrow.png" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="img/right-arrow.png" alt=""></button>',
    // infinite: false,
    rtl: true,
    appendArrows: '.cottages-slider-nav4',
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                variableWidth: false,
            }
        }

    ]
});

$('.cottages-slider5').slick({
    slidesToShow: 3,
    variableWidth: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="img/left-arrow.png" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="img/right-arrow.png" alt=""></button>',
    // infinite: false,
    appendArrows: '.cottages-slider-nav5',
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                variableWidth: false,
            }
        }

    ]
});


$('.cottages-slider6').slick({
    slidesToShow: 3,
    variableWidth: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="img/left-arrow.png" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="img/right-arrow.png" alt=""></button>',
    // infinite: false,
    rtl: true,
    appendArrows: '.cottages-slider-nav6',
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                variableWidth: false,
            }
        }

    ]
});


$('.cottages-slider7').slick({
    slidesToShow: 3,
    variableWidth: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="img/left-arrow.png" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="img/right-arrow.png" alt=""></button>',
    // infinite: false,
    appendArrows: '.cottages-slider-nav7',
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                variableWidth: false,
            }
        }

    ]
});


// mobile menu
$('.btn-burger').on('click', function () {
    $('.overlay').fadeIn();
   $('.menu-wrapper').fadeToggle();
});

$('.btn-close-menu, .overlay').on('click', function () {
   $('.menu-wrapper').fadeOut();
    $('.overlay').fadeOut();
});


$('[name="phone"]').mask('+7 (999) 999-99-99');

