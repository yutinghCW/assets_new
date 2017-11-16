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
    $('.main-nav > ul > li').css({
        'width': wrapWidth / liLength
    });

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
        $('.tabContent .active').removeClass('active');
        $(this).addClass('active').siblings('.active').removeClass('active');
        $(this).parent().siblings('.tabContent').children('ul').eq(tabIndex).addClass('active');
    });
    $('.sideMenu .moreItem > a').click(function () {
        $(this).toggleClass('open');
        $(this).siblings('.sudeMenuSub').slideToggle();
    });
    $('.sideMenu').on('click', '.moreItem > a', function () {});

    //scroll
    var $headerOffset = 0;
    var $headerH = $('.main-header').height();
    var $header = $('.main-header');
    var $subNav = $('.subNav');
    var scroTop = 0;

    //包版 fixed
    var $couplet_right = $('.couplet-right');
    var $couplet_left = $('.couplet-left');

    //paywallqu0 篇數提醒
    var $paywallAlert = $('.paywallAnnounce');
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
            $paywallAlert.addClass('fixed');
            $('.main-nav').addClass('fixed');
            $('.banner').css({
                'margin-bottom': 100
            });

            //包版 fixed
            $couplet_right.addClass('fixed');
            $couplet_left.addClass('fixed');
        } else {
            $header.removeClass('fixed');
            $subNav.removeClass('fixed');
            $paywallAlert.removeClass('fixed');
            $('.main-nav').removeClass('fixed');
            $('.banner').css({
                'margin-bottom': 0
            });

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
    $(".close").click(function () {
        $(this).parent().parent().fadeOut(300);
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

    //註冊頁用：tooltip-mobile
    $('.info-btn').click(function () {
        $(this).siblings('.tooltip').fadeToggle();
    });

    //決勝頁用：一般幻燈片
    var width = $(window).width();
    var hashValue = window.location.hash.slice(1);
    if (location.href.match(/subscriptions/)) {
        if (!location.href.match(/2017vaule/)) {
            if (window.location.hash.match('#' + hashValue + '')) {
                $('.order-page .tabContent ul').removeClass('active');
                $('.order-page .tabContent ul#' + hashValue + 'Plan').addClass('active');
                setTimeout(function () {
                    $('html, body.order-page').animate({
                        scrollTop: $('.order-page .setPlan .tabContent').offset().top - 60
                    }, 1000);
                }, 1000);
            }
        }
    }
    if (width < 1024) {
        if (location.href.match(/subscriptions/)) {
            if (!location.href.match(/2017vaule/)) {
                if (window.location.hash.match('#' + hashValue + '')) {
                    var swiper = new Swiper('.order-page .swiper-container', {
                        loop: true,
                        initialSlide: 3,
                        pagination: '.orderSliderDot',
                        paginationClickable: true,
                        nextButton: '.next',
                        prevButton: '.prev',
                        spaceBetween: 0
                    });
                } else {
                    var swiper = new Swiper('.order-page .swiper-container', {
                        loop: true,
                        pagination: '.orderSliderDot',
                        paginationClickable: true,
                        nextButton: '.next',
                        prevButton: '.prev',
                        spaceBetween: 0
                    });
                }
            }
        }
    }

    $('.order-page .tabPanel .tabGroup li').click(function () {
        var currentId = $(this).data("dynamicclass");
        $('.order-page .tabContent ul').removeClass('active');
        $('.order-page .tabContent ul#' + currentId).addClass('active');
    });

    //會員頁用：一般幻燈片
    if (location.href.match(/member/)) {
        var orderSliderArticleLength = $('.orderSliderArticle > li').length,
                $orderSliderAli = $('.orderSliderArticle > li'),
                $orderSliderDot = $('.orderSliderDot li'),
                nowIndex4 = 0;
        $('.orderSliderArticle .prev').click(function () {
            $orderSliderAli.attr('class', '');
            $orderSliderDot.attr('class', '');
            $orderSliderAli.eq(nowIndex4).addClass('ltr_out');
            $orderSliderDot.eq(nowIndex4).addClass('ltr_out');
            if (nowIndex4 > 0) {
                nowIndex4--;
            } else {
                nowIndex4 = orderSliderArticleLength - 1;
            }
            $orderSliderAli.eq(nowIndex4).addClass('ltr_in');
            $orderSliderDot.eq(nowIndex4).addClass('ltr_in');
            return false;
        });

        $('.orderSliderArticle .next').click(function () {
            $orderSliderAli.attr('class', '');
            $orderSliderDot.attr('class', '');
            $orderSliderAli.eq(nowIndex4).addClass('rtl_out');
            $orderSliderDot.eq(nowIndex4).addClass('rtl_out');
            if (nowIndex4 < orderSliderArticleLength - 1) {
                nowIndex4++;
            } else {
                nowIndex4 = 0;
            }
            $orderSliderAli.eq(nowIndex4).addClass('rtl_in');
            $orderSliderDot.eq(nowIndex4).addClass('rtl_in');
            return false;
        });
    }

    //usingPlaceHolder
    if (location.href.match(/cwdaily/)) {

    } else {
        $('input, textarea').placeholder();
    }

    //決勝頁smooth btn
    $(".orderSliderArticle > li[data-dynamicclass*=twoDevicePlan], .orderSliderArticle > li[data-dynamicclass*=PaperPlan]").click(function () {
        $('html,body').animate({
            scrollTop: $(".tabContent").offset().top - 70
        }, 750);
        //return false;
    });

    //點擊後出現六大權益
    $("#sixEquityBtn").click(function () {
        $(".sixEquity").slideToggle();
    });

    //六大權益
    $('.sixEquityIcon .submit').hover(function () {
        var sixEquity = $(this).index();
        $('.sixEquityFeatuers .active').removeClass('active');
        $(this).addClass('active').siblings('.active').removeClass('active');
        $(this).parent().siblings('.sixEquityFeatuers').children('p').eq(sixEquity).addClass('active');
    });

    //註冊頁用：tooltip-mobile
    $('.paywallAnnounce .btn-close').click(function () {
        $(this).parent().fadeOut(300);
    });

    //會員中心
    $('.toggleMemberBlock').click(function () {
        $('.thirdNav').slideToggle();
    });
    var IS_IPAD = navigator.userAgent.match(/iPad/i) != null;
    var IS_IPHONE = (navigator.userAgent.match(/iPhone/i) != null) || (navigator.userAgent.match(/iPod/i) != null);
    if (IS_IPAD) {
        IS_IPHONE = false;

        $(".list-inline li.userName").click(function () {

            var $t = $('.list-inline li .thirdNav');

            if ($t.is(':visible')) {
                $t.slideUp();
                // Other stuff to do on slideUp
                $(".list-inline li.userName").css("background-image", "url(../../assets_new/img/download_arrow_blk.png)");
                $(".index-page .list-inline li.userName").css("background-image", "url(../../assets_new/img/download_arrow_white.png)");
            } else {
                $t.slideDown();
                // Other stuff to down on slideDown
                $(".list-inline li.userName").css("background-image", "url(../../assets_new/img/upload_arrow_blk.png)");
                $(".index-page .list-inline li.userName").css("background-image", "url(../../assets_new/img/upload_arrow_white.png)");
            }
        });

    }
    //註冊用：自動加入dashMark
    var format = "yyyy/mm/dd";
    var match = new RegExp(format
            .replace(/(\w+)\W(\w+)\W(\w+)/, "^\\s*($1)\\W*($2)?\\W*($3)?([0-9]*).*")
            .replace(/m|d|y/g, "\\d"));
    var replace = "$1-$2-$3$4"
            .replace(/\//g, format.match(/\W/));

    function doFormat(target) {
        target.value = target.value
                .replace(/(^|\W)(?=\d\W)/g, "$10") // padding
                .replace(match, replace) // fields
                .replace(/(\W)+/g, "$1"); // remove repeats
    }
    $("input[id='birthday_num']:first").keyup(function (e) {
        if (!e.ctrlKey && !e.metaKey && (e.keyCode == 32 || e.keyCode > 46))
            doFormat(e.target)
    });
});

//usingPlaceHolder
(function (factory) {
    if (typeof define === 'function' && define.amd) {

        // AMD
        define(['jquery'], factory);
    } else if (typeof module === 'object' && module.exports) {
        factory(require('jquery'));
    } else {

        // Browser globals
        factory(jQuery);
    }
}(function ($) {
    var debugMode = false;

    // Opera Mini v7 doesn't support placeholder although its DOM seems to indicate so
    var isOperaMini = Object.prototype.toString.call(window.operamini) === '[object OperaMini]';
    var isInputSupported = 'placeholder' in document.createElement('input') && !isOperaMini && !debugMode;
    var isTextareaSupported = 'placeholder' in document.createElement('textarea') && !isOperaMini && !debugMode;
    var valHooks = $.valHooks;
    var propHooks = $.propHooks;
    var hooks;
    var placeholder;
    var settings = {};
    if (isInputSupported && isTextareaSupported) {
        placeholder = $.fn.placeholder = function () {
            return this;
        };
        placeholder.input = true;
        placeholder.textarea = true;
    } else {
        placeholder = $.fn.placeholder = function (options) {
            var defaults = {
                customClass: 'placeholder'
            };
            settings = $.extend({}, defaults, options);
            return this.filter((isInputSupported ? 'textarea' : ':input') + '[' + (debugMode ? 'placeholder-x' : 'placeholder') + ']')
                    .not('.' + settings.customClass)
                    .not(':radio, :checkbox, [type=hidden]')
                    .bind({
                        'focus.placeholder': clearPlaceholder,
                        'blur.placeholder': setPlaceholder
                    })
                    .data('placeholder-enabled', true)
                    .trigger('blur.placeholder');
        };
        placeholder.input = isInputSupported;
        placeholder.textarea = isTextareaSupported;
        hooks = {
            'get': function (element) {
                var $element = $(element);
                var $passwordInput = $element.data('placeholder-password');
                if ($passwordInput) {
                    return $passwordInput[0].value;
                }
                return $element.data('placeholder-enabled') && $element.hasClass(settings.customClass) ? '' : element.value;
            },
            'set': function (element, value) {
                var $element = $(element);
                var $replacement;
                var $passwordInput;
                if (value !== '') {
                    $replacement = $element.data('placeholder-textinput');
                    $passwordInput = $element.data('placeholder-password');
                    if ($replacement) {
                        clearPlaceholder.call($replacement[0], true, value) || (element.value = value);
                        $replacement[0].value = value;
                    } else if ($passwordInput) {
                        clearPlaceholder.call(element, true, value) || ($passwordInput[0].value = value);
                        element.value = value;
                    }
                }
                if (!$element.data('placeholder-enabled')) {
                    element.value = value;
                    return $element;
                }
                if (value === '') {
                    element.value = value;

                    // Setting the placeholder causes problems if the element continues to have focus.
                    if (element != safeActiveElement()) {

                        // We can't use `triggerHandler` here because of dummy text/password inputs :(
                        setPlaceholder.call(element);
                    }
                } else {
                    if ($element.hasClass(settings.customClass)) {
                        clearPlaceholder.call(element);
                    }
                    element.value = value;
                }

                // `set` can not return `undefined`; see http://jsapi.info/jquery/1.7.1/val#L2363
                return $element;
            }
        };
        if (!isInputSupported) {
            valHooks.input = hooks;
            propHooks.value = hooks;
        }
        if (!isTextareaSupported) {
            valHooks.textarea = hooks;
            propHooks.value = hooks;
        }
        $(function () {

            // Look for forms
            $(document).delegate('form', 'submit.placeholder', function () {

                // Clear the placeholder values so they don't get submitted
                var $inputs = $('.' + settings.customClass, this).each(function () {
                    clearPlaceholder.call(this, true, '');
                });
                setTimeout(function () {
                    $inputs.each(setPlaceholder);
                }, 10);
            });
        });

        // Clear placeholder values upon page reload
        $(window).bind('beforeunload.placeholder', function () {
            var clearPlaceholders = true;
            try {

                // Prevent IE javascript:void(0) anchors from causing cleared values
                if (document.activeElement.toString() === 'javascript:void(0)') {
                    clearPlaceholders = false;
                }
            } catch (exception) {
            }
            if (clearPlaceholders) {
                $('.' + settings.customClass).each(function () {
                    this.value = '';
                });
            }
        });
    }
    function args(elem) {

        // Return an object of element attributes
        var newAttrs = {};
        var rinlinejQuery = /^jQuery\d+$/;
        $.each(elem.attributes, function (i, attr) {
            if (attr.specified && !rinlinejQuery.test(attr.name)) {
                newAttrs[attr.name] = attr.value;
            }
        });
        return newAttrs;
    }
    function clearPlaceholder(event, value) {
        var input = this;
        var $input = $(this);
        if (input.value === $input.attr((debugMode ? 'placeholder-x' : 'placeholder')) && $input.hasClass(settings.customClass)) {
            input.value = '';
            $input.removeClass(settings.customClass);
            if ($input.data('placeholder-password')) {
                $input = $input.hide().nextAll('input[type="password"]:first').show().attr('id', $input.removeAttr('id').data('placeholder-id'));

                // If `clearPlaceholder` was called from `$.valHooks.input.set`
                if (event === true) {
                    $input[0].value = value;
                    return value;
                }
                $input.focus();
            } else {
                input == safeActiveElement() && input.select();
            }
        }
    }
    function setPlaceholder(event) {
        var $replacement;
        var input = this;
        var $input = $(this);
        var id = input.id;

        // If the placeholder is activated, triggering blur event (`$input.trigger('blur')`) should do nothing.
        if (event && event.type === 'blur' && $input.hasClass(settings.customClass)) {
            return;
        }
        if (input.value === '') {
            if (input.type === 'password') {
                if (!$input.data('placeholder-textinput')) {
                    try {
                        $replacement = $input.clone().prop({
                            'type': 'text'
                        });
                    } catch (e) {
                        $replacement = $('<input>').attr($.extend(args(this), {
                            'type': 'text'
                        }));
                    }
                    $replacement
                            .removeAttr('name')
                            .data({
                                'placeholder-enabled': true,
                                'placeholder-password': $input,
                                'placeholder-id': id
                            })
                            .bind('focus.placeholder', clearPlaceholder);
                    $input
                            .data({
                                'placeholder-textinput': $replacement,
                                'placeholder-id': id
                            })
                            .before($replacement);
                }
                input.value = '';
                $input = $input.removeAttr('id').hide().prevAll('input[type="text"]:first').attr('id', $input.data('placeholder-id')).show();
            } else {
                var $passwordInput = $input.data('placeholder-password');
                if ($passwordInput) {
                    $passwordInput[0].value = '';
                    $input.attr('id', $input.data('placeholder-id')).show().nextAll('input[type="password"]:last').hide().removeAttr('id');
                }
            }
            $input.addClass(settings.customClass);
            $input[0].value = $input.attr((debugMode ? 'placeholder-x' : 'placeholder'));
        } else {
            $input.removeClass(settings.customClass);
        }
    }
    function safeActiveElement() {

        // Avoid IE9 `document.activeElement` of death
        try {
            return document.activeElement;
        } catch (exception) {
        }
    }
}));
