$(function () {
    // include control start
    if ($('.main-header').length) {
        $('body').append('<div class="bodyTouchBlock"></div>');
        $('.toggleSideMenu, .bodyTouchBlock').click(function () {
            $('.sideMenu').toggleClass('show');
            $('.bodyTouchBlock').toggleClass('show');
        });

    }
    var liLength = $('.main-nav > ul > li').length,
            wrapWidth = $('.main-nav > ul').width();
    $('.main-nav > ul > li').css({'width': wrapWidth / liLength});

    // include control end

    $('.mobile-tab li').click(function () {
        var tabIndex = $(this).index();
        $('.mobile-tab .active').removeClass('active');
        $(this).addClass('active');
        $('.main article, .main aside').hide();
        $('.main').children().eq(tabIndex).show();
    });


    $('.tabPanel .tabGroup li').click(function () {
        var tabIndex = $(this).index();
        $('.tabContent .active').removeClass();
        $(this).addClass('active').siblings('.active').removeClass();
        $(this).parent().siblings('.tabContent').children('ul').eq(tabIndex).addClass('active');
    });

    $('.sideMenu .moreItem > a').click(function () {
        $(this).toggleClass('open');
        $(this).siblings('.sudeMenuSub').slideToggle();
    });

    $('.sideMenu').on('click', '.moreItem > a', function () {

    });


    //scroll
    var $headerOffset = 0;
    var $headerH = $('.main-header').height();
    var $header = $('.main-header');
    var $subNav = $('.subNav');
    var scroTop = 0;
    //包版 fixed
    var $couplet_right = $('.couplet-right');
    var $couplet_left = $('.couplet-left');

    if ($('.main-header').length) {
        if ($('.subNav').length) {
            $headerOffset = $('.subNav').offset().top;
        }
    }

    $(window).scroll(function () {
        scroTop = $(window).scrollTop();
        if (scroTop > $headerOffset) {
            $header.addClass('fixed');
            $subNav.addClass('fixed');
            $('.main-nav').addClass('fixed');
            $('.banner').css({'margin-bottom': 100});
            //包版 fixed
            $couplet_right.addClass('fixed');
            $couplet_left.addClass('fixed');
        } else {
            $header.removeClass('fixed');
            $subNav.removeClass('fixed');
            $('.main-nav').removeClass('fixed');
            $('.banner').css({'margin-bottom': 0});
            //包版 fixed
            $couplet_right.removeClass('fixed');
            $couplet_left.removeClass('fixed');
        }

    });

    $('.btn-close').click(function () {
        $('.paywallpanelGroup').fadeOut();
    });

    // article slider
    var nowIndex = 0;
    //console.log(sliderLength);
    $('.slider-ct .prev').click(function () {
        var sliderLength = $('.slider-ct .slider-item-group').length,
                $sliderItemGroup = $('.slider-ct .slider-item-group');

        $sliderItemGroup.attr('class', 'slider-item-group');
        $sliderItemGroup.eq(nowIndex).addClass('ltr_out');
        // console.log(nowIndex);
        if (nowIndex > 0) {
            nowIndex--;
        } else {
            nowIndex = sliderLength - 1;
        }
        // console.log(nowIndex);
        $sliderItemGroup.eq(nowIndex).addClass('ltr_in');
        return false;
    });

    $('.slider-ct .next').click(function () {
        var sliderLength = $('.slider-ct .slider-item-group').length,
                $sliderItemGroup = $('.slider-ct .slider-item-group');

        $sliderItemGroup.attr('class', 'slider-item-group');
        $sliderItemGroup.eq(nowIndex).addClass('rtl_out');
        if (nowIndex < sliderLength - 1) {
            nowIndex++;
        } else {
            nowIndex = 0;
        }
        $sliderItemGroup.eq(nowIndex).addClass('rtl_in');
        return false;
    });



    var nowIndex2 = 0;
    $('.slider .prev').click(function () {
    var sliderLiLength = $('.slider li').length,
            $sliderLi = $('.slider li');

        $sliderLi.attr('class', '');
        $sliderLi.eq(nowIndex2).addClass('ltr_out');
        if (nowIndex2 > 0) {
            nowIndex2--;
        } else {
            nowIndex2 = sliderLiLength - 1;
        }
        $sliderLi.eq(nowIndex2).addClass('ltr_in');
        return false;
    });

    $('.slider .next').click(function () {
    var sliderLiLength = $('.slider li').length,
            $sliderLi = $('.slider li');

        $sliderLi.attr('class', '');
        $sliderLi.eq(nowIndex2).addClass('rtl_out');
        if (nowIndex2 < sliderLiLength - 1) {
            nowIndex2++;
        } else {
            nowIndex2 = 0;
        }
        $sliderLi.eq(nowIndex2).addClass('rtl_in');
        return false;
    });


    // 一般幻燈片
    var sliderArticleLength = $('.sliderArticle li').length,
            $sliderAli = $('.sliderArticle li'),
            nowIndex3 = 0;
    $('.sliderArticle .prev').click(function () {
        $sliderAli.attr('class', '');
        $sliderAli.eq(nowIndex3).addClass('ltr_out');
        if (nowIndex3 > 0) {
            nowIndex3--;
        } else {
            nowIndex3 = sliderArticleLength - 1;
        }
        $sliderAli.eq(nowIndex3).addClass('ltr_in');
        return false;
    });

    $('.sliderArticle .next').click(function () {
        $sliderAli.attr('class', '');
        $sliderAli.eq(nowIndex3).addClass('rtl_out');
        if (nowIndex3 < sliderArticleLength - 1) {
            nowIndex3++;
        } else {
            nowIndex3 = 0;
        }
        $sliderAli.eq(nowIndex3).addClass('rtl_in');
        return false;
    });


    //文章故事頁幻燈片
    var storySliderLiLength = $('.article-header li').length,
            $storyLi = $('.article-header li'),
            nowIndex3 = 0;
    $('.article-header .prev').click(function () {
        $storyLi.attr('class', '');
        $storyLi.eq(nowIndex3).addClass('ltr_out');
        if (nowIndex3 > 0) {
            nowIndex3--;
        } else {
            nowIndex3 = storySliderLiLength - 1;
        }
        $storyLi.eq(nowIndex3).addClass('ltr_in');
        return false;
    });

    $('.article-header .next').click(function () {
        $storyLi.attr('class', '');
        $storyLi.eq(nowIndex3).addClass('rtl_out');
        if (nowIndex3 < storySliderLiLength - 1) {
            nowIndex3++;
        } else {
            nowIndex3 = 0;
        }
        $storyLi.eq(nowIndex3).addClass('rtl_in');
        return false;
    });


    //打開文章頁隱藏的分享功能
    $('.moreArenItem .control').click(function () {
        $(this).toggleClass('open');
        $('.collapse').toggleClass('show');
        $(this).parent('.moreArenItem').siblings('.fbShare').toggleClass('hidden');
        $(this).parent('.moreArenItem').siblings('.comments').toggleClass('hidden');
        return false;
    });

    //開啟搜尋區塊
    $('.toggleSearchBlock').click(function () {
        $('.search').fadeToggle();
        $('.closeTouch').addClass('show');
        return false;
    });
    //關閉搜尋區塊
    $('.closeTouch').click(function () {
        $(this).removeClass('show');
        $('.search').fadeToggle();
        return false;
    });

    $('.indexLightbox .btn-close').click(function () {
        $(this).parents('.indexLightbox').fadeOut();
    });

    $('.black').click(function () {
        if ($('body').hasClass('login-page') == false) {

            $(this).parent('.paywallpanelGroup').fadeOut();
            $(this).parents('.indexLightbox').fadeOut();


        }
    });


    //文章頁修改字體大小功能
    var $fz = $('.fontSize');
    var fzLevel = 0;
    var fzClass = 'fz' + fzLevel;

    $fz.click(function () {
        fzLevel < 2 ? fzLevel++ : fzLevel = 0;
        fzClass = 'fz' + fzLevel;
        $('.nevin').attr('class', 'nevin');
        $('.nevin').addClass(fzClass);
        return false;
    });
});

	//熱門議題iframe判斷高度
	function resizeIframe(iframe) {
		iframe.height = iframe.contentWindow.document.body.scrollHeight + "px";
	}
