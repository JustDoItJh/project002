$(function(){


  // 이달의 신작 Swiper
  var swiper = new Swiper(".sc-new .new-cont", {
    slidesPerView: 1, // 슬라이드에 보여지는 개수
    spaceBetween: 10, // 슬라이드 사이 간격
    loop: true,
    pagination: {
      el: ".curr-page .curr",
      type: "custom",
      renderCustom: function(swiper, current, total){
        return `${current} / ${total}`
      }
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


    // 이달의 신작 Swiper
    var swiper = new Swiper(".sc-age .age-cont", {
      slidesPerView: 1, // 슬라이드에 보여지는 개수
      spaceBetween: 10, // 슬라이드 사이 간격
      loop: true,
      slideToClickedSlide: true,
      pagination: {
        el: ".btn-switch",
        type: "custom",
        
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });


    var swiper = new Swiper(".sc-top10 .top10", {
      slidesPerView: 1, // 슬라이드에 보여지는 개수
      spaceBetween: 10, // 슬라이드 사이 간격
      loop: true,
      pagination: {
        el: ".btn-switch",
        type: "custom",
        
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

  
  // More Button
    
  $('.btn-info').click(function(){
      $('.info-hideArea').slideToggle();

      if($(this).hasClass('active')){
          $(this).removeClass('active')
          $('.btn-info::after').html('+');
      } else {
          $(this).addClass('active')
          $('.btn-info::after').html('-');
      }
  });


  // Top Button

  $(".btn-top").click(function() {   
    $('html, body').animate({
      scrollTop : 0    // 0 까지 animation 이동합니다.
     }, 400);          // 속도 400
     return false;
  });

})