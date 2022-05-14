/*****************************************************/
/*** custom script for this project ***/
/*****************************************************/



(function ($) {
  "use strict";

  (function () {
    var header = new Headroom(document.querySelector(".main-nav"), {
      tolerance: 5,
      offset: 50,
      classes: {
        "initial": "animated",
        "pinned": "slideDown",
        "unpinned": "slideUp"
      }
    });
    header.init();
  }());

  $('a[href*="#"]:not([href="#"]):not(a[data-toggle="collapse"], a[data-toggle="tab"])').on('click', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

  $(".share").jsSocials({
    showLabel: false,
    showCount: false,
    shares: ["email", "twitter", "facebook", "whatsapp"]
  });

  const player = new Plyr('#player');


})(jQuery);


/**************************************************/
var tween = gsap.timeline();
tween.to('#animation', 1, { x: '-110%', y: '-10%', rotationY: 360, ease: 'Expo.ease' })
.to('#animation', 1, { rotationY: 0, x: '-5%', y: '20%', ease: 'Expo.easeOut' })
.to('#animation', 1, { x: '-120%', y: '0%', duration: 3, rotationY: 360, ease: 'Expo.easeOut' })
.to('#animation', 1 , { x: '20%', y: '5%', rotationY: 0, ease: 'power2.easeOut' })

var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({ triggerElement: "#trigger1", duration: 3000, triggerHook: 0, reverse: true })
  .setTween(tween)
  .setPin("#animation")
  .addTo(controller)