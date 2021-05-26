$(function(){
    $('.one').vegas({
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
            {src: "../img/gyeongbokgung_history.jpg", delay:3500},
            {src: "../img/마스크 그룹 72.jpg", delay:3500},
            {src: "../img/photo-1548115184-bc6544d06a58.jpg", delay:3500}
        ],
        transition: 'swirlLeft2'
    })
})