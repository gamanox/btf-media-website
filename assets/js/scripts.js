$(document).ready(function() {
  $( ".drag" ).draggable();
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
    licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",
    // anchors: ["intro", "methodology", "team", "vision", "news", "contact"],
    onLeave: function() {},
    afterLoad: function(index, nextIndex) {
      var currentSlide = nextIndex.anchor;
    }
    // fadingEffect: "slides"
  });
  // fullpage_api.setAllowScrolling(true);
  $('.menu_btn_white').on('click', function(){
    console.log('click');
    
    event.preventDefault();
    $(this).toggleClass('active');
    $('#menu').toggleClass('active');
  });
//boton politicas de privacidad
  $('.next_menu').on('click', function(){
    console.log('click');
    
    event.preventDefault();
    $('.next_menu').toggleClass('active');
    $('#buttons').toggleClass('active');
    $('#politicas').toggleClass('active');
  });
  $('.carousel').waterwheelCarousel();
  // $('.carousel').each(function (index, element) {

  //   element == this;
  //   console.log(element);
  //   $(element).waterwheelCarousel();
  // });
});