// анимированный скролл к блоку
$(document).ready(function () { //плавный скролл
    $(".go_to").on("click", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            headerHeight = $('header').height(),
            top = $(id).offset().top;

        $('body,html').animate({scrollTop: top - headerHeight}, 500);
    });
});


$('.cottages-slider1').each(function() {
    $(this).slick({
        slidesToShow: 3,
        variableWidth: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/left-arrow.png" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/right-arrow.png" alt=""></button>',
        // infinite: false,
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
});


$('.cottages-slider2').each(function() {
    $(this).slick({
        slidesToShow: 3,
        variableWidth: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/left-arrow.png" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/right-arrow.png" alt=""></button>',
        // infinite: false,
        rtl: true,
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


// scroll horizontal
$(document).ready(function () {
    let scrollContainer = document.getElementById("gallery1");

    scrollContainer.addEventListener("wheel", (evt) => {
        evt.preventDefault();
        scrollContainer.scrollLeft += evt.deltaY;
    });

    let scrollContainer2 = document.getElementById("gallery2");

    scrollContainer2.addEventListener("wheel", (evt) => {
        evt.preventDefault();
        scrollContainer2.scrollLeft += evt.deltaY;
    });
});

