var introSection = document.getElementById("intro-section");

function toggleMute() {
  var video = document.getElementById("homepage-video");
  if (video.muted) {
    video.muted = false;
  } else {
    video.muted = true;

    video.play();
    console.log("mute");
  }
}

$(document).ready(function() {
  if (introSection) {
    setTimeout(toggleMute, 500);
    setTimeout(function() {
      fullpage_api.moveSectionDown();
      console.log("api");
    }, 17500);
  }

  new fullpage("#fullpage", {
    //options here
    autoScrolling: true,
    scrollHorizontally: false,
    // scrollOverflow: true,
    // fixedElements: "#footer",
    // offsetSections: true,
    fitToSection: true,
    animateAnchor: true,
    recordHistory: true,
    fadingEffect: true,
    // scrollingSpeed: 1000,
    licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",
    // anchors: ["intro", "methodology", "team", "vision", "news", "contact"],
    onLeave: function() {
      $("#fullpage").addClass("active");
      $(".info-anim").removeClass("active");
    },
    afterLoad: function(index, nextIndex) {
      var currentSlide = nextIndex.anchor;
      $("#fullpage").removeClass("active");
      $(".info-anim").addClass("active");
    }
    // fadingEffect: "slides"
  });
  // fullpage_api.setAllowScrolling(true);
  $(".menu_btn_white").on("click", function() {
    console.log("click");

    event.preventDefault();
    $(this).toggleClass("active");
    $("#menu").toggleClass("active");
    $(".btn-politicas").toggleClass("active");
  });
  //boton politicas de privacidad
  $(".btn-politicas").on("click", function() {
    console.log("click");
    event.preventDefault();
    $(".btn-politicas").toggleClass("active");
    $(".btn-politicas-back").toggleClass("active");
    $("#buttons").toggleClass("active");
    $("#politicas").toggleClass("active");
  });
  $(".carousel").waterwheelCarousel();
  // $('.carousel').each(function (index, element) {

  //   element == this;
  //   console.log(element);
  //   $(element).waterwheelCarousel();
  // });
});
