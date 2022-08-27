$(document).ready(function () {
  new WOW().init();

  $('.sliderblock__team').slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    nextArrow: $(".swiper-team-button-next"),
    prevArrow: $(".swiper-team-button-prev"),
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: false,
          variableWidth: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
   
    ]
  });


  var swiper = new Swiper('.gallery__container', {  
    
    slidesPerView: 'auto',
    spaceBetween: 8,
    speed: 5000,
    loop: true,
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true
    },
    breakpoints: {
      // when window width is >= 320px
      480: {
        slidesPerView: 'auto',
        spaceBetween: 8
      },
      // when window width is >= 480px
      767: {
        slidesPerView: 'auto',
        spaceBetween: 8
      },
      // when window width is >= 640px
      1023: {
        slidesPerView: 4,
        spaceBetween: 22
      }
    },
    autoplay: {
      delay: 0,
      disableOnInteraction: false 
    }
  });

  $('.sliderblock__slider-review').slick({
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,
    nextArrow: $(this).find(".arrowRight"),
    prevArrow: $(this).find(".arrowLeft"),
    
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          variableWidth: true
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }  
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
   
    ]
  });

    lightbox.option({
      'resizeDuration': 10,
      'wrapAround': true
    })



  $('.accordeon-titlejs').click(function (event) {
	/* 	$(this).closest('.accordeon-js').find('.accordeon-contentjs').not($(this).next()).hide(300).removeClass('active');
		$(this).closest('.accordeon-js').find('.accordeon-titlejs').not($(this)).removeClass('active'); */
		$(this).toggleClass('active');
		/* $([document.documentElement, document.body]).animate({
			scrollTop: $(this).offset().top
		}, 400);*/
		$(this).next('.accordeon-contentjs').toggleClass('active');
	});


});

(function ($) {
  $(window).on("load", function () {
    if ($(window).width() > 767) {
      $(".textlimit").mCustomScrollbar({
      axis: "y",
      autoHideScrollbar: 0,
    });
    }
    
  });
})(jQuery);


$(document).ready(function () {

  $('.mainslider__slider').slick({
	  infinite: true,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: true,
	  dots: true,
	  nextArrow: '.mainslider__arrowright',
		prevArrow: '.mainslider__arrowleft',
    
	});
  $('.reviewsslider__slider').slick({
	  infinite: true,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
    
	});
  $('.partslider__slider').slick({
	  infinite: true,
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  arrows: true,
	  dots: false,
	  nextArrow: '.partslider__arrowright',
		prevArrow: '.partslider__arrowleft',
    responsive: [
     
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: true
        }
      }
   
    ]
	});
  $('.galleryslider__slider').slick({
	  infinite: true,
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  arrows: true,
	  dots: false,
	  nextArrow: '.galleryslider__arrowright',
		prevArrow: '.galleryslider__arrowleft',
    responsive: [
     
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true
        }
      }
   
    ]
	});
  $('.aboutblock__slider').slick({
	  infinite: true,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	  dots: true
	});
  $('.serts__slider').slick({
	  infinite: true,
	  slidesToShow: 4,
	  slidesToScroll: 1,
	  arrows: false,
	  dots: false,
    draggable: false,
    responsive: [
      {
        breakpoint: 1439,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          draggable: true,
        }
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          draggable: true,
        }
      },
      {
        breakpoint: 620,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          draggable: true,
        }
      }
    ]
	});
  $('.videoslider__slider').slick({
	  infinite: true,
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  arrows: false,
	  dots: false,
    draggable: false,
    responsive: [
 
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          draggable: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          draggable: true,
        }
      }
    ]
	});
  $('.photoslider__slider').slick({
	  infinite: true,
	  slidesToShow: 4,
	  slidesToScroll: 1,
	  arrows: false,
	  dots: false,
    draggable: false,
    responsive: [
 
      {
        breakpoint: 1439,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          draggable: true,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          draggable: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          draggable: true,
        }
      }
    ]
	});

  $(".sliderRight").click(function (e) {
    $(this).closest('.slidersection').find(".slick-slider").slick("slickNext");
  });
  $(".sliderLeft").click(function (e) {
    $(this).closest('.slidersection').find(".slick-slider").slick("slickPrev");
  });

  
  $(".youtubepopup").click(function () {
      var $this = $(this);
      var $iframe = $('<iframe frameborder="0" allow="autoplay; encrypted-media" class="iframe" id="Overlayvideo" allowfullscreen="true">').attr("src", $this.data("link")).css({"width": 400, "height": 300});
      var $title = '';
      $("#video-view").html($title).append($iframe);
      $("#video-popup").show();
  });
  $('#video-close').click(function () {
      $("#video-view").html('')
      $("#video-popup").hide()
  })

  jQuery("a.scrollTo").click(function (event) {
    event.preventDefault()
    let elementClick = jQuery(this).attr("href");
    let destination = jQuery(elementClick).offset().top - 60;
    jQuery("html:not(:animated),body:not(:animated)").animate({
      scrollTop: destination
    }, 900);
    $('.mobilemenu').hide()
    return false;
  });

  $('input[type="tel"]').mask('+7 999 999 99 99')




  $('.js-menu').on('click', function () {
    $('.mobilemenu').toggleClass('active')
  })

  


  $(window).scroll(function () {
    scroll = $(window).scrollTop();
    if (scroll >= 578) {
      $('.totop').addClass('active')
     
    } else {
      $('.totop').removeClass('active');
    } 
  });


  if ($(window).width() < 1021) { 
    $(window).scroll(function () {
      scroll = $(window).scrollTop(); 

    if (scroll >= 578) $('#header').addClass('fixed');
    else $('#header').removeClass('fixed');

    });
  }

})

$(document).ready(function() {
  $('.reviews__rating').each(function () {
    $(this).find('span.rat-stars-active').css('width', $(this).text() * 21);
  });
  $('.ratingform .rating').mousemove(function (e) {
    if ($('.rating__formvalue span').text() === '0') {
      var stars = parseInt((e.pageX - $(this).offset().left) / 21) * 21 + 21;
      $(this).find('span.rat-stars-active').css('width', stars);
    }
      
  });
  $('.ratingform .rating').mouseout(function (e) {
      $(this).find('span.rat-stars-active').css('width', $(this).text() * 21);
  });
  $('.ratingform .rating').click(function (e) {
      var stars = parseInt((e.pageX - $(this).offset().left) / 21) + 1;
      var $inp = $('.rating input[name="rating"]');
      $inp.val(stars);
      $('.rating input[name="rating"]').val(stars);
      $(this).find('span.rat-stars-active').css('width', stars * 21);
  });

  $('.ratingform .rating').click(function (e) {
    var stars = parseInt((e.pageX - $(this).offset().left) / 24) + 1;
    var $inp = $('.ratingform input[name="rating"]');
    $inp.val(stars);
    $('.blograting__form .blograting__rating span').html(stars);
    $('.rating__formvalue span').text(stars)
  });
})
