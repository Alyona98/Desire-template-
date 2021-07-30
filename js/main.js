$(function(){
    //--Анимация бокового меню (header)--
    $('.header__btn').on('click', function(){
        $('.rightside-menu').removeClass('rightside-menu--close');
    });
    $('.rightside-menu__close').on('click', function(){
        $('.rightside-menu').addClass('rightside-menu--close');
    });
    //--Анимация бокового меню (header, адаптив)--
    $('.header__btn-menu').on('click', function(){
        $('.menu').toggleClass('menu--open');
    });
    //--Слайдер главной страницы--
    $('.top__slider').slick({
        dots: true,
        arrows: false,
        fade: true,
        autoplay: true,
        autoplaySpeed: 3000,
    });
    //--Слайдер страницы Contacts--
    $('.contact-slider').slick({
        dots: true,
        arrows: false,
        slidesToShow: 10,
        slidesToScroll: 10,
        responsive: [
            {
              breakpoint: 1700,
              settings: {
                slidesToShow: 8,
                slidesToScroll: 8,
              }
            },
            {
                breakpoint: 1400,
                settings: {
                  slidesToShow: 6,
                  slidesToScroll: 6,
                }
              },
            {
                breakpoint: 1000,
                settings: {
                slidesToShow: 5,
                slidesToScroll: 5,
                }
            },
            {
                breakpoint: 850,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 4,
                }
            },
            {
                breakpoint: 650,
                settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                }
            }]
    });
    //--Слайдер страницы Blog--
    $('.article-slider__box').slick({
        arrows: true,
        prevArrow:'<button type="button" class="article-slider__arrow article-slider__arrow-left"><img src="images/arrow-slide-left.svg" alt="prev"></button>',
        nextArrow:'<button type="button" class="article-slider__arrow article-slider__arrow-right"><img src="images/arrow-slide-right.svg" alt="next"></button>',
        slidesToShow: 1,
        slidesToScroll: 1
    });
    //--Gallary--
    var mixer = mixitup('.gallary__inner', {
        load: {
            filter: '.living'
        }
    });
});

