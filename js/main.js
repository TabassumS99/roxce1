(function ($) {
    "use strict";
    //mobile-menu(mean-menu)-------------------------------
    $('#mobile-menu').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: "991"
    });


    //extra info menu bar-----------------------------------
    $(".info-bar").on('click',function(){
    $(".extra-info").addClass('open-info');

    });
    $(".close-icon").on('click',function(){
        $(".extra-info").removeClass('open-info');

    });


    //shopping-info--------------------------------------
    $(".shopping-bag").on('click',function(){
        $(".top-shopping-info").toggle();
    });


    // background image-----------------------------------
    $("[data-background]").each(function (){
        $(this).css("background-image","url(" + $(this).attr("data-background") + ")");
    });

    
    // slider - active--------------------------------------
    function mainSlider() {
        var BasicSlider = $('.slider-active');

        BasicSlider.on('init', function (e, slick) {
            var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
            doAnimations($firstAnimatingElements);
        });

        BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
            var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
            doAnimations($animatingElements);
        });

        BasicSlider.slick({
            autoplay: false,
            autoplaySpeed: 10000,
            dots: false,
            fade: true,
            arrows: true,
            prevArrow:'<b><i class="l-a"><img src="images/slider/prev.png" alt=""></i></b>',
            nextArrow:'<b><i class="r-a"><img src="images/slider/next.png" alt=""></i></b>',
            responsive: [
                { breakpoint: 767, settings: { dots: false, arrows: false } }
            ]
        });

        function doAnimations(elements) {
            var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            elements.each(function () {
                var $this = $(this);
                var $animationDelay = $this.data('delay');
                var $animationType = 'animated ' + $this.data('animation');
                $this.css({
                    'animation-delay': $animationDelay,
                    '-webkit-animation-delay': $animationDelay
                });
                $this.addClass($animationType).one(animationEndEvents, function () {
                    $this.removeClass($animationType);
                });
            });
        }
    }
    mainSlider();


    // circle-progress---------------------------------
    $('.count').circleProgress({
        value: 0.85,
        size: 140,
        lineCap:"square",
        reverse:"true",
        thickness:"12",
        insertMode:"prepend",
        startAngle:"30",
        emptyFill:"rgba(0, 0, 0, 0)",
        fill: {
        gradient: ["#fc8459"]
        },
    
    }).on('circle-animation-progress', function(event, progress) {
        $(this).find('.counter').html(Math.round(85 * progress) + '<i class="small">%</i>');
    });
    $('.count2').circleProgress({
        value: 0.65,
        fill: {
        gradient: ["#24c373"]
        },
    
    }).on('circle-animation-progress', function(event, progress) {
        $(this).find('.counter').html(Math.round(65 * progress) + '<i class="small">%</i>');
    });
    $('.count3').circleProgress({
        value: 0.83,
        fill: {
        gradient: ["#8f3cff"]
        },
    
    }).on('circle-animation-progress', function(event, progress) {
        $(this).find('.counter').html(Math.round(83 * progress) + '<i class="small">%</i>');
    });


    //blog active---------------------------------
    $('.blog-active').slick({
        dots: false,
        arrows: false,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });


    //testimonial active------------------------
    $('.testimonial-active').slick({
        dots: false,
        arrows: false,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow:2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow:2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow:1,
                }
            }
        ]
    });


    //brand active------------------------
    $('.brand-active').slick({
        dots: false,
        arrows: false,
        infinite: false,
        speed: 300,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    });

})(jQuery);	     