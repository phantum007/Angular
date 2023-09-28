



// FOR PRICE CARD SLIDER
$('.price-slider').slick({
    dots: false,
    infinite: true,
    autoplay: false,
    arrows: true,
    fade: false,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<i class="fas fa-arrow-right dandik"></i>',
    nextArrow: '<i class="fas fa-arrow-left bamdik"></i>',
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
});

$('a[data-bs-toggle="tab"]').on('shown.bs.tab', function (e) {
    $('.price-slider').slick('setPosition');
});


// FOR TESTIMONIAL SLIDER
$('.testi-slider').slick({
    dots: false,
    infinite: true,
    autoplay: true,
    arrows: true,
    fade: false,
    speed: 1000,
    centerMode: true,
    centerPadding: '300px',
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<i class="fas fa-arrow-right dandik"></i>',
    nextArrow: '<i class="fas fa-arrow-left bamdik"></i>',
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerPadding: '250px',
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerPadding: '130px',
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerPadding: '80px',
            }
        },
        {
            breakpoint: 576,
            settings: {
                arrows: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                centerPadding: '20px',
            }
        }
    ]
});


// FOR CLIENTS IMAGE SLIDER
$('.clients-slider').slick({
    dots: false,
    infinite: true,
    autoplay: true,
    arrows: true,
    fade: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<i class="fas fa-arrow-right dandik"></i>',
    nextArrow: '<i class="fas fa-arrow-left bamdik"></i>',
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                variableWidth: true,
            }
        }
    ]
});


// FOR BLOG CARD SLIDER
$('.blog-slider').slick({
    dots: false,
    infinite: true,
    autoplay: true,
    arrows: true,
    fade: false,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<i class="fas fa-arrow-right dandik"></i>',
    nextArrow: '<i class="fas fa-arrow-left bamdik"></i>',
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                variableWidth: true,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                variableWidth: true,
                arrows: false,
            }
        }
    ]
});


// FOR DOMAIN SUGGEST SLIDER
$('.domain-suggest-slider').slick({
    dots: false,
    infinite: true,
    autoplay: false,
    arrows: true,
    fade: false,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: '<i class="fas fa-arrow-right dandik"></i>',
    nextArrow: '<i class="fas fa-arrow-left bamdik"></i>',
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                variableWidth: true,
                arrows: false,
            }
        }
    ]
});