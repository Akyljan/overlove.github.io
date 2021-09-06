function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    
    testWebP(function (support) {
    
    if (support == true) {
    document.querySelector('body').classList.add('webp');
    }else{
    document.querySelector('body').classList.add('no-webp');
    }
    });;
let firstSectionRightCircle1 = document.querySelector(".header-main-right__circle-1-real");
let firstSectionRightCircle2 = document.querySelector(".header-main-right__circle-2-real");
let firstSectionRightCircle3 = document.querySelector(".header-main-right__circle-3-real");
let firstSectionRightTriangle = document.querySelector(".header-main-right__triangle");
let firstSectionRightTriangleImage = document.querySelector(".header-main-right__triangle-image");
let backgroundSong = document.querySelector(".background-song");
let backgroundSongStatus = 0;
let burgerMenu = document.querySelector(".header-burger");
function playMedia(backgroundSong) {
    backgroundSong.play();
}
function stopMedia(backgroundSong) {
    backgroundSong.pause();
}
burgerMenu.onclick = function open() {
    document.querySelector("body").classList.toggle("burger-active");
    document.querySelector(".header-right").classList.toggle("active");
    document.querySelector(".logo").classList.toggle("active");
    burgerMenu.classList.toggle("active");   
    document.querySelector(".header-placeholder").classList.toggle("active");
    document.querySelector(".header-top").classList.toggle("active");

}
firstSectionRightTriangle.onclick = function play() {
    firstSectionRightCircle1.classList.toggle("active");
    firstSectionRightCircle2.classList.toggle("active");
    firstSectionRightCircle3.classList.toggle("active");
    firstSectionRightTriangle.classList.toggle("active");
    firstSectionRightTriangleImage.classList.toggle("active")
    if (backgroundSongStatus == 0) {
        playMedia(backgroundSong);
        firstSectionRightTriangle.classList.add("active-music");
        backgroundSongStatus = backgroundSongStatus + 1;
    }    
    else {
        stopMedia(backgroundSong);
        firstSectionRightTriangle.classList.remove("active-music");
        backgroundSongStatus = backgroundSongStatus - 1;
    }
};
const swiper = new Swiper('.slider-container', {
    scrollbar:{
        el: ".swiper-scrollbar",
        draggable: true,
    },
    hashNavigation: {
        watchState: true,
    },
    keyboard:{
        enabled: true,
        onlyInViewport: true,
    },
    mousewheel: {
        sensitivity: 1,
        eventsTarget: ".slider-container"
    },
    autoHeight: true,
    slidesPerView: "auto",
    watchOverflow: true,
    spaceBetween: 40,
    freeMode: false,
    breakpoints: {
        320: {
            slidesPerView: 1,
            freeMode: false,
        },
        480: {
            slidesPerView: 2,
            freeMode: false,
        },
        767: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
            freeMode: false,
        },
        1200: {
            slidesPerView: "auto",
        },
    },
});
const swiperTwos = new Swiper('.carusel__text-block', {
    navigation:{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination:{
        el: ".swiper-pagination",
        clickable: true,
    },
    keyboard:{
        enabled: true,
        onlyInViewport: true,
    },
    mousewheel: {
        sensitivity: 1,
        eventsTarget: ".carusel__text-blockr"
    },
    simulateTouch: false,
    slidesPerView: 1,
    spaceBetween: 1000,
    autoHeight: true,
});