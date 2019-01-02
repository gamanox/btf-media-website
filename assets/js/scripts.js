var introSection = document.getElementById("intro-section");
var proyectoPage = document.getElementById("proyecto-titulo");

function toggleMute(video) {
  var video = document.getElementById(video);
  if (video.muted) {
    video.muted = false;
  } else {
    video.muted = false;

    // video.pause();
    video.play();
  }
}

$(document).ready(function() {
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

    afterLoad: function(origin, destination, direction) {
      var currentIndex = 0;
      var currentSlide = destination.anchor;
      $("#fullpage").removeClass("active");
      $(".info-anim").addClass("active");
       if (proyectoPage) {
        if (destination.isLast) {
          $("#imdb a").css("color", "black");
        } else {
          $("#imdb a").css("color", "white");
        }
        console.log(destination);

        var sectionCount = $(".section").length;
        if (destination.index < sectionCount) {
          console.dir(destination.index);
          console.dir(destination);

          var sectionPercent = ((destination.index+1 ) * 100) / sectionCount+'%';
          console.log(sectionPercent);
          console.log(sectionCount);
          $("#progressbar .bar").css({
            height: sectionPercent
          });
          
        }
      } else {
        console.log(destination);

        var sectionCount = $(".section").length;
        if (destination.index < sectionCount) {
          console.dir(destination.index);
          console.dir(destination);

          var sectionPercent = ((destination.index+1) * 100) / sectionCount+'%';
          console.log(sectionPercent);
          console.log(sectionCount);
          $("#progressbar .bar").css({
            height: sectionPercent
          });
          
        }
      }
    }
    // fadingEffect: "slides"
  });
  if (introSection) {
    setTimeout(toggleMute("homepage-video"), 500);
    setTimeout(function() {
      var menuOpen = $(".menu_btn_white").hasClass('active');
      fullpage_api.moveSectionDown();
      
      if (menuOpen) {
        $(".logo_small_white, #progressbar").removeClass("active");
      } else {
        $(".logo_small_white, #progressbar").addClass("active")
      }  
      }, 500);
      setTimeout(() => {
        $("#intro-section").remove();

        fullpage_api.reBuild();
        
      }, 2000);
  } else if (proyectoPage) {
    $(".logo_small_white, #progressbar").addClass("active");

    var pathName = window.location.pathname;
    var nextProj = $("#proyecto-backstage").data("id") + 1;
    var pageCount = $("#proyecto-backstage").data("id");
    var allProjectsCount = $(".pie-de-pagina").length;
    $(".pie-de-pagina").removeClass("active");
    if (pageCount < allProjectsCount) {
      $("#proyecto-" + nextProj).addClass("active");
    }
    $("#social").hide();
    setTimeout(toggleMute("video-fullscreen"), 500);
  } else {
    $(".logo_small_white, #progressbar").addClass("active");
  }

  
  // fullpage_api.setAllowScrolling(true);
  $(".menu_btn_white").on("click", function(event) {
    var menuOpen = $(this).hasClass('active');
    event.preventDefault();
    $(this).toggleClass("active");
    $("#menu").toggleClass("active");
    $(".btn-politicas").toggleClass("active");
    if(menuOpen){
      console.log(menuOpen);
      $(".logo_small_white, #progressbar").addClass("active");
      $("#menu").removeClass("politicas")
      $(".btn-politicas").removeClass("active");
      $(".btn-politicas-back").removeClass("active");
      $("#social").removeClass("d-none");
      $("#buttons").removeClass("active");
      $("#politicas").removeClass("active");
    } else {
      console.log(menuOpen);
      $(".logo_small_white, #progressbar").removeClass("active");
    }
  });
  //boton politicas de privacidad
  $(".btn-politicas").on("click", function(event) {
    event.preventDefault();
    $("#menu").toggleClass("politicas")
    $(".btn-politicas").toggleClass("active");
    $(".btn-politicas-back").toggleClass("active");
    $("#social").toggleClass("d-none");
    $("#buttons").toggleClass("active");
    $("#politicas").toggleClass("active");
  });
  var pathLng = window.location.pathname;
  var res = pathLng.split("/");
  var currentLang = res[1];

  console.log(currentLang);
  if (currentLang == "en") {
    $(".lang").removeClass("active");
    $(".lang." + currentLang).addClass("active");
  } else {
    $(".lang").removeClass("active");
    $(".lang.es").addClass("active");
  }
  $(".en").on("click", function(event) {});
  $(".carousel").waterwheelCarousel();
  // $('.carousel').each(function (index, element) {

  //   element == this;
  //   console.log(element);
  //   $(element).waterwheelCarousel();
  // });
});
