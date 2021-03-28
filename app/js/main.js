$(document).ready(function (){

    $(".range").ionRangeSlider({
        min: 0,
        max: 100,
        to: 0,
        skin: "round",
        hide_min_max: true,
        hide_from_to: true,
        onChange: function (args){
            let step = 1 / 100;
            $('.sunrise-bg').css({
                opacity: (step * args.from)
            })
            if (args.from > 60){
                $('.sunrise').addClass('sunrise-color');
            } else {
                $('.sunrise').removeClass('sunrise-color');
            }
        }
    });

    $(window).on('scroll', ScrollAnimation)

    function ScrollAnimation() {


    }


    var swiper = new Swiper('.shower-slider', {
        slidesPerView: 'auto',
        loop: true,
        pagination: {
            el: '.main-pagination',
            type: 'bullets',
        },
        centeredSlides: true,
    });

    var swiper1 = new Swiper('.toilet-slider', {
        slidesPerView: 'auto',
        pagination: {
            el: '.toilet-pagination',
            type: 'bullets',
        },
        centeredSlides: true,
    });

    var swiper2 = new Swiper('.dinner-slider', {
        slidesPerView: 'auto',
        scrollbar: {
            el: '.dinner-scrollbar',
            hide: false,
            draggable: true,
            snapOnRelease: false,
        },
    });

    var swiper3 = new Swiper('.jungle-slider', {
        slidesPerView: 'auto',
        pagination: {
            el: '.jungle-pagination',
            type: 'bullets',
        },
        centeredSlides: true,
    });

    var swiper4 = new Swiper('.beach-slider', {
        slidesPerView: 'auto',
        pagination: {
            el: '.beach-pagination',
            type: 'bullets',
        },
        centeredSlides: true,
    });

    var swiper5 = new Swiper('.beach2-slider', {
        slidesPerView: 'auto',
        pagination: {
            el: '.beach2-pagination',
            type: 'bullets',
        },
        centeredSlides: true,
    });

    var swiper6 = new Swiper('.insta-slider', {
        slidesPerView: 'auto',
        pagination: {
            el: '.insta-pagination',
            type: 'bullets',
        },
        centeredSlides: true,
    });
    var swiper7 = new Swiper('.sky-slider', {
        slidesPerView: 'auto',
        pagination: {
            el: '.sky-pagination',
            type: 'bullets',
        },
        centeredSlides: true,
    });



})