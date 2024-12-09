document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('#bannerCarousel');
    const carouselInstance = bootstrap.Carousel.getOrCreateInstance(carousel);

    // Pause carousel on hover
    carousel.addEventListener('mouseenter', () => carouselInstance.pause());
    carousel.addEventListener('mouseleave', () => carouselInstance.cycle());
  });


    // Navbar Animation
    var tabsNewAnim = $('#navbar-animmenu');
    var activeItemNewAnim = tabsNewAnim.find('.active');
    var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
    var itemPosNewAnimLeft = activeItemNewAnim.position();

    $(".hori-selector").css({
        "left": itemPosNewAnimLeft.left + "px",
        "width": activeWidthNewAnimWidth + "px"
    });

    $("#navbar-animmenu").on("click", "li", function () {
        $('#navbar-animmenu ul li').removeClass("active");
        $(this).addClass('active');
        var activeWidthNewAnimWidth = $(this).innerWidth();
        var itemPosNewAnimLeft = $(this).position();
        $(".hori-selector").css({
            "left": itemPosNewAnimLeft.left + "px",
            "width": activeWidthNewAnimWidth + "px"
        });
    });

    $(document).on("click", "#navbar-animmenu ul li", function () {
      var tabId = $(this).data("tab");
      $("#navbar-animmenu ul li").removeClass("active");
      $(this).addClass("active");
      $(".tab-content").removeClass("active");
      $("#" + tabId).addClass("active");
      });