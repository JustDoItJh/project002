$(function(){


  
  fetch('../asset/data/home.json')
  .then((response)  => response.json())
  .then((json) => {
    upHtml = `<span class="ic-up"><span class="blind">up</span></span>`;
    starHtml = `<span class="ic-star"><span class="blind">별점</span></span>`;

    const recent = json.recent;
    const webtoon = json.webtoon;
    const best = json.best;
    const age = json.age;
    const recommend1 = json.recommend1;
    const recommend2 = json.recommend2;
    
    
    
    let recenthtml = '';
    let webtoonhtml = '';
    let besthtml = '';
    let agehtml = '';
    let recommend1html = '';
    let recommend2html = '';
    

    recent.forEach(element => {
      
      isUp = (element.isUp) ? upHtml : null;

      recenthtml += `<li class="toon-item">
                        <a href="${element.link}" class="link-toon">
                            <div class="thumb">
                                <img src="${element.imgSrc}" alt="${element.infoTitle}">
                                ${isUp}
                            </div>
                            <div class="info">
                                <div class="text-box">
                                    <p class="text-main">
                                        <strong class="title">${element.infoTitle}</strong>
                                    </p>
                                </div>
                            </div>
                        </a>
                    </li>`;
    });


    webtoon.forEach(element => {
      
      isUp = (element.isUp) ? upHtml : null;

      webtoonhtml += `<li class="toon-item">
                        <a href="${element.link}" class="link-toon">
                            <div class="thumb">
                                <img src="${element.imgSrc}" alt="${element.infoTitle}">
                            </div>
                            <div class="info">
                                <em class="rank">${element.rank}</em>
                                <div class="text-box">
                                    <p class="text-main">
                                        <strong class="title">${element.infoTitle}</strong>
                                        ${isUp}
                                    </p>
                                    <span class="text-sub">${element.infoRound}</span>
                                </div>
                            </div>
                        </a>
                    </li>`;
    });


    best.forEach(element => {
      
      isUp = (element.isUp) ? upHtml : null;

      besthtml += `<li class="toon-item">
                        <a href="${element.link}" class="link-toon">
                            <div class="thumb">
                                <img src="${element.imgSrc}" alt="${element.infoTitle}">
                            </div>
                            <div class="info">
                                <em class="rank">${element.rank}</em>
                                <div class="text-box">
                                    <p class="text-main">
                                        <strong class="title">${element.infoTitle}</strong>
                                        ${isUp}
                                    </p>
                                    <span class="text-sub">${element.infoRound}</span>
                                </div>
                            </div>
                        </a>
                    </li>`;
    });
    

    age.forEach(element => {
      
      isUp = (element.isUp) ? upHtml : null;

      agehtml += `<li class="toon-item">
                      <a href="${element.link}" class="link-toon">
                          <div class="thumb">
                              <img src="${element.imgSrc}" alt="${element.infoTitle}">
                          </div>
                          <div class="info">
                              <em class="rank">${element.rank}</em>
                              <div class="text-box">
                                  <p class="text-main">
                                        <strong class="title">${element.infoTitle}</strong>
                                        ${isUp}
                                  </p>
                                  <span class="text-sub">${element.infoRound}</span>
                              </div>
                          </div>
                      </a>
                  </li>`;
    });


    recommend1.forEach(element => {
      
      isUp = (element.isUp) ? upHtml : null;

      recommend1html += `<li class="toon-item">
                            <a href="${element.link}" class="link-toon">
                                <div class="thumb">
                                    <img src="${element.imgSrc}" alt="${element.infoTitle}">
                                </div>
                                <div class="info">
                                    <div class="text-box">
                                        <p class="text-main">
                                            <strong class="title">${element.infoTitle}</strong>
                                        </p>
                                        <span class="author">${element.infoAuthor}</span>
                                    </div>
                                </div>
                            </a>
                        </li>`;
    });


    recommend2.forEach(element => {
      
      isUp = (element.isUp) ? upHtml : null;

      recommend2html += `<li class="toon-item">
                            <a href="${element.link}" class="link-toon">
                                <div class="thumb">
                                    <img src="${element.imgSrc}" alt="${element.infoTitle}">
                                </div>
                                <div class="info">
                                    <div class="text-box">
                                        <p class="text-main">
                                            <strong class="title">${element.infoTitle}</strong>
                                        </p>
                                        <span class="author">${element.infoAuthor}</span>
                                    </div>
                                </div>
                            </a>
                        </li>`;
    });

    
    

    document.querySelector('.sc-latest .toon-list').innerHTML = recenthtml;
    document.querySelector('.webtoon .toon-list').innerHTML = webtoonhtml;
    document.querySelector('.best .toon-list').innerHTML = besthtml;
    document.querySelector('.sc-age .toon-list').innerHTML = agehtml;
    document.querySelector('.recommend1 .toon-list').innerHTML = recommend1html;
    document.querySelector('.recommend2 .toon-list').innerHTML = recommend2html;
    

  })
  







  // --------------------------이달의 신작 Swiper-----------------------------

  var swiper = new Swiper(".sc-new .swiper", {
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

  });

    const ageSlide = new Swiper(".sc-age .swiper", {
      slidesPerView: 1.1, // 슬라이드에 보여지는 개수
      spaceBetween: 16, // 슬라이드 사이 간격
      loop: true,
    });

    $('.sc-age .btn-sort').click(function(){
      idx = $(this).index();
      $(this).addClass('active').siblings().removeClass('active');
      ageSlide.slideToLoop(idx)
    });




    // -------------------------실시간 랭킹 top10 Swipepr--------------------------

    const topSlide = new Swiper(".sc-top10 .swiper", {
      slidesPerView: 1, // 슬라이드에 보여지는 개수
      spaceBetween: 10, // 슬라이드 사이 간격
      loop: true,
    });

    $('.sc-top10 .btn-sort').click(function(){
      idx2 = $(this).index();
      $(this).addClass('active').siblings().removeClass('active');
      topSlide.slideToLoop(idx2 - 2);
    });
  

    var swiper = new Swiper(".sc-common .swiper", {
      slidesPerView: 1, // 슬라이드에 보여지는 개수
      spaceBetween: 50, // 슬라이드 사이 간격
      loop: true,
      pagination: {
        el: ".curr-page .curr",
        type: "custom",
        renderCustom: function(swiper, current, total){
          return `${current} / ${total}`
        }
      },
  
    });

    var swiper = new Swiper(".sc-common2 .swiper", {
      slidesPerView: 1, // 슬라이드에 보여지는 개수
      spaceBetween: 50, // 슬라이드 사이 간격
      loop: true,
      pagination: {
        el: ".curr-page .curr",
        type: "custom",
        renderCustom: function(swiper, current, total){
          return `${current} / ${total}`
        }
      },
  
    });



  // More Button
    
  $('.btn-info').click(function(){
      $('.hide-box').slideToggle();

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