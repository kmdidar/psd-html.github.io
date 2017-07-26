(function($) {
    "use strict";

    jQuery(document).ready(function($) {

        $('.homepage-sliders').owlCarousel({
            items: 1,
            loop: true,
            smartSpeed: 1000,
            autoplay: true,
            dots: true,
            nav: true,
            navText: ["<i class='zmdi zmdi-arrow-left'></i>",
                "<i class='zmdi zmdi-arrow-right'></i>"
            ],
        });
        //case-study-carousel-3
        $(".case-study-carousel-3").owlCarousel({
            items: 4,
            loop: true,
            dots: true,
            nav: false,
            autoplay: true,
            smartSpeed: 250
        });

        $('.case-study-carousel').owlCarousel({
            loop: true,
            margin: 30,
            smartSpeed: 1000,
            autoplay: true,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    nav: false
                },
                750: {
                    items: 2,
                    nav: false
                },
                970: {
                    items: 3,
                    nav: false
                }

            }
        });

        $('.theme3-case-study-items-carousel').owlCarousel({
            loop: true,
            margin: 30,
            smartSpeed: 1000,
            autoplay: true,
            responsiveClass: true,
            dots: true,
            responsive: {
                0: {
                    items: 1,
                    nav: false
                },
                750: {
                    items: 2,
                    nav: false
                },
                970: {
                    items: 4,
                    nav: false
                }

            }
        });

        $(".brands-carousel").owlCarousel({
            items: 6,
            margin: 30,
            loop: true,
            dots: false,
            smartSpeed: 1500,
            nav: false,
            autoplay: true,
        });


        $(".testimonial-carousel").owlCarousel({
            items: 1,
            loop: true,
            dot: true,
            smartSpeed: 1600,
            nav: false,
            autoplay: true,
        });

        // wow-aniamtion
        new WOW().init();


        /* $('.VideoBtn').magnificPopup({
                disableOn: 700,
                type: 'iframe',
                removalDelay: 160,
                preloader: true,
                fixedContentPos: true
          
              }); */

        $('.VideoBtn').magnificPopup({
            type: 'video',
            preloader: false,
            fixedContentPos: false

        });




        $('.ImageBtn').magnificPopup({
            type: 'image',


        });


        $(".h4-video-play-btn").magnificPopup({
            type: 'video'

        });


        $(".menu-trigger").on('click', function() {
            $(".off-canvas-menu").addClass("show-off-canvas-menu");
            $(".off-canvas-menu-shade").addClass("active");

        });

        $(".close-btn,.off-canvas-menu-shade").on('click', function() {
            $(".off-canvas-menu").removeClass("show-off-canvas-menu");
            $(".off-canvas-menu-shade").removeClass("active");

        });

        $(".single-testimonial-item").hover(function() {
            $(".single-testimonial-item").removeClass('active');
            $(this).addClass('active');

        });





    });


}(jQuery));