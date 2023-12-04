/*===================================================
    Template Scripts
====================================================*/
(function ($) {
    "use strict";

    // Preloader
    $(window).on("load", function () {
        $("body").addClass("loaded");
    });

    $(document).ready(function () {
        // Main Header
        var primaryHeader = $(".primary-header"),
            headerClone = primaryHeader.clone();
        $(".header").after('<div class="sticky-header"></div>');
        $(".sticky-header").html(headerClone);
        var triggerPoint = $(".header").height();
        var yOffset = 0;

        $(window).on("scroll", function () {
            yOffset = $(window).scrollTop();
            if (yOffset >= triggerPoint) {
                $(".sticky-header").addClass("sticky-fixed-top");
            } else {
                $(".sticky-header").removeClass("sticky-fixed-top");
            }
        });

        if ($(".primary-header").length) {
            $(".header .primary-header .burger-menu").on("click", function () {
                $(this).toggleClass("menu-open");
                $(".header .header-menu-wrap").slideToggle(300);
            });

            $(".sticky-header .primary-header .burger-menu").on("click", function () {
                $(this).toggleClass("menu-open");
                $(".sticky-header .header-menu-wrap").slideToggle(300);
            });
        }

        $(".header-menu-wrap ul li:has(ul)").each(function () {
            $(this).append('<span class="dropdown-plus"></span>');
            $(this).addClass("dropdown_menu");
        });

        $(".header-menu-wrap .dropdown-plus").on("click", function () {
            $(this).prev("ul").slideToggle(300);
            $(this).toggleClass("dropdown-open");
            $(".header-menu-wrap ul li:has(ul)").toggleClass("dropdown-open");
        });

        $(".header-menu-wrap .dropdown_menu a").append("<span></span>");

        // Responsive Classes
        function responsiveClasses() {
            var body = $("body");
            if ($(window).width() < 992) {
                body.removeClass("viewport-lg");
                body.addClass("viewport-sm");
            } else {
                body.removeClass("viewport-sm");
                body.addClass("viewport-lg");
            }
        }

        // ResponsiveClasses();
        $(window)
            .on("resize", function () {
                responsiveClasses();
            })
            .resize();

        // Popup Search Box
        $(function () {
            $("#popup-search-box").removeClass("toggled");

            $(".dl-search-icon").on("click", function (e) {
                e.stopPropagation();
                $("#popup-search-box").toggleClass("toggled");
                $("#popup-search").focus();
            });

            $("#popup-search-box input").on("click", function (e) {
                e.stopPropagation();
            });

            $("#popup-search-box, body").on("click", function () {
                $("#popup-search-box").removeClass("toggled");
            });
        });

        //Range Slider
        if ($("body").hasClass("shop")) {
            var slider = document.getElementById("price-range");
            var output = document.getElementById("price-output");
            output.innerHTML = "$" + slider.value;
            slider.oninput = function () {
                output.innerHTML = "$" + this.value;
            };
        }

        /* ======= ISOTOP Active ======= */
        
        $(".filter-items").imagesLoaded(function () {
            // Add isotope click function
            $(".project-filter li").on("click", function () {
                $(".project-filter li").removeClass("active");
                $(this).addClass("active");

                var selector = $(this).attr("data-filter");
                $(".filter-items").isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 750,
                        easing: "linear",
                        queue: false,
                    },
                });
                return false;
            });

            $(".filter-items").isotope({
                itemSelector: ".single-item",
                layoutMode: "masonry",
            });
        });

        // Wow JS Active
        new WOW().init();

        /* ======= Odometer ======= */
        $(".odometer").waypoint(
            function () {
                var odo = $(".odometer");
                odo.each(function () {
                    var countNumber = $(this).attr("data-count");
                    $(this).html(countNumber);
                });
            }, {
                offset: "80%",
                triggerOnce: true,
            }
        );

        // Venobox Video
        new VenoBox({
            selector: ".video-popup, .img-popup",
            bgcolor: "transparent",
            numeration: true,
            infinigall: true,
            spinner: "plane",
        });

        //Testimonial Carousel
        var swiperTesti = new Swiper(".testi-carousel", {
            slidesPerView: "4",
            spaceBetween: 10,
            slidesPerGroup: 1,
            loop: true,
            speed: 1000,
            autoplay: true,
            delay: 5000,
            grabCursor: true,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: ".testimonial-section .swiper-prev",
                prevEl: ".testimonial-section .swiper-next",
            },
            breakpoints: {
                // when window width is >= 320px
                320: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    spaceBetween: 10,
                },
                // when window width is >= 767px
                767: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    spaceBetween: 10,
                },
                // when window width is >= 1024px
                992: {
                    slidesPerView: 2,
                    slidesPerGroup: 1,
                },
            },
        });

        //Sponsor Carousel
        var swiperSponsor = new Swiper(".sponsor-carousel", {
            slidesPerView: "4",
            spaceBetween: 10,
            slidesPerGroup: 1,
            loop: true,
            speed: 1000,
            autoplay: true,
            delay: 5000,
            center: false,
            pagination: {
                el: ".sponsor-carousel .swiper-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: ".sponsor-carousel .swiper-next",
                prevEl: ".sponsor-carousel .swiper-prev",
            },
            breakpoints: {
                // when window width is >= 320px
                320: {
                    slidesPerView: 2,
                    slidesPerGroup: 1,
                    spaceBetween: 10,
                },
                // when window width is >= 767px
                767: {
                    slidesPerView: 3,
                    slidesPerGroup: 1,
                    spaceBetween: 10,
                },
                // when window width is >= 1024px
                992: {
                    slidesPerView: 5,
                    slidesPerGroup: 1,
                },
            },
        });

        //Sponsor Carousel
        var swiperSponsorTwo = new Swiper(".sponsor-carousel-2", {
            slidesPerView: "4",
            spaceBetween: 10,
            slidesPerGroup: 1,
            loop: true,
            speed: 1000,
            autoplay: true,
            delay: 5000,
            center: false,
            pagination: {
                el: ".sponsor-carousel-2 .swiper-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: ".sponsor-carousel-2 .swiper-next",
                prevEl: ".sponsor-carousel-2 .swiper-prev",
            },
            breakpoints: {
                // when window width is >= 320px
                320: {
                    slidesPerView: 2,
                    slidesPerGroup: 1,
                    spaceBetween: 10,
                },
                // when window width is >= 767px
                767: {
                    slidesPerView: 3,
                    slidesPerGroup: 1,
                    spaceBetween: 10,
                },
                // when window width is >= 1024px
                992: {
                    slidesPerView: 4,
                    slidesPerGroup: 1,
                },
            },
        });

        /* ====== Pie Chart ====== */
        $('.piechart').easyPieChart({
            scaleColor: "transparent",
            lineWidth: 4,
            lineCap: 'round', //Can be butt
            barColor: '#e85442',
            trackColor: "transparent",
            size: 180,
            rotate: 0,
            animate: 1000,

            onStep: function (value) {
                this.$el.find('span').text(Math.round(value));
            },
            onStop: function (value, to) {
                this.$el.find('span').text(Math.round(to));
            }
        });
        
        // Custom Cursor
        $('body').append('<div class="consult-cursor"></div>');
        var cursor = $('.consult-cursor'),
            linksCursor = $('a, .swiper-nav, button, .cursor-effect'),
            crossCursor = $('.cross-cursor');

        $(window).on('mousemove', function (e) {
            cursor.css({
                'transform': 'translate(' + (e.clientX - 15) + 'px,' + (e.clientY - 15) + 'px)',
                'visibility': 'inherit'
            });
        });

        // Scrool To Top
        var scrollTop = $("#scroll-top");
        $(window).on("scroll", function () {
            var topPos = $(this).scrollTop();
            if (topPos > 100) {
                $("#scrollup").removeClass("hide");
                $("#scrollup").addClass("show");
            } else {
                $("#scrollup").removeClass("show");
                $("#scrollup").addClass("hide");
            }
        });

        $(scrollTop).on("click", function () {
            $("html, body").animate({
                    scrollTop: 0,
                },
                800
            );
            return false;
        });
    });
})(jQuery);
