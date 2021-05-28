//play/pause 버튼
$(document).ready(function(){
	$(".swiper-container .pause").click(function(){
		$(this).addClass('off').siblings().removeClass('off');
		swiper.autoplay.stop();
	});
	$(".swiper-container .play").click(function(){
		$(this).addClass('off').siblings().removeClass('off');
		swiper.autoplay.start();
	});
});


//페이징 커스텀 10이하 숫자 앞에 0붙이기
var swiper = new Swiper('.swiper-container', {
    autoplay: {
        delay: 1000,
    },
    // pagination: {
    //     el: '.swiper-pagination',
    //     type: 'fraction',
    // },
    pagination: {
        el: '.swiper-pagination',
        type: 'custom',
        clickable: true,
    renderCustom: function (swiper, current, total) {
        function numberAppend(d) {
        return (d < 10) ? '0' + d.toString() : d.toString();
        }
        return numberAppend(current) + ' / ' + numberAppend(total); 
        }
    },
    

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
//탭안에서 swiper reflesh
mySwiper.update();