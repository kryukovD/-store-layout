$(document).ready(function () {
    /*faq */
    $(".section-company-page-faq-body-item__header").click(function () {
        $(this).toggleClass("section-company-page-faq-body-item__header_active");
        $(this).next(".section-company-page-faq-body-item__content").slideToggle();
    });
    /*Мобильное меню */
    $(".header-mobile-menu >span").click(function () {
        $(".dropdown-mobile-menu").toggleClass("dropdown-mobile-menu__active");
        $("body").toggleClass("active-body");
        if ($(".dropdown-mobile-menu").hasClass("dropdown-mobile-menu__active")) {
            $(".header-mobile-menu__trigger").hide();
            $(".header-mobile-menu__close").show();
        }
        else {
            $(".header-mobile-menu__trigger").show();
            $(".header-mobile-menu__close").hide();
        }

    });

    $(".section-company-page-menu__item_active").click(function () {
        $(this).parent().find("li").not(this).slideToggle();
    })

    $(".dropdown-mobile-catalog-low-lvl__header").click(function () {
        $(".dropdown-mobile-catalog-low-lvl").removeClass("dropdown-mobile-catalog-low-lvl_active");
    });

    $(".dropdown-mobile-menu-trigger-catalog").click(function (e) {
        $(".dropdown-mobile-catalog-low-lvl").toggleClass("dropdown-mobile-catalog-low-lvl_active");
    });

    /*В форму при клике в скрытый инпут добавляем нзавание товара*/
    $(".section-catalog-button_order").click(function () {
        $("input[name='name_tovar']").val($(this).closest(".section-catalog-item").find(".section-catalog-item__title a").text());
    });

    $(".detail-card-button_order").click(function () {
        $("input[name='name_tovar']").val($(this).closest(".section-detail").find(".section-detail-top h2").text());
    });

    $(".section-big-banner-inner__button >a").click(function () { // ID откуда кливаем
        $('html, body').animate({
            scrollTop: $(".section-feedback ").offset().top // класс объекта к которому приезжаем
        }, {
            duration: 370,   // по умолчанию «400»
            easing: "linear" // по умолчанию «swing»
        }); // Скорость прокрутки
    })
    let titleService = $(".section-service-banner-detail-description__title").text();
    if (titleService) {
        $(".section-service-detail-order-inner-left__wrap-input__dev input").val(titleService.replace(/\s+/g, ' ').trim())
    }

    /*Инициализация слайдера  на главной */

    let $bigSlider = $(".section-big-banner-slider");
    var $status = $('.section-big-banner-slider-orders ');

    $bigSlider.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
        var i = (currentSlide ? currentSlide : 0) + 1;
        $status.html(`<span class="section-big-banner-slider-orders__current">${i}</span>  <span class="section-big-banner__divide">—</span>  <span class="section-big-banner-slider-orders__all">${slick.slideCount}</span>`);
    });

    $bigSlider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: $(".section-big-banner-slider__arrow-prev"),
        nextArrow: $(".section-big-banner-slider__arrow-next")
    });

    $(".section-menu-header").click(function () {
        $(".section-menu-list").slideToggle();
    });

    $(document).on("mouseup", function (e) {
        var container = $(".header-dropwdown-catalog");
        var btn = $(".header-catalog");

        if (btn.has(e.target).length > 0) {
            $(".header-dropwdown-catalog").toggleClass("header-dropwdown-catalog_active");
            return false;
        }

        if (container.has(e.target).length === 0) {
            $(".header-dropwdown-catalog").removeClass("header-dropwdown-catalog_active");
        }


    })
    /*Автовысота */
    equalHeight(".section-advantages-image-wrapper");
    equalHeight(".main-page-subtitle_advantage");
    equalHeight(".section-catalog-item__title");
    $(window).resize(function () {
        /*Автовысота */
        equalHeight(".section-advantages-image-wrapper");
        equalHeight(".main-page-subtitle_advantage");
        equalHeight(".section-catalog-item__title");
    });


    function equalHeight(selector) {
        var tallest = 0;
        jQuery(selector).each(function () {
            var thisHeight = jQuery(this).height();
            if (thisHeight > tallest) {
                tallest = thisHeight;
            }
        });
        jQuery(selector).height(tallest);
    }


})