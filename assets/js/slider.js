(function ($) {
  "use strict";
  $(document).ready(function () {
    function sliderAnimations(elements) {
      var animationEndEvents =
        "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
      elements.each(function () {
        var $this = $(this);
        var $animationDelay = $this.data("delay");
        var $animationDuration = $this.data("duration");
        var $animationType = "consultiva-animation " + $this.data("animation");
        $this.css({
          "animation-delay": $animationDelay,
          "-webkit-animation-delay": $animationDelay,
          "animation-duration": $animationDuration,
        });
        $this.addClass($animationType).one(animationEndEvents, function () {
          $this.removeClass($animationType);
        });
      });
    }

    var sliderOptions = {
      speed: 1500,
      autoplay: true,
      delay: 2000,
      disableOnInteraction: false,
      initialSlide: 0,
      parallax: false,
      mousewheel: false,
      loop: true,
      grabCursor: true,
      navigation: {
        nextEl: ".consultiva-slider-button-next",
        prevEl: ".consultiva-slider-button-prev",
      },
      pagination: {
        el: ".consultiva-swiper-pagination",
        clickable: true,
      },
    };

    var consultivaSlides = document.querySelectorAll(
      ".consultiva-slider .swiper-slide"
    );
    var contentSlides = document.querySelectorAll(
      ".content-slider .swiper-slide"
    );
    var consultivaSlideCount = consultivaSlides.length;
    var contentSlideCount = contentSlides.length;
    $(".consultiva-slider .consultiva-fraction .total-count").text(
      consultivaSlideCount
    );
    $(".content-slider .consultiva-fraction .total-count").text(
      contentSlideCount
    );
    $(
      ".consultiva-slider .consultiva-fraction .current-count, .content-slider .consultiva-fraction .current-count"
    ).text(1);
    sliderOptions.on = {
      init: function () {
        var swiper = this;
        if (sliderOptions.parallax === true) {
          for (var i = 0; i < swiper.slides.length; i++) {
            $(swiper.slides[i])
              .find(".slide-img-wrap")
              .attr({
                "data-swiper-parallax": 0.75 * swiper.width,
              });
          }
        }
      },
      slideChangeTransitionStart: function () {
        var swiper = this;
        var animatingElements = $(swiper.slides[swiper.activeIndex]).find(
          "[data-animation]"
        );
        sliderAnimations(animatingElements);
        $(".consultiva-slider .consultiva-fraction .total-count").text(
          consultivaSlideCount
        );
        $(".content-slider .consultiva-fraction .total-count").text(
          contentSlideCount
        );
        $(
          ".consultiva-slider .consultiva-fraction .current-count, .content-slider .consultiva-fraction .current-count"
        ).text(swiper.realIndex + 1);
      },
      progress: function (swiper, progress) {
        if (0.25 == progress) {
          var progressVal = 100 / 3;
        } else if (0.5 == progress) {
          var progressVal = (100 / 3) * 2;
        } else if (0.75 == progress) {
          var progressVal = 100;
        } else {
          var progressVal = 100 / 3;
        }
        $(
          ".consultiva-slider .swiper-slider-progress, .content-slider .swiper-slider-progress"
        ).css({
          width: progressVal + "%",
        });
      },

      resize: function () {
        this.update();
      },
    };

    var swiper = new Swiper(
      ".consultiva-slider, .content-slider",
      sliderOptions
    );

    // Slider 2

    const swiperSlidesTwo = document.querySelectorAll(
      ".consultiva-slider-2 .swiper-slide"
    );
    const slideCountTwo = swiperSlidesTwo.length;
    $(".consultiva-slider-2 .consultiva-fraction .total-count").text(
      slideCountTwo
    );
    $(".consultiva-slider-2 .consultiva-fraction .current-count").text(1);

    var sliderOptionsTwo = {
      speed: 1800,
      autoplay: false,
      delay: 2000,
      disableOnInteraction: false,
      initialSlide: 0,
      parallax: false,
      mousewheel: false,
      loop: true,
      grabCursor: true,
      navigation: {
        nextEl: ".consultiva-slider-2 .swiper-next",
        prevEl: ".consultiva-slider-2 .swiper-prev",
      },
      pagination: false,
    };

    sliderOptionsTwo.on = {
      init: function () {
        var swiper = this;
        if (sliderOptionsTwo.parallax === true) {
          for (var i = 0; i < swiper.slides.length; i++) {
            $(swiper.slides[i])
              .find(".slide-img-wrap")
              .attr({
                "data-swiper-parallax": 0.75 * swiper.width,
              });
          }
        }
      },
      slideChangeTransitionStart: function () {
        var swiper = this;
        var animatingElements = $(swiper.slides[swiper.activeIndex]).find(
          "[data-animation]"
        );
        sliderAnimations(animatingElements);
        $(".consultiva-slider-2 .consultiva-fraction .total-count").text(
          slideCountTwo
        );
        $(".consultiva-slider-2 .consultiva-fraction .current-count").text(
          swiper.realIndex + 1
        );
      },
      progress: function (swiper, progress) {
        if (0.25 == progress) {
          var progressVal = 100 / 3;
        } else if (0.5 == progress) {
          var progressVal = (100 / 3) * 2;
        } else if (0.75 == progress) {
          var progressVal = 100;
        } else {
          var progressVal = 100 / 3;
        }
        $(".consultiva-slider-2 .swiper-slider-progress").css({
          width: progressVal + "%",
        });
      },

      resize: function () {
        this.update();
      },
    };

    var swiperTwo = new Swiper(".consultiva-slider-2", sliderOptionsTwo);
  });
})(jQuery);
class TypeWriter {
  constructor(txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 8);
    this.type();
    this.isDeleting = false;
  }

  type() {
    // Current index of word
    const current = this.wordIndex % this.words.length;
    // Get full text of current word
    const fullTxt = this.words[current];

    // Check if deleting
    if(this.isDeleting) {
      // Remove char
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      // Add char
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    // Insert txt into element
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    // change color for data-text
    this.txtElement.innerHTML = `<span class="txt" style="color: #fff;">${this.txt}</span>`;

    // Initial Type Speed
    let typeSpeed = 100;

    if(this.isDeleting) {
      typeSpeed /= 2;
    }

    // If word is complete
    if(!this.isDeleting && this.txt === fullTxt) {
      // Make pause at end
      typeSpeed = this.wait;
      // Set delete to true
      this.isDeleting = true;
    } else if(this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      // Move to next word
      this.wordIndex++;
      // Pause before start typing
      typeSpeed = 300;
    }

    setTimeout(() => this.type(), typeSpeed);
  }
}

// Init On DOM Load
document.addEventListener('DOMContentLoaded', init);

// Init App
function init() {
  const txtElement = document.querySelector('.txt-type');
  const words = JSON.parse(txtElement.getAttribute('data-words'));
  const wait = txtElement.getAttribute('data-wait');
  // Init TypeWriter
  new TypeWriter(txtElement, words, wait);
}