var w = 0;
$(function () {
    "use strict";
    /* -------- preloader ------- */
    // $(window).on("load", function () {
    //     $('#preloader').delay(2000).fadeOut(500);
    // });
    /* -------- preloader End ------- */

    /*----- Sticky Header -----*/
    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 50) {
            $('header, .top-scroll').addClass('fixed');
        } else {
            $('header, .top-scroll').removeClass('fixed');
        }
    });
    /*----- Sticky Header End -----*/

    /*----- Top scrolling -----*/
    $(".scrollTo").on('click', function (e) {
        e.preventDefault();
        var target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: ($(target).offset().top)
        }, 1000);
    });
    /*----- Top scrolling End -----*/

    /* -------- Images Parallax ------- */
    if ($(".parallax").length > 0) {
        (function ($) {
            var parallax = -0.5;

            var $bg_images = $(".parallax");
            var offset_tops = [];
            $bg_images.each(function (i, el) {
                offset_tops.push($(el).offset().top);
            });

            $(window).scroll(function () {
                var dy = $(this).scrollTop();
                $bg_images.each(function (i, el) {
                    var ot = offset_tops[i];
                    $(el).css("background-position", "50% " + (dy - ot) * parallax + "px");
                });
            });
        })(jQuery);
    }
    if ($(".parallax-2").length > 0) {
        (function ($) {
            var parallax = 0.3;

            var $bg_images = $(".parallax-2");
            var offset_tops = [];
            $bg_images.each(function (i, el) {
                offset_tops.push($(el).offset().top);
            });

            $(window).scroll(function () {
                var dy = $(this).scrollTop();
                $bg_images.each(function (i, el) {
                    var ot = offset_tops[i];
                    $(el).css("background-position", "50% " + (dy - ot) * parallax + "px");
                });
            });
        })(jQuery);
    }
    /* -------- Images Parallax ------- */

    /*index : Roadmap slider*/
    if ($(".roadmap-slider").length > 0) {
        $(".roadmap-slider").owlCarousel({
            loop: true,
            autoplay: false,
            dots: true,
            nav: true,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    loop: true,
                    nav: false
                },
                420: {
                    items: 2,
                    loop: true,
                    nav: false,
                    margin: 0
                },
                767: {
                    items: 3,
                    loop: true,
                    nav: false,
                    margin: 0
                },
                1200: {
                    items: 4,
                    loop: true,
                    nav: false,
                    margin: 0
                },
            }
        });
    }
    /*end Roadmap slider*/

    /*Blog slider*/
    if ($(".blog-slider").length > 0) {
        $(".blog-slider").owlCarousel({
            loop: true,
            dots: true,
            autoplay: true,
            autoplayTimeout: 5000,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1
                },
                420: {
                    items: 1
                },
                768: {
                    items: 2
                },
                1200: {
                    items: 3
                },
            }
        });
    }
    /*end Blog slider*/

    /* Team slider*/
    if ($(".team-slider").length > 0) {
        $(".team-slider").owlCarousel({
            items: 4,
            loop: true,
            margin: 0,
            nav: false,
            responsive: {
                0: {
                    dots: true,
                    nav: false,
                    items: 1
                },
                420: {
                    items: 1
                },
                768: {
                    items: 3
                },
                992: {
                    items: 4
                },
                1200: {
                    items: 4
                },
            }
        });
    }

    /* Tokan Graph */
    if ($("#tokensale-part").length > 0) {
        function tokan_graph() {
            var scrollDistance = $(window).scrollTop();
            var scrollDistance1 = $('#tokensale-part').offset().top - 100;

            if (scrollDistance >= (scrollDistance1 - 100) && scrollDistance <= (scrollDistance1 + 100)) {
                $('.donut').listtopie({
                    startAngle: 270,
                    strokeWidth: 5,
                    hoverEvent: true,
                    hoverBorderColor: '#6239d7',
                    hoverAnimate: true,
                    drawType: 'round',
                    speedDraw: 150,
                    hoverColor: '#ffffff',
                    textColor: '#3d1f94',
                    strokeColor: '#3d1f94',
                    textSize: '18',
                    marginCenter: 85,
                });
            }
        }

        $(window).scroll(function () {
            tokan_graph();
        })

        $(window).on("resize", function () {
            $(window).resize(function () {

                if (w != $(window).width()) {
                    if ($(window).width() < 767) {
                        $('.donut').listtopie('refresh');
                    }
                    w = $(window).width();
                }

            });
        })

        $(".token-graph").addClass("token-graph-right");
    }

    /* Tokan Graph End */

    function responsive_dropdown() {
        /* Responsive Menu */
        $(".menu-toggle").on("click", function () {
            $(".menu-toggle").toggleClass("active");
            $(".menu").slideToggle("slow");
        });
        $(".mega-menu > .opener").on("click", function () {
            if ($(this).hasClass("active")) {
                $(this).removeClass("active");
                $(this)
                    .siblings(".menu ul ul")
                    .slideUp(200);
            } else {
                $(".mega-menu > .opener").removeClass("active");
                $(this).addClass("active");
                $(".menu ul ul").slideUp(200);
                $(this)
                    .siblings(".menu ul ul")
                    .slideDown(200);
            }
        });
        /* Responsive Menu End */

    };
    $(document).ready(function () {
        responsive_dropdown();
    });

    function accordion_faq() {
        /* Accordion FAQ */
        if ($(".accordion-faq-box").length > 0) {
            $(".accordion-faq-title").on("click", function () {
                if ($(this).hasClass("active")) {
                    $(this).removeClass("active");
                    $(this)
                        .siblings(".accordion-faq-content")
                        .slideUp(200);
                } else {
                    $(this)
                    $(".accordion-faq-title").removeClass("active");
                    $(this).addClass("active");
                    $(".accordion-faq-content").slideUp(200);
                    $(this)
                        .siblings(".accordion-faq-content")
                        .slideDown(200);
                }
            });
        }
        ;
        /* Accordion FAQ End */
    };
    $(document).ready(function () {
        accordion_faq();
    });


    /* -------- Countdown Timer ------- */
    if ($(".coins-counter-loop").length > 0) {
        var eventTime, currentTime, duration, interval;
        eventTime = moment.tz("2021-05-19T17:30:00", "America/Los_Angeles");
        // based on time set in user's computer time / OS
        currentTime = moment.tz();
        // get duration between two times
        duration = moment.duration(eventTime.diff(currentTime));
        interval = 1000;


        setInterval(function () {
            duration = moment.duration(duration - interval, 'milliseconds');
            // if duration is >= 0
            if (duration.asSeconds() <= 0) {
                clearInterval(intervalId);
                // hide the countdown element
                timeElement.classList.add("hidden");
            } else {
                // otherwise, show the updated countdown
                document.getElementById('days').innerText = duration.days();
                document.getElementById('hours').innerText = duration.hours();
                document.getElementById('minutes').innerText = duration.minutes();
                document.getElementById('seconds').innerText = duration.seconds();
                // timeElement.innerText = duration.years() + " years " + duration.days() + " days " + duration.hours() + " hours " + duration.minutes() + " minutes " + duration.seconds() + " seconds";
                // dayElement.innerText = duration.years() + " years " + duration.days() + " days "+ duration.seconds();
            }
        }, interval);

    }
    /* -------- Countdown Timer End ------- */

    /* -------- Coins Progress --------*/
    if ($(".coins-progress").length > 0) {
        setTimeout(coins_progress, 3000);

        function coins_progress() {
            $(".coins-progress span").each(function () {
                $(this).animate({
                        width: $(this).attr("data-progress") + "%",
                    }, 1000
                );
                $(this).text($(this).attr("data-progress") + "%");
            });
        }
    }
    /* -------- Coins Progress End --------*/

});
