$('#menu__toggle').change(function () {
    if ($('#menu__toggle').is(':checked')) {
      $("body").css("position", "fixed");
    } else {
      $("body").css("position", "static");
    }
  });

  $(document).ready(function () {
    $('.slider').slick({
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      adaptiveHeight: true,
      prevArrow: '<button class="slide-arrow prev-arrow"></button>',
      nextArrow: '<button class="slide-arrow next-arrow"></button>'
    });
  })