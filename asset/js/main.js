$(function(){

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

    var swiper = new Swiper(".sc-collection .swiper", {
        slidesPerView:'auto',
        spaceBetween: 0,
        pagination: {
            el: ".slide-num .italic",
            type: "custom",
            renderCustom: function(swiper, current, total){
              return `${current}/${total}`
            }
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
    });

  

})