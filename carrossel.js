// $('.pt-slick-carousel__slides').on('afterChange', function(event, slick, currentSlide, nextSlide){
//     console.log($('.pt-slick-carousel__slides .slick-active').attr('data-slick-index'));
//     console.log($('.pt-slick-carousel__slides .slick-active').attr('id'));
// });

// console.log($(slider.$slides.get(index)));
// CARROSSELS

$(document).ready(function(){
    $('.carousel2').slick({
    pauseOnHover: true,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    infitine: true,
    autoplaySpeed: 500,
    arrows: true,
    responsive: [
        {
            breakpoint: 1199,
            settings:{
                arrows: true,
                slidesToShow: 6,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 991,
            settings:{
                arrows: true,
                slidesToShow: 4,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 768,
            settings:{
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 471,
            settings:{
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 317,
            settings:{
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
    });
});

$(document).ready(function(){
    $('.carrossel-banner').slick({
        pauseOnHover: true,
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3200,
        adaptiveHeight: true
    });
});

// /CARROSSELS

