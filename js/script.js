$(document).ready(function(){
    $('.slider').slick({
        arrows: false,
        dots: true,
        adaptiveHeight: true,
        slidesToShow: 4,
        slidesToScroll: 2,
        speed: 1000,
        infinite: true, 
        initialSlide: 1,
        autoplay: true,
        autoplaySpeed: 500,
    });
});