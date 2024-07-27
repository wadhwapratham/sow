$(document).ready(function(){
  $('.homepage-banners').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  });
  
  $('.insider-guide').slick({
    infinite: false,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    arrows:  true,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2.5,
        slidesToScroll: 1,
        infinite: false,
        dots: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 525,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
  });

  $('.product-variant-recommendations').slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows:  true,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        dots: false
      }
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 525,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
  });

  $('.nutri-wrapper').slick({
    infinite: true,
    arrows:  false,
    speed: 5000,
    variableWidth: true,
    autoplay: true,
    cssEase: 'linear',
    draggable:false,
    autoplaySpeed: 0,
    dots: false
  });

  $('.ingredients-slider').slick({
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows:  true,
    dots: false,
    responsive: [
    {
      breakpoint: 9999,
      settings: "unslick"
    },
    {
      breakpoint: 525,
      settings: {
        slidesToShow: 1.2,
        dots: false,
        slidesToScroll: 1
      }
    }
  ]
  });

  if ($(window).width() < 600) {
    $('.instagram-posts').slick({
    infinite: false,
    slidesToShow: 1.3,
    slidesToScroll: 1,
    arrows:  true,
    dots: false
  });
}


 

  $('.article-trnd-wrapper').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:  true,
    dots: false,
    responsive: [
    {
      breakpoint: 9999,
      settings: "unslick"
    },
    {
      breakpoint: 525,
      settings: {
        slidesToShow: 1,
        dots: false,
        slidesToScroll: 1
      }
    }
  ]
  });

  $('.our-prducts').slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows:  true,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        dots: false
      }
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 525,
      settings: {
        slidesToShow: 1.1,
        slidesToScroll: 1
      }
    }
  ]
  });

  
  $('.main-category-wrapper').slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        dots: false,
        arrows: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 525,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

  $('.readmore').click(function(){
    $(this).parent().find('.content_secondhalf').show();
    $('.readless').show();
    $(this).hide();
  });
  $('.readless').click(function(){
    $(this).parent().find('.content_secondhalf').hide();
    $(this).hide();
    $('.readmore').show();
  });

  // $('.ingredients-wrapper').slick({
  // dots: false,
  // infinite: false,
  // speed: 300,
  // slidesToShow: 2,
  // slidesToScroll: 1,
  // responsive: [
  //   {
  //     breakpoint: 2560,
  //     settings : "unslick"
  //   },
  //   {
  //     breakpoint: 525,
  //     settings: {
  //       slidesToShow: 1,
  //       slidesToScroll: 1,
  //       dots: true,
  //       arrows: false
  //     }
  //   }
  // ]
  // });

  // $('.container-main-ethics').slick({
  // dots: false,
  // infinite: false,
  // speed: 300,
  // slidesToShow: 4,
  // slidesToScroll: 1,
  // responsive: [
  //   {
  //     breakpoint: 1024,
  //     settings: {
  //       slidesToShow: 4,
  //       slidesToScroll: 1
  //     }
  //   },
  //   {
  //     breakpoint: 769,
  //     settings: {
  //       slidesToShow: 3,
  //       slidesToScroll: 1,
  //       arrows: false
  //     }
  //   },
  //   {
  //     breakpoint: 480,
  //     settings: {
  //       slidesToShow: 2,
  //       slidesToScroll: 1
  //     }
  //   }
  // ]
  // });

  $('.enquireBtn,.productEnquire').click(function(e){
    e.preventDefault();
    var productId = $(this).attr('data-product-id');
    localStorage.setItem("enquireProduct", productId);
    window.location.href = "/pages/contact";
  });
  

  if (window.location.href == 'https://sowfoods.co/pages/contact'){
    var enquiureId = localStorage.getItem("enquireProduct");
    const jsonData = $('#jsonpr');
    var selectedVar = '';
    if (enquiureId){
      $('#jsonpr option').each(function(){
        var productIdForm = $(this).attr('value');
        if (productIdForm == enquiureId){
          $(this).attr('selected',true);
          selectedVar = $(this).text().trim();
        }
      });
      $('#product-inquiry').val(selectedVar);
    }
  }

  $('.faq-question').click(function(){
    $(this).parent().find('.faq-answer').slideToggle();
    $(this).parent().siblings().find('.faq-answer').slideUp();
  })

  $('.product-testimonial').slick({
  slidesToShow: 3,
  adaptiveHeight: true,
  autoplay: true,
  autoplaySpeed: 5000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 525,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});
  $('.product-testimonial').on('init', function(event, slick){
      $('.product-testimonial').slick('slickGoTo', 1);
  })
    ;
// collection page image change on swatch click
$('.variant-itemcontainer .labelFlavor').click(function(){
  $(this).addClass('checked');
  $(this).siblings().removeClass('checked');
  var varImg = $(this).children('input').data('variant-image');
  if (varImg.length > 0){
    $(this).parents('.grid__item').find('.product-image-container img').attr('src',varImg);
  }
});

  
  
});