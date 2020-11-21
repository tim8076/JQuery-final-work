
$(document).ready(function () {
    
//   選單收合 
    $('.nav-link').click(function (e) { 
        e.preventDefault();
        $(this).siblings('.submenu').slideToggle(500);
    });
// scroll top 設定

    $('.scroll-top').click(function(e){
        e.preventDefault();
        $('html,body').animate({
            scrollTop:0 
        },1000);
    });

//首頁輪播設定
    var mySwiper = new Swiper('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        autoplay: true,
        speed: 500,
        effect: 'fade',

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

    })
//燈箱設定

    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true,
        'positionFromTop': 100,
    })

});