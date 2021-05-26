
$(document).ready(function () {
    //리사이징 할때마다 새로고침
    var lastWidth = $(window).width();
    $(window).resize(function () {
        if ($(window).width() != lastWidth) {
            location.reload();
            lastWidth = $(window).width();
            return false;
        }
    });

//Javascript
//최초 로드 시 iframe 높이값 비율에 맞게 세팅
var $videoIframe = document.getElementById('video');
var responsiveHeight = $videoIframe.offsetWidth * 0.5625;
$videoIframe.setAttribute('height', responsiveHeight);

//브라우저 리사이즈 시 iframe 높이값 비율에 맞게 세팅
window.addEventListener('resize', function(){
    responsiveHeight = $videoIframe.offsetWidth * 0.5625;
    $videoIframe.setAttribute('height', responsiveHeight);
});

// vegas slide
$(function(){
    $('.header').vegas({
        init: function (globalSettings) {
            console.log("Init");
        },
        play: function (index, slideSettings) {
            console.log("Play");
        },
        walk: function (index, slideSettings) {
            console.log("Slide index " + index + " image " + slideSettings.src);
        },
        slides:[
            {src: "../img/header_bg.png", delay:3800},
            {src: "../img/header_bg2.png", delay:3800},
            {src: "../img/header_bg3.png", delay:3800},
            {src: "../img/header_bg5.png", delay:3800},

        ],
        transition: 'fade'
    })
})





    // //????? 
    // $("nav .snb ul li a").hover(function () {
    //     $("nav .snb ul li a").addClass("on");
    // })


    $(".roundstep").hover(function(){
        $(this).toggleClass("on");
      });


    //-----------------------------모바일메뉴
    // 모바일메뉴 open/close
    $(".mMenuBt").click(function () {
        $("nav").addClass("open");
        // nav에 open클래스 추가/삭제
    });
    $(".mCloseBt").click(function () {
        $("nav").removeClass("open");
        // nav에 open클래스 추가/삭제
    });
    if ($(window).width() < 641) {
        // 모바일용 아코디언 메뉴
        $(".mSnb").hide();
        // .mSnb를 숨기고 시작
        $(".gnbMenu > .title").click(function () {
            $(this).next().slideToggle(300);
            //this 다음 요소를 슬라이드다운
            $(".gnbMenu > .title").not(this).next().slideUp(300);
            return false;
            // a href="#"일때 갈곳이 없으면 무조건 페이지 상단(처음)으로 이동하는데
            // 클릭한 다음 링크기능을 수행못하도록 return false;를 입력
        });
    }

    //-----------------------------스크롤버튼
    $(".scroll span").each(function () {
        var thisOffset = $("." + $(this).data('id')).offset().top;

        $(this).click(function () {
            $("html, body").animate({
                scrollTop: thisOffset
            }, 1000);
            $(this).addClass('on');
        });
    });

});

// $("div .roundtxt p.button").hover(function(){
//     $("div .roundtxt p.button").addclass('on')

// })


// var swiper = new Swiper(".mySwiper.event", {
//     direction: "vertical",
//     slidesPerColumn: 2,
//     spaceBetween: 0,
//     mousewheel: true,
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//   });








// sec01 pagination 마을 소개 섹션 스슬

var swiper = new Swiper(".mySwiper.village", {
    slidesPerView: 1,
    spaceBetween: 100,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});


// 이벤트 섹션 썸네일 
var swiper3 = new Swiper(".thumbSlide", {
    direction: "vertical",
    loop: true,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  });
  var swiper4 = new Swiper(".mainSlide", {
    loop: true,
    navigation: {
      nextEl: ".mainSlide .swiper-button-next",
      prevEl: ".mainSlide .swiper-button-prev",
    },
    thumbs: {
      swiper: swiper3,
    },
  });




    // 사진이 꽉차보이는 갤러리디자인
    // $('.slider2.slider-for').slick({
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     asNavFor: '.slider2.slider-nav'
    // });
    // $('.slider2.slider-nav').slick({
    //     slidesToShow: 3,
    //     slidesToScroll: 3,
    //     asNavFor: '.slider2.slider-for',
    //     infinite: true,
    //     centerMode: true,
    //     focusOnSelect: true,
    // });





// 행사 이벤트 스와이퍼 슬라이드 
// var swiper = new Swiper(".mySwiper.list", {
//     pagination: 1,
//     slidesPerView: 2,
//     spaceBetween: 30,
//     pagination: {
//         el: ".swiper-pagination.list",
//         clickable: true,
//     },
// });


//----------------------------------------------------


//섹션 2 탭



$(".tabV ul li").click(function () {
    $(this).addClass('on').siblings().removeClass('on');
    $("#" + $(this).data('id')).addClass('on').siblings().removeClass('on');
});

//Tab

// $(".fadeTab .conBox").hide().eq(0).show();
// $(".fadeTab li").click(function () {
//     $(this).addClass('on').siblings().removeClass('on');
//     $("#" + $(this).data('id')).fadeIn(1000)
//         .siblings('.conBox').fadeOut(300);
// });


//----------------------------------------------------





























//----------------------------섹션이동 시 리모콘에 하이라이트
// $(document).scroll(function () {
//     var scrolltop = $(window).scrollTop();
//     $("header, section, footer").each(function () {
//         if (scrolltop >= $(this).offset().top) {
//             $("span[data-id=" + $(this).attr('class') + "]").addClass('on').siblings().removeClass('on');
//         }
//         else if (scrolltop >= $(".section7").offset().top + 130) {
//             $("span[data-id=footer]").addClass('on').siblings().removeClass('on');
//         }
//     });
// });

//이페이지에 적용된 스크롤리모콘은 각영역의 top = $(window).scrollTop()일때를 구현, 미리 켜지는 경우는 따로따로 값을 입력해야한다.
