$(function(){

  // -------------------------- 홈 json data -----------------------------
  
  fetch('../asset/data/home.json')
  .then((response)  => response.json())
  .then((json) => {
    upHtml = `<span class="ic-up"><span class="blind">up</span></span>`;
    starHtml = `<span class="ic-star"><span class="blind">별점</span></span>`;

    const recent = json.recent;
    const webtoon = json.webtoon;
    const best = json.best;
    const age10f = json.age10f;
    const age10m = json.age10m;
    const age20f = json.age20f;
    const age20m = json.age20m;
    const age30f = json.age30f;
    const age30m = json.age30m;
    const recommend1 = json.recommend1;
    const recommend2 = json.recommend2;
    
    
    
    let recenthtml = '';
    let webtoonhtml = '';
    let besthtml = '';
    let age10fhtml = '';
    let age10mhtml = '';
    let age20fhtml = '';
    let age20mhtml = '';
    let age30fhtml = '';
    let age30mhtml = '';
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
    

    age10f.forEach(element => {
      
      isUp = (element.isUp) ? upHtml : null;

      age10fhtml += `<li class="toon-item">
                      <a href="${element.link}" class="link-toon">
                          <div class="thumb">
                              <img src="${element.imgSrc}" alt="${element.infoTitle}">
                          </div>
                          <div class="info">
                              <em class="rank">${element.rank}</em>
                              <div class="text-box">
                                  <p class="text-main">
                                        <strong class="title">${element.infoTitle}</strong>
                                  </p>
                                  <span class="text-sub">${element.infoAuthor}</span>
                              </div>
                          </div>
                      </a>
                  </li>`;
    });

    age10m.forEach(element => {
      
      isUp = (element.isUp) ? upHtml : null;

      age10mhtml += `<li class="toon-item">
                      <a href="${element.link}" class="link-toon">
                          <div class="thumb">
                              <img src="${element.imgSrc}" alt="${element.infoTitle}">
                          </div>
                          <div class="info">
                              <em class="rank">${element.rank}</em>
                              <div class="text-box">
                                  <p class="text-main">
                                        <strong class="title">${element.infoTitle}</strong>
                                  </p>
                                  <span class="text-sub">${element.infoAuthor}</span>
                              </div>
                          </div>
                      </a>
                  </li>`;
    });

    age20f.forEach(element => {
      
      isUp = (element.isUp) ? upHtml : null;

      age20fhtml += `<li class="toon-item">
                      <a href="${element.link}" class="link-toon">
                          <div class="thumb">
                              <img src="${element.imgSrc}" alt="${element.infoTitle}">
                          </div>
                          <div class="info">
                              <em class="rank">${element.rank}</em>
                              <div class="text-box">
                                  <p class="text-main">
                                        <strong class="title">${element.infoTitle}</strong>
                                  </p>
                                  <span class="text-sub">${element.infoAuthor}</span>
                              </div>
                          </div>
                      </a>
                  </li>`;
    });

    age20m.forEach(element => {
      
      isUp = (element.isUp) ? upHtml : null;

      age20mhtml += `<li class="toon-item">
                      <a href="${element.link}" class="link-toon">
                          <div class="thumb">
                              <img src="${element.imgSrc}" alt="${element.infoTitle}">
                          </div>
                          <div class="info">
                              <em class="rank">${element.rank}</em>
                              <div class="text-box">
                                  <p class="text-main">
                                        <strong class="title">${element.infoTitle}</strong>
                                  </p>
                                  <span class="text-sub">${element.infoAuthor}</span>
                              </div>
                          </div>
                      </a>
                  </li>`;
    });

    age30f.forEach(element => {
      
      isUp = (element.isUp) ? upHtml : null;

      age30fhtml += `<li class="toon-item">
                      <a href="${element.link}" class="link-toon">
                          <div class="thumb">
                              <img src="${element.imgSrc}" alt="${element.infoTitle}">
                          </div>
                          <div class="info">
                              <em class="rank">${element.rank}</em>
                              <div class="text-box">
                                  <p class="text-main">
                                        <strong class="title">${element.infoTitle}</strong>
                                  </p>
                                  <span class="text-sub">${element.infoAuthor}</span>
                              </div>
                          </div>
                      </a>
                  </li>`;
    });

    age30m.forEach(element => {
      
      isUp = (element.isUp) ? upHtml : null;

      age30mhtml += `<li class="toon-item">
                      <a href="${element.link}" class="link-toon">
                          <div class="thumb">
                              <img src="${element.imgSrc}" alt="${element.infoTitle}">
                          </div>
                          <div class="info">
                              <em class="rank">${element.rank}</em>
                              <div class="text-box">
                                  <p class="text-main">
                                        <strong class="title">${element.infoTitle}</strong>
                                  </p>
                                  <span class="text-sub">${element.infoAuthor}</span>
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
    document.querySelector('.age-10f .toon-list').innerHTML = age10fhtml;
    document.querySelector('.age-10m .toon-list').innerHTML = age10mhtml;
    document.querySelector('.age-20f .toon-list').innerHTML = age20fhtml;
    document.querySelector('.age-20m .toon-list').innerHTML = age20mhtml;
    document.querySelector('.age-30f .toon-list').innerHTML = age30fhtml;
    document.querySelector('.age-30m .toon-list').innerHTML = age30mhtml;
    document.querySelector('.recommend1 .toon-list').innerHTML = recommend1html;
    document.querySelector('.recommend2 .toon-list').innerHTML = recommend2html;
    

  })
  


  // -------------------------- 요일별 json data -----------------------------

  fetch('../asset/data/days.json')
  .then((response)  => response.json())
  .then((json) => {
    upHtml = `<span class="ic-up"><span class="blind">up</span></span>`;
    newHtml = `<span class="ic-new"><span class="blind">new</span></span>`;
    starHtml = `<span class="ic-star"><span class="blind">별점</span></span>`;

    const daytop = json.daytop;
    const daybottom = json.daybottom;

    let daytophtml = '';
    let daybottomhtml = '';

    daytop.forEach(element => {
      
      isUp = (element.isUp) ? upHtml : null;

      daytophtml += `<li class="toon-item">
                        <a href="${element.link}" class="link">
                            <div class="thumb">
                                <img src="${element.imgSrc}" alt="${element.infoTitle}">
                            </div>
                            <div class="info">
                                <strong class="title">${element.infoTitle}</strong>
                                <span class="author">${element.infoAuthor}</span>
                                <span class="desc">${element.infoLike}</span>
                                <span class="detail">
                                  ${isUp}
                                </span>
                            </div>
                        </a>
                    </li>`;
    });

    daybottom.forEach(element => {
      
      isNew = (element.isNew) ? upHtml : null;

      daybottomhtml += `<li class="toon-item">
                        <a href="${element.link}" class="link">
                            <div class="thumb">
                                <img src="${element.imgSrc}" alt="${element.infoTitle}">
                            </div>
                            <div class="info">
                                <strong class="title">${element.infoTitle}</strong>
                                <span class="author">${element.infoAuthor}</span>
                                <span class="desc">${element.infoLike}</span>
                                <span class="detail">
                                  ${isNew}
                                </span>
                            </div>
                        </a>
                    </li>`;
    });

    document.querySelector('.top .toon-list').innerHTML = daytophtml;
    document.querySelector('.bottom .toon-list').innerHTML = daybottomhtml;


  })




// -------------------------- 완결작 json data -----------------------------

  fetch('../asset/data/complete.json')
  .then((response)  => response.json())
  .then((json) => {

    const finishtop = json.finishtop;
    const finishbottom = json.finishbottom;

    let finishtophtml = '';
    let finishbottomhtml = '';

    finishtop.forEach(element => {

      finishtophtml += `<li class="toon-item">
                        <a href="${element.link}" class="link">
                            <div class="thumb">
                                <img src="${element.imgSrc}" alt="${element.infoTitle}">
                            </div>
                            <div class="info">
                                <strong class="title">${element.infoTitle}</strong>
                                <span class="author">${element.infoAuthor}</span>
                                <span class="desc">${element.infoLike}</span>
                                <span class="detail">
                                  <span class="ic-star"><span class="blind">별점</span></span>
                                  <span class="score">${element.star}</span>
                                </span>
                            </div>
                        </a>
                    </li>`;
    });

    finishbottom.forEach(element => {

      finishbottomhtml += `<li class="toon-item">
                        <a href="${element.link}" class="link">
                            <div class="thumb">
                                <img src="${element.imgSrc}" alt="${element.infoTitle}">
                            </div>
                            <div class="info">
                                <strong class="title">${element.infoTitle}</strong>
                                <span class="author">${element.infoAuthor}</span>
                                <span class="desc">${element.infoLike}</span>
                                <span class="detail">
                                  <span class="ic-star"><span class="blind">별점</span></span>
                                  <span class="score">${element.star}</span>
                                </span>
                            </div>
                        </a>
                    </li>`;
    });

    document.querySelector('.top2 .toon-list').innerHTML = finishtophtml;
    document.querySelector('.bottom2 .toon-list').innerHTML = finishbottomhtml;


  })  




// -------------------------- 베스트도전 json data -----------------------------

  fetch('../asset/data/best.json')
  .then((response)  => response.json())
  .then((json) => {

    const todaybest = json.todaybest;
    const typetoon = json.typetoon;

    let todaybesthtml = '';
    let typetoonhtml = '';

    todaybest.forEach(element => {

      todaybesthtml +=  `<li class="toon-item">
                            <a href="${element.link}" class="link">
                                <div class="thumb">
                                    <img src="${element.imgSrc}" alt="${element.infoTitle}">
                                </div>
                                <div class="info">
                                    <strong class="title">${element.infoTitle}</strong>
                                    <span class="author">${element.infoAuthor}</span>
                                </div>
                            </a>
                        </li>`;
    });

    typetoon.forEach(element => {

      typetoonhtml += `<li class="toon-item">
                            <a href="${element.link}" class="link">
                                <div class="thumb">
                                    <img src="${element.imgSrc}" alt="${element.infoTitle}">
                                </div>
                                <div class="info">
                                    <strong class="title">${element.infoTitle}</strong>
                                    <span class="author">${element.infoAuthor}</span>
                                    <span class="desc">${element.infoDesc}</span>
                                    <span class="detail">
                                        <span class="ic-star"><span class="blind">별점</span></span>
                                        <span class="score">${element.score}</span>
                                        <span class="date">${element.date}</span>
                                    </span>
                                </div>
                            </a>
                        </li>`;
    });

    document.querySelector('.sc-todaybest .toon-list').innerHTML = todaybesthtml;
    document.querySelector('.sc-typetoon .toon-list').innerHTML = typetoonhtml;


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