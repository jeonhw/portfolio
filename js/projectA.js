





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