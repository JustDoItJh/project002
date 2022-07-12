$(function(){

    /**
     * 메뉴 업 다운
     * 
     * @version 1.0.0
     * @since 2022-01-16
     * @author 본인이름 (Nico)
     */
    lastScroll = 0;

    $(window).scroll(function(){
        currScroll = $(this).scrollTop();

        
        if(currScroll > 0) {
            $('.header').addClass('active')
        } else {
            $('.header').removeClass('active')
        }

        if(currScroll > lastScroll) {
            $('.header').addClass('hide')
        } else {
            $('.header').removeClass('hide')
        }

        lastScroll = currScroll

    })
    


});
