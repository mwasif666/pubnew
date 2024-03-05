$(document).ready(function () {

  // MOBILE-NAVIGATION-LIST

  $('.navigation-list').clone().appendTo('.mobile-menu-body');

  $('.hamburger').on('click', function () {
    if (!$('.mobile-menu').hasClass('mobile-view')) {
      $('.mobile-menu').addClass('mobile-view');
    } else {
      $('.mobile-menu').removeClass('mobile-view');
    }
  });

  $('#menu-close').on('click', function () {
    $('.mobile-menu').removeClass('mobile-view');
    $('.dropdown-li').removeClass('open');
    $('.dropdown-li').find('>.dropdown-list').hide(200);
  });

  $('.mobile-menu .dropdown-li>a').append('<i class="fa fa-angle-right"></i>')

  $('.mobile-menu .dropdown-li>a').click(function () {
    const parent = $(this).parent('.dropdown-li');
    if (!parent.hasClass('open')) {
      const ulParent = parent.parent();
      ulParent.find('.dropdown-li.open').find('>.dropdown-list').hide(200);
      ulParent.find('.dropdown-li.open').removeClass('open');
      parent.addClass('open');
      parent.find('>.dropdown-list').show(200);
    } else {
      parent.removeClass('open');
      parent.find('>.dropdown-list').hide(200);
    }
  });


  // SCROLL JS

  // $('.scroller').mCustomScrollbar();

  // WOW JS

  new WOW().init();

  // REVIEW SLIDER JS
  
 $(".client-slider").slick({
  dots: false,
  infinite: false,
  arrows: true,
  autoplay: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
  {
    breakpoint: 1200,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 992,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 768,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }
 
]
});

  $('.our-journal-slider').slick({
    arrows: false,

    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          dots: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          slidesToScroll: 1,
          arrows: false,
          dots: false

        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  $('.company-slider').slick({
    arrows: false,
    dots: false,
    infinite: true,
    slidesToScroll: 1,
    slidesToShow: 1,
    cssEase: 'linear',
    speed: 10000,
    initialSlide: 0,
    autoplaySpeed: 0,
    autoplay:true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          slidesToScroll: 1

        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });


});