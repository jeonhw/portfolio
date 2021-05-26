


// window.onload = function () {
//     var target = $('.swiper-container productinfo. swiper-slide');
//     var zoom = target.data('zoom');

//     $(".swiper-container productinfo. swiper-slide")
//         .on('mousemove', magnify)
//         .prepend("<div class='magnifier'></div>")
//         .children('.magnifier').css({
//             "background": "url('" + target.attr("src") + "') no-repeat",
//             "background-size": target.width() * zoom + "px " + target.height() * zoom + "px"
//         });

//     var magnifier = $('.magnifier');

//     function magnify(e) {

//         // 마우스 위치에서 .magnify의 위치를 차감해 컨테이너에 대한 마우스 좌표를 얻는다.
//         var mouseX = e.pageX - $(this).offset().left;
//         var mouseY = e.pageY - $(this).offset().top;

//         // 컨테이너 밖으로 마우스가 벗어나면 돋보기를 없앤다.
//         if (mouseX < $(this).width() && mouseY < $(this).height() && mouseX > 0 && mouseY > 0) {
//             magnifier.fadeIn(100);
//         } else {
//             magnifier.fadeOut(100);
//         }

//         //돋보기가 존재할 때
//         if (magnifier.is(":visible")) {

//             // 마우스 좌표 확대될 이미지 좌표를 일치시킨다.
//             var rx = -(mouseX * zoom - magnifier.width() / 2);
//             var ry = -(mouseY * zoom - magnifier.height() / 2);

//             //돋보기를 마우스 위치에 따라 움직인다.
//             //돋보기의 width, height 절반을 마우스 좌표에서 차감해 마우스와 돋보기 위치를 일치시킨다.
//             var px = mouseX - magnifier.width() / 2;
//             var py = mouseY - magnifier.height() / 2;

//             //적용
//             magnifier.css({
//                 left: px,
//                 top: py,
//                 backgroundPosition: rx + "px " + ry + "px"
//             });
//         }
//     }
// };

//header


function zoomIn(event) {
    event.target.style.width = "400px";
    event.target.style.height = "560px";
    event.target.style.transition = "all 0.5s";
    // event.target.style.trasform = "scale(1.5)"
}

function zoomOut(event) {
    event.target.style.width = "344.25px";
    event.target.style.height = "529px";
    event.target.style.transition = "all 0.5s";
    // event.target.style.trasform = "scale(1)"
    
}







//header
var swiper = new Swiper('.swiper-container.header', {
    spaceBetween: 0,
    effect: 'fade',
    pagination: {
        el: '.swiper-pagination.header',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    loop: true,
    loopFillGroupWithBlank: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    }
});


// news info 
var swiper = new Swiper('.swiper-container.first', {
    slidesPerView: 1,
    spaceBetween: 0,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 0,
            slidesPerGroup: 1,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 0,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 20,
            slidesPerGroup: 3,
        },
        loop: true
    }


});

//product info
var swiper = new Swiper('.swiper-container.productinfo', {
    slidesPerView: 1,
    spaceBetween: 10,
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    loopFillGroupWithBlank: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination.productinfo',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// designer
var swiper = new Swiper('.swiper-container.designer', {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    loopFillGroupWithBlank: true,
    // init: false,
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },
    pagination: {
        el: '.swiper-pagination.designer',
        clickable: true,
    },
    breakpoints: {
        640: {

            slidesPerView: 2,
            spaceBetween: 0,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 0,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 0,
        },
        loop: true
    }
});

//designer info

$(document).ready(function () {
    $(".sec.designer .swiper-container.designer .dg.one").click(function () {
        $(".dsinfo.one").toggleClass("on");
    });
});

$(document).ready(function () {
    $(".sec.designer .swiper-container.designer .dg.two").click(function () {
        $(".dsinfo.two").toggleClass("on");
    });
});

$(document).ready(function () {
    $(".sec.designer .swiper-container.designer .dg.three").click(function () {
        $(".dsinfo.three").toggleClass("on");
    });
});

$(document).ready(function () {
    $(".sec.designer .swiper-container.designer .dg.four").click(function () {
        $(".dsinfo.four").toggleClass("on");
    });
});

$(document).ready(function () {
    $(".sec.designer .swiper-container.designer .dg.five").click(function () {
        $(".dsinfo.five").toggleClass("on");
    });
});




//book
var swiper = new Swiper('.swiper-container.reflections', {
    slidesPerView: 2,
    spaceBetween: 10,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,
    loopFillGroupWithBlank: true,
    // init: false,
    pagination: {
        el: '.swiper-pagination.reflections',
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 50,
        },
    }
});


//book info

$(document).ready(function () {
    $(".sec.reflections div.swiper-slide.bk").click(function () {
        $(".bookinfo").toggleClass("on");
    });
});

$(document).ready(function () {
    $(".sec.reflections div.swiper-slide.bk.two").click(function () {
        $(".sec.reflections div.swiper-slide.bk.two").toggleClass("on");
    });
});

//nav
$(function () {
    $('.hamburger-button').on('click', function (event) {
        event.preventDefault();
        $(this).toggleClass('active');
        $('.overlay').toggleClass('visible');

    });
});

// //Full?..
// var swiper = new Swiper('.swiper-container.full', {
//     direction: 'vertical',
//     slidesPerView: 1,
//     spaceBetween: 
//     0,

//     mousewheel: true,
//     pagination: {
//         el: '.swiper-pagination.full',
//         clickable: true,
//         scrollingSpeed: 900
//     },

// });

AOS.init();