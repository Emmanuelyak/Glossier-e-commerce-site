$(document).on('ready', function() {
    
    $(".regular").slick({
      dots: false,
      nextArrow:'<button type="button" data-role="none" class="slick-next">Next</button>',
      prevArrow:'<button type="button" data-role="none" class="slick-prev">Previous</button>',
      autoplay:false,
      infinite: false,
      slidesToShow: 3,
      slidesToScroll: 3
    });
    
  });