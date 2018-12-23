var introSection = document.getElementById("intro-section");
var proyectoPage = document.getElementById("proyecto-titulo");

function toggleMute(video) {
  var video = document.getElementById(video);
  if (video.muted) {
    video.muted = false;
  } else {
    video.muted = false;

    video.pause();
    video.play();
  }
}

$(document).ready(function() {
  if (introSection) {
    setTimeout(toggleMute("homepage-video"), 500);
    setTimeout(function() {
      fullpage_api.moveSectionDown();
      $('.logo_small_white').addClass('active');
    }, 17500);
  } else if (proyectoPage) {
    var pathName = window.location.pathname;
    var nextProj = $('#proyecto-backstage').data('id')+1;
    var pageCount = $('#proyecto-backstage').data('id');
    var allProjectsCount = $('.pie-de-pagina').length;
    $('.pie-de-pagina').removeClass('active');
    if(pageCount < allProjectsCount) {
    $('#proyecto-'+nextProj).addClass('active');
    }
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
      var currentSlide = nextIndex.anchor;
      console.dir(nextIndex);
      console.dir(index);
      $("#fullpage").removeClass("active");
      $(".info-anim").addClass("active");
      if(introSection && nextIndex.index>0) {
        
          $('#intro-section').remove();
          fullpage_api.reBuild();
        
      } else if (proyectoPage) {
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
  $(".menu_btn_white").on("click", function(event) {
    event.preventDefault();
    $(this).toggleClass("active");
    $("#menu").toggleClass("active");
    $(".btn-politicas").toggleClass("active");
    $(".logo_small_white").toggleClass("active");
  });
  //boton politicas de privacidad
  $(".btn-politicas").on("click", function(event) {
    event.preventDefault();
    $(".btn-politicas").toggleClass("active");
    $(".btn-politicas-back").toggleClass("active");
    $("#buttons").toggleClass("active");
    $("#politicas").toggleClass("active");
  });
  var pathLng = window.location.pathname;
  var res = pathLng.split("/");
  var currentLang = res[1];
  
  console.log(currentLang);
  if(currentLang == "en") {
    $('.lang').removeClass('active');
    $('.lang.'+currentLang).addClass('active');
  } else {
    $('.lang').removeClass('active');
    $('.lang.es').addClass('active');
  }
    $(".en").on("click", function(event) {
  })
  $(".carousel").waterwheelCarousel();
  // $('.carousel').each(function (index, element) {

  //   element == this;
  //   console.log(element);
  //   $(element).waterwheelCarousel();
  // });
});
