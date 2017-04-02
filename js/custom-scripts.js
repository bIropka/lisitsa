$(document).ready(function() {

    /*******************************************************************************************************************
     *********** init
     ******************************************************************************************************************/

    setTimeout(function() {
        $('.wrapper').animate({opacity: 1}, 500);
    }, 500);

    /*******************************************************************************************************************
     *********** clicks
     ******************************************************************************************************************/

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

    $('.burger').click(function() {
        $('nav').toggleClass('active');
    });

    $('.button-callback').click(function() {

        $('.window-callback').fadeIn();

    });

    $('.window').click(function (event) {
        $target = $(event.target);
        if (!$target.closest($('.window form')).length) $('.window').fadeOut();
        if ($target.hasClass('fa-close')) $('.window').fadeOut();
    });

    /*******************************************************************************************************************
     *********** sliders
     ******************************************************************************************************************/

    $('.slider-top .slider').slick({
        appendArrows: '.slider-top-control',
        prevArrow: '.slider-top-prev',
        nextArrow: '.slider-top-next',
        dots: true
    });

});