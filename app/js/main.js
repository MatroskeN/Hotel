$(document).ready(function (){

    window.Animate = true

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



        let Main = document.querySelector('.banner');
        let Screen1 = document.querySelector('.sunrise');

        console.log(Screen1.getBoundingClientRect().top, window.Animate)

        // if (Screen1.getBoundingClientRect().top == 0){
        //     window.Animate = true
        // }

        if (Screen1.getBoundingClientRect().top < (window.innerHeight - 1) && window.Animate == true){
            $('body').css({
                overflow: 'hidden'
            })
            $('html,body').animate({scrollTop: 0 +"px"},{
                duration:0,
                complete: function (){
                    window.Animate = false
                    $('html,body').animate({scrollTop: window.innerHeight +"px"},{
                        duration:1E3,
                        complete: function (){
                            window.Animate = false
                            $('body').css({
                                overflow: 'auto'
                            })
                        }
                    });
                }
            });

            window.Animate = false

        }

        if (Screen1.getBoundingClientRect().top < (window.innerHeight - (window.innerHeight / 100 * 30))){
            $('.main-anim').css({
                opacity: 0
            })
            $('.sun-anim').css({
                opacity: 1
            })
        } else {
            $('.main-anim').css({
                opacity: 1
            })
            $('.sun-anim').css({
                opacity: 0
            })
        }

    }


    var swiper = new Swiper('.shower-slider', {
        slidesPerView: 'auto',
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

//modal
$("#open-lang").on("click", function () {
    $("#lang-popup").removeClass("hidden");
    $("#lang-popup").addClass("show");
    document.getElementById("body").style.overflow = "hidden";
});

$("#close-lang").on("click", function () {
    $("#lang-popup").removeClass("show");
    $("#lang-popup").addClass("hidden");
    document.getElementById("body").style.overflow = "visible";
});

$("#burger").on("click", function () {
    $("#menu-burger").removeClass("hidden");
    $("#menu-burger").addClass("show");
    document.getElementById("body").style.overflow = "hidden";
});

$("#close-burger").on("click", function () {
    $("#menu-burger").removeClass("show");
    $("#menu-burger").addClass("hidden");
    document.getElementById("body").style.overflow = "visible";
});

})