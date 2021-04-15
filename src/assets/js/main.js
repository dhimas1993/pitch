(function($) {
    "use strict";
    $(window).on('load', function () {
        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
            $('.wrap-p-sub-menu-bar-left').removeClass('wrap-p-sub-menu-bar-left-active');
            $('.wrap-menu-bar-top-platform').removeClass('wrap-menu-bar-top-platform-active');
            $('.wrap-all-content-platform').removeClass('wrap-all-content-platform-active');
            $('.icon-expand-hide-sub-menu-bar-left').removeClass('icon-expand-hide-sub-menu-bar-left-active');
            $('.icon-expand-show-sub-menu-bar-left').addClass('icon-expand-show-sub-menu-bar-left-active');
            $('.wrap-search-box-filter').removeClass('wrap-search-box-filter-active');

            $('.icon-expand-show-sub-menu-bar-left').on("click",function(){
                $('body').addClass('body-menu-active');
            });
            $('.icon-expand-hide-sub-menu-bar-left').on("click",function(){
                $('body').removeClass('body-menu-active');
            });

            $('.bts-filter-show').on("click",function(){
                $('.wrap-search-box-filter').addClass('wrap-search-box-filter-active');
                $('.bts-filter-hide').show();
                $(this).hide();
                $('body').addClass('body-menu-active2');
            });

            $('.bts-filter-hide').on("click",function(){
                $('.wrap-search-box-filter').removeClass('wrap-search-box-filter-active');
                $('.bts-filter-show').show();
                $(this).hide();
                $('body').removeClass('body-menu-active2');
            });

        }else{
        }
    });
    $(document).ready(function(){

        // menu top add class scroll
        $(window).scroll(function(){
            if ($(this).scrollTop() > 20) {
                $(".wrap-main-menu").addClass("wrap-main-menu-active");
            } else { 
                $(".wrap-main-menu").removeClass("wrap-main-menu-active");
            }
        });

        // show box web req
        $('.bt-box-web-req').on("click",function(){
            $('.barmn-circle-menu-left-box-info').toggleClass('barmn-circle-menu-left-box-info-active');
        });

        // show profile box
        $('.bt-show-profile-box').on("click",function(){
            $('.wrap-profile-box-user').addClass('wrap-profile-box-user-active');
            $('.bt-hide-profile-box').show();
            $('.fa-angle-up').show();
            $('.fa-angle-down').hide();

            $('.wrap-notification-box').removeClass('wrap-notification-box-active');
            $('.bt-hide-notification-cta').hide();
        });

        // hide profile box
        $('.bt-hide-profile-box').on("click",function(){
            $('.wrap-profile-box-user').removeClass('wrap-profile-box-user-active');
            $('.bt-hide-profile-box').hide();
            $('.fa-angle-up').hide();
            $('.fa-angle-down').show();
        });

        // show notification box
        $('.bt-show-notification-cta').on("click",function(){
            $('.wrap-notification-box').addClass('wrap-notification-box-active');
            $('.bt-hide-notification-cta').show();

            $('.wrap-profile-box-user').removeClass('wrap-profile-box-user-active');
            $('.bt-hide-profile-box').hide();
            $('.fa-angle-up').hide();
            $('.fa-angle-down').show();
        });

        // hide notification box
        $('.bt-hide-notification-cta').on("click",function(){
            $('.wrap-notification-box').removeClass('wrap-notification-box-active');
            $('.bt-hide-notification-cta').hide();
        });

        // menu bar show
        $('.bt-show-menu-mobile').on("click",function(){
            $('.wrap-menu-mobile').addClass('wrap-menu-mobile-active');
            $('body').addClass('menu-mobile-active');
        });

        // menu bar hide
        $('.bt-close-menu-mobile').on("click",function(){
            $('.wrap-menu-mobile').removeClass('wrap-menu-mobile-active');
            $('body').removeClass('menu-mobile-active');
        });

        $('.main-menu-mobile ul li.menu-item-has-children a span').on("click", function(e) {
            e.preventDefault();
            $(this).parent().parent().find(">ul").slideToggle(300);
            this.classList.toggle("icon-change");
        });

        // sub menu hide
        $('.icon-expand-hide-sub-menu-bar-left').on("click",function(){
            $(this).removeClass('icon-expand-hide-sub-menu-bar-left-active');
            $('.icon-expand-show-sub-menu-bar-left').addClass('icon-expand-show-sub-menu-bar-left-active');
            $('.wrap-p-sub-menu-bar-left').removeClass('wrap-p-sub-menu-bar-left-active');
            $('.wrap-all-content-platform').removeClass('wrap-all-content-platform-active');
            $('.wrap-menu-bar-top-platform').removeClass('wrap-menu-bar-top-platform-active');
        });

        // sub menu show
        $('.icon-expand-show-sub-menu-bar-left').on("click",function(){
            $(this).removeClass('icon-expand-show-sub-menu-bar-left-active');
            $('.icon-expand-hide-sub-menu-bar-left').addClass('icon-expand-hide-sub-menu-bar-left-active');
            $('.wrap-p-sub-menu-bar-left').addClass('wrap-p-sub-menu-bar-left-active');
            $('.wrap-all-content-platform').addClass('wrap-all-content-platform-active');
            $('.wrap-menu-bar-top-platform').addClass('wrap-menu-bar-top-platform-active');
        });

        // show slide track pitchdeck
        $('.bt-show-slide-pitchdedck').on("click",function(){
            $('.wrap-slide-pitchdeck-info-bar').addClass('wrap-slide-pitchdeck-info-bar-active');
            $('body').addClass('body-menu-active2');
        });

        // show slide track pitchdeck
        $('.icon-close-trackbar-pitchdeck').on("click",function(){
            $('.wrap-slide-pitchdeck-info-bar').removeClass('wrap-slide-pitchdeck-info-bar-active');
            $('body').removeClass('body-menu-active2');
        });

        // toogle menu 3 button pitchdeck
        $('.toogle-show-menu-3-bt').on("click",function(){
            $('.menu-show-button3-circle').toggleClass('menu-show-button3-circle-active');
        });

        // slider testimonials
        var items = $('.slider-testimonials .item');
        if(items.length > 1) {
             $('.slider-testimonials').owlCarousel({
                loop: true,
                autoplayTimeout: 6000,
                autoplay: true,
                touchDrag: true,
                mouseDrag: false,
                center: true,
                autoplayHoverPause: true,
                autoHeight: false,
                nav: false,
                dots: true,
                smartSpeed: 700,
                responsive:{
                    0:{
                        items:1,
                        margin: 5,
                        stagePadding: 0,
                    },
                    769:{
                        items:2,
                        margin: 10,
                        stagePadding: 10,
                    },
                    993:{
                        items:3,
                        margin: 7,
                        stagePadding: 10,
                    },
                    1251:{
                        items:3,
                        margin: 7,
                        stagePadding: 130,
                    },
                    1367:{
                        items:3,
                        margin: 7,
                        stagePadding: 150,
                    }
                }
            });
        } else {
             $('.slider-testimonials').owlCarousel({
                loop: false,
                autoplayTimeout: 6000,
                autoplay: true,
                touchDrag: false,
                mouseDrag: false,
                autoplayHoverPause: true,
                autoHeight: false,
                center: true,
                nav: false,
                dots: true,
                smartSpeed: 700,
                responsive:{
                    0:{
                        items:1,
                        margin: 5,
                        stagePadding: 0,
                    },
                    769:{
                        items:2,
                        margin: 10,
                        stagePadding: 10,
                    },
                    993:{
                        items:3,
                        margin: 7,
                        stagePadding: 10,
                    },
                    1251:{
                        items:3,
                        margin: 7,
                        stagePadding: 130,
                    },
                    1367:{
                        items:3,
                        margin: 7,
                        stagePadding: 150,
                    }
                }
            });
        }

        // slider dashboard
        var items = $('.slider-dashboard .item');
        if(items.length > 1) {
             $('.slider-dashboard').owlCarousel({
                loop: true,
                autoplayTimeout: 6000,
                autoplay: true,
                touchDrag: true,
                mouseDrag: true,
                center: true,
                autoplayHoverPause: true,
                autoHeight: false,
                nav: false,
                dots: true,
                smartSpeed: 700,
                responsive:{
                    0:{
                        items:1,
                        margin: 15,
                        stagePadding: 0,
                    },
                    769:{
                        items:1,
                        margin: 5,
                        stagePadding: 10,
                    },
                    993:{
                        items:1,
                        margin: 5,
                        stagePadding: 10,
                    },
                    1251:{
                        items:1,
                        margin: 5,
                        stagePadding: 130,
                    },
                    1367:{
                        items:1,
                        margin: 5,
                        stagePadding: 270,
                    }
                }
            });
        } else {
             $('.slider-dashboard').owlCarousel({
                loop: false,
                autoplayTimeout: 6000,
                autoplay: true,
                touchDrag: false,
                mouseDrag: false,
                autoplayHoverPause: true,
                autoHeight: false,
                center: true,
                nav: false,
                dots: true,
                smartSpeed: 700,
                responsive:{
                    0:{
                        items:1,
                        margin: 15,
                        stagePadding: 0,
                    },
                    769:{
                        items:1,
                        margin: 5,
                        stagePadding: 10,
                    },
                    993:{
                        items:1,
                        margin: 5,
                        stagePadding: 10,
                    },
                    1251:{
                        items:1,
                        margin: 5,
                        stagePadding: 130,
                    },
                    1367:{
                        items:1,
                        margin: 5,
                        stagePadding: 270,
                    }
                }
            });
        }

        $(".nav-slide-dashboard-prev").on("click", function() {
            $(".slider-dashboard").trigger('prev.owl.carousel');
        });

        $(".nav-slide-dashboard-next").on("click", function() {
            $(".slider-dashboard").trigger('next.owl.carousel');
        });

        // tab profile page
        $('ul.menu-dashboard-profile-page li').on("click", function() {
            var nm = $(this).data('mtab');
            $('.item-tab-dashboard-profile-page').removeClass('item-tab-dashboard-profile-page-active');
            $('.item-tab-dashboard-profile-page2').removeClass('item-tab-dashboard-profile-page-active');
            $('.bt-manage-account-d').removeClass('bt-manage-account-d-active');
            $(this).siblings('li').removeClass('active');
            $(this).addClass('active');
            $('#'+nm).addClass('item-tab-dashboard-profile-page-active');
            $('.slide-tab-profile-tab-box').slick('setPosition');
        });

        // show my settings tab
        $('.bt-manage-account-d').on("click",function(){
            $(this).addClass('bt-manage-account-d-active');
            $('.item-tab-dashboard-profile-page2').addClass('item-tab-dashboard-profile-page-active');
            $('.item-tab-dashboard-profile-page').removeClass('item-tab-dashboard-profile-page-active');
            $('ul.menu-dashboard-profile-page li').removeClass('active');
        });

        //slide menu profile dashboard
        $('.slide-tab-profile-tab-box').slick({
            centerMode: false,
            infinite: false,
            slidesToShow: 3,
            autoplay: false,
            prevArrow: false,
            nextArrow: false,
            autoplaySpeed: 2000,
            adaptiveHeight: true,
            responsive: [
                {
                  breakpoint: 991,
                  settings: {
                    arrows: true,
                    slidesToShow: 2
                  }
                },
                {
                  breakpoint: 768,
                  settings: {
                    arrows: true,
                    slidesToShow: 2
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    arrows: true,
                    slidesToShow: 1
                  }
                }
            ]
        });

        $('.nav-slide-thumb-info-prev').click(function(){
            $('.slide-tab-profile-tab-box').slick('slickPrev');
        })

        $('.nav-slide-thumb-info-next').click(function(){
            $('.slide-tab-profile-tab-box').slick('slickNext');
        });

        // change company photo
        function readURL(input) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();

                reader.onload = function (e) {
                    $('.ava-company-profile').attr('src', e.target.result);
                }

                reader.readAsDataURL(input.files[0]);
            }
        }
        $(".input-company-upload-hide").change(function () {
            readURL(this);
        });

        // change profile photo
        function readURL2(input) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();

                reader.onload = function (e) {
                    $('.ava-company-profile2').attr('src', e.target.result);
                }

                reader.readAsDataURL(input.files[0]);
            }
        }
        $(".input-company-upload-hide2").change(function () {
            readURL2(this);
        });



        // trigger on start and resize
        // owlWrapperWidth( '.owl-wrapper' );
        // $( window ).resize(function() {
        //     owlWrapperWidth( $('.owl-wrapper') );
        // });

        // var $owl = $('.slider-testimonials');

        // $owl.children().children().children().children().each( function( index ) {
        //   $(this).attr( 'data-position', index ); // NB: .attr() instead of .data()
        //     });

        // $(document).on('click', '.owl-item>div', function() {
        //   $owl.trigger('to.owl.carousel', $(this).data( 'position' ) ); 
        // });

        // smooth scroll
        var scroll = new SmoothScroll('a[href*="#"]', {
            speed: 500, // Integer. How fast to complete the scroll in milliseconds
            offset: 80, // Integer or Function returning an integer. How far to offset the scrolling anchor location in pixels
            easing: 'easeInOutCubic', // Easing pattern to use
        });


        // Video Responsive
        $(".full-video").fitVids();

        // Wow Js Animate
        new WOW().init();

    });
})(jQuery);
