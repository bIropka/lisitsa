$(document).ready(function() {

    /*******************************************************************************************************************
     *********** init
     ******************************************************************************************************************/

    setTimeout(function() {
        $('.wrapper').animate({opacity: 1}, 500);
    }, 500);

    function checkHeader() {

        if ($(window).width() > 1230) {

            if ($(window).scrollTop() > 300) {

                $('header[role="banner"]').addClass('fixed');

                if ($(window).scrollTop() > 500) {

                    $('header[role="banner"]').css('top', '0px');
                    $('.arrow-top').fadeIn();

                } else {

                    $('header[role="banner"]').css('top', '-300px');
                    $('.arrow-top').fadeOut();

                }

            } else {

                $('header[role="banner"]').removeClass('fixed');

            }

        } else {

            $('header[role="banner"]').addClass('fixed').css('top', '0px');

        }

    }

    checkHeader();

    $(window).scroll(function() {

        checkHeader();

    });

    if($(window).width() < 1261) {
        $('.nav-ul').appendTo('.mobile-nav');
    } else {
        $('.nav-ul').prependTo('nav');
    }

    if($(window).width() < 981) {
        $('.header-nav').prependTo('.mobile-nav');
    } else {
        $('.header-nav').appendTo('.header-data');
    }

    $(window).resize(function() {

        checkHeader();

        if($(window).width() < 1261) {
            $('.nav-ul').appendTo('.mobile-nav');
        } else {
            $('.nav-ul').prependTo('nav');
        }

        if($(window).width() < 981) {
            $('.header-nav').prependTo('.mobile-nav');
        } else {
            $('.header-nav').appendTo('.header-data');
        }


    });

    /*******************************************************************************************************************
     *********** clicks
     ******************************************************************************************************************/

    $('.arrow-top').click(function () {
        $('body, html').animate({
            scrollTop: 0
        }, 600);
    });


    $('nav > ul > li').hover(

        function() {
            if($(window).width() > 1230) {
                $(this).addClass('active');
            }
        },

        function() {
            if($(window).width() > 1230) {
                $(this).removeClass('active');
            }
        }

     );

    $('nav .fa-bars').click(function() {
        $('.mobile-nav').addClass('active');
    });

    $('.mobile-nav .fa-close').click(function() {
        $('.mobile-nav').removeClass('active');
    });

    $('.order-certificate').click(function() {

        $('.window-certificate').fadeIn();

    });

    $('.order-session').click(function() {

        $('.window-photo').fadeIn();

    });

    $('.button-callback').click(function() {

        $('.window-callback').fadeIn();

    });

    $('.window').click(function (event) {
        $target = $(event.target);
        if (!$target.closest($('.window form')).length) $('.window').fadeOut();
        if ($target.hasClass('fa-close')) $('.window').fadeOut();
    });

    $( ".date-widget" ).datepicker();

    /*******************************************************************************************************************
     *********** sliders
     ******************************************************************************************************************/

    var slider = $('.slider-banner .slider');
    var sliderSize = slider.find('.slide').length;

    var sliderDots = '<ul class="slider-dots">';
    for(var j = 0; j < sliderSize; j++) {
        sliderDots += '<li></li>'
    }
    sliderDots += '</ul>';

    $(sliderDots).appendTo($('.banner-data'));

    slider.slick({
        appendArrows: '.control-banner',
        prevArrow: '.control-banner-prev',
        nextArrow: '.control-banner-next'
    });

    var curSlide = slider.slick('slickCurrentSlide');

    var dots = slider.find('.slider-dots');

    for(var i = 0; i < dots.length; i++) {
        $(dots[i]).find('li').eq(curSlide).addClass('active');
    }

    $('.banner-data ul li').click(function() {
        $('.banner-data ul li').removeClass('active');
        for(var i = 0; i < dots.length; i++) {
            $(dots[i]).find('li').eq($(this).index()).addClass('active');
        }
        slider.slick('slickGoTo', $(this).index());
    });

    slider.on('afterChange', function(event, slick, currentSlide){
        for(var i = 0; i < dots.length; i++) {
            $(dots[i]).find('li').removeClass('active');
            $(dots[i]).find('li').eq(currentSlide).addClass('active');
        }
    });

});