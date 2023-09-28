




//========================================
//          HEADER ALERT FIXED
//========================================
$(window).on("scroll", function(){
    var scrolling = $(this).scrollTop();
    if (scrolling > 50){
        $(".header-part").addClass("active");
    }else{
        $(".header-part").removeClass("active");
    }
});


//========================================
//       NICE-SELECT PLUGIN CALL
//========================================
$(document).ready(function() {
    $('.select').niceSelect();
});


//========================================
//       FAQ QUESTION ACCORDION
//========================================
jQuery(document).on('ready', function(){
    var panels = $(".faq-ans").hide();

    // panels.first().show();
    $('.faq-que').on('click', function() {
        var $this = $(this);
        panels.slideUp();
        $this.next().slideDown();
    });
});

$('.faq-que').on('click', function() {
    $('.faq-que').removeClass('active');
    $(this).addClass('active');
});


//========================================
//    RESPONSIVE NASTED DROPDOEN MENU
//========================================
$('li').on('click', function(e) {
    if(window.matchMedia("(max-width: 1199px)").matches) {
        $(this).children('ul').toggle();
        $(this).siblings('li').find('ul').hide();
        e.stopPropagation();
    }
});


//========================================
//        RESPONSIVE NAV SIDEBAR
//========================================
$('.header-menu').on('click', function(){
    $('body').css('overflow', 'hidden');
    $('.nav-sidebar').addClass('active');
    $('.nav-close').on('click', function(){
        $('body').css('overflow', 'inherit');
        $('.nav-sidebar').removeClass('active');
        $('.backdrop').fadeOut();
    });
});


//========================================
//       BACKDROP SIDEBAR FUNCTION
//========================================
$('.header-menu').on('click', function(){
    $('.backdrop').fadeIn();

    $('.backdrop').on('click', function(){
        $(this).fadeOut();
        $('body').css('overflow', 'inherit');
        $('.nav-sidebar').removeClass('active');
    });
});


//========================================
//      COMPARE SHOW MORE FUNCTION
//========================================
$(".compare-content").slice(0, 3).show();
$(".compare-content:hidden").css("opacity", 0);

$(".compare-btn").on("click", function(e) {
    $(".compare-content:hidden") 
        .slice(0, 1)
        .slideDown("slow")
        .animate(
            {
                opacity: 1
            },
            {
                queue: false,
                duration: "slow"
            }
        );
        if ($(".compare-content:hidden").length == 0) {
            $(".compare-btn").fadeOut("slow");
        }
    e.preventDefault();
});


//========================================
//      INCREMENT PRODUCT QUANTITY
//========================================
$('.quantity-plus').on('click', function(){
    var increamentValue = $(this).closest('.product-quantity').children('.quantity-input').get(0).value++
    var actionMinus = $(this).closest('.product-quantity').children('.quantity-minus');

    if(increamentValue > 0) {
        actionMinus.removeAttr('disabled');
    }
});


//========================================
//      DECREMENT PRODUCT QUANTITY
//========================================
$('.quantity-minus').on('click', function(){
    var decrementValue = $(this).closest('.product-quantity').children('.quantity-input').get(0).value--

    if(decrementValue == 2) {
        $(this).attr('disabled', 'disabled');
    }
});