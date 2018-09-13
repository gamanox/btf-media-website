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
    licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",
    // anchors: ["intro", "methodology", "team", "vision", "news", "contact"],
    onLeave: function() {},
    afterLoad: function(index, nextIndex) {
      var currentSlide = nextIndex.anchor;
    }
    // fadingEffect: "slides"
  });
  // fullpage_api.setAllowScrolling(true);
});
