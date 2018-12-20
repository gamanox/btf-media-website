var introSection = document.getElementById("intro-section");
var proyectoPage = document.getElementById("proyecto-titulo");

function toggleMute(video) {
  var video = document.getElementById(video);
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
    setTimeout(toggleMute("homepage-video"), 500);
    setTimeout(function() {
      fullpage_api.moveSectionDown();
      console.log("api");
    }, 17500);
  } else if (proyectoPage) {
    $("#social").hide();
    setTimeout(toggleMute("video-fullscreen"), 500);
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
      console.log(index);
      console.log(nextIndex);
      var currentSlide = nextIndex.anchor;
      $("#fullpage").removeClass("active");
      $(".info-anim").addClass("active");
      if (proyectoPage) {
        if (nextIndex.isLast) {
          $("#imdb a").css("color", "black");
        } else {
          $("#imdb a").css("color", "white");
        }
      }
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
