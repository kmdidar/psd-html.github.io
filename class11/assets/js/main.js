(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();

        $(".menu-triger").on('click', function(){
            $(".offcanvace-menu").addClass("show-offcanvace-menu");
            $(".offcanvas-munushade").addClass("active");
        });

        $(".menu-close, .offcanvas-munushade").on('click', function(){
            $(".offcanvace-menu").removeClass("show-offcanvace-menu");
            $(".offcanvas-munushade").removeClass("active");
        });

        $(".homepage-sliders").owlCarousel({
            items: 1,
            loop: true,
            nav: true,
            dots: true,
            autoplay: true,
            navText: ["<i class=\"zmdi zmdi-long-arrow-left\"></i>", "<i class=\"zmdi zmdi-long-arrow-right\"></i>"],
            animateOut: "fadeOut",
            animateIn: 'fadeIn'

        });

        $(".case-studies-carousel").owlCarousel({
            items: 3,
            margin: 30,
            loop: true,
            nav: false,
            dots: true,
            autoplay: true

        });

        $(".case-studies-carousel-3").owlCarousel({
            items: 3,
            margin: 0,
            loop: true,
            nav: false,
            dots: true,
            autoplay: true

        });

        $(".logo-carousel").owlCarousel({
            items: 6,
            margin: 30,
            loop: true,
            nav: false,
            dots: true,
            autoplay: true

        });

        $(".testimonial-content, .testimonial-item").owlCarousel({
        	items: 1,
        	loop: true,
        	nav: false,
        	dots: true,
            autoplay: true

        });

            $(".testimonial-content").on("translate.owl.carousel", function(){ 
            $(".single-testionial-item p").removeClass("animated fadeInUp").css("opacity", "0");
            $(".testimonial-meta").removeClass("animated fadeInDown").css("opacity", "0");
           
        });
        
            $(".testimonial-content").on("translated.owl.carousel", function(){
            $(".single-testionial-item p").addClass("animated fadeInUp").css("opacity", "0");
            $(".testimonial-meta").addClass("animated fadeInDown").css("opacity", "0");
          
        });

        


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	