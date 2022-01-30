$(document).ready(function(){
    $('.slider').slick({
        arrows: false,
        dots: true,
        adaptiveHeight: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        speed: 1000,
        infinite: true, 
        initialSlide: 1,
        autoplay: false,
        autoplaySpeed: 500,
        responsive:[
            {
                breakpoint: 1339,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});