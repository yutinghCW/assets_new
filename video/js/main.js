$(function () {
    $('.btn-load-more').click(function () {
        $(this).siblings('.show-more-block').slideToggle();
        return false;
    })
    if ($('.main-header').length) {
        $('body').append('<div class="bodyTouchBlock"></div>');
        $('.toggleSideMenu, .bodyTouchBlock').click(function () {
            $('.sideMenu').toggleClass('show');
            $('.bodyTouchBlock').toggleClass('show');
        });

    }
    $('.sideMenu .moreItem > a').click(function () {
        $(this).toggleClass('open');
        $(this).siblings('.sudeMenuSub').slideToggle();
    });

    $('.sideMenu').on('click', '.moreItem > a', function () {

    });

    var _cinema_wrap = $('.cinema-wrap').width(),
            _cinema_slider_index = 0,
            _cinema_slider_count = $('.cinema-slider > li').length,
            _slider_dot = '',
            $cinema_slider_li = $('.cinema-slider li');

    if (_cinema_slider_count > 1) {
        $('.cinema-wrap').after('<ul class="slider_control"></ul>')
        for (var i = 0; i < _cinema_slider_count; i++) {
            _slider_dot += '<li></li>';
        }
        $('.cinema-wrap').append('<a href="#" class="prev_slider"></a><a href="#" class="next_slider"></a>');
        $('.slider_control').append(_slider_dot);
        $('.slider_control li').eq(_cinema_slider_index).addClass('active');
        $('.prev_slider').click(function () {
            if (_cinema_slider_index != 0) {
                _cinema_slider_index--;
            } else {
                _cinema_slider_index = $('.slider_control li').length - 1;
            }
            switch_slider();
            return false;
        })
        $('.next_slider').click(function () {
            if (_cinema_slider_index != $('.slider_control li').length - 1) {
                _cinema_slider_index++;
            } else {
                _cinema_slider_index = 0;
            }
            switch_slider();
            return false;
        })
    }

    var $control_li = $('.slider_control li');

    $control_li.click(function () {
        if (_cinema_slider_index != $(this).index()) {
            $cinema_slider_li.eq(_cinema_slider_index).removeClass('active');
            $control_li.eq(_cinema_slider_index).removeClass();
            _cinema_slider_index = $(this).index();
            switch_slider();
        }
    })

    function switch_slider() {
        $cinema_slider_li.eq(_cinema_slider_index).addClass('active').siblings().removeClass('active');
        $control_li.eq(_cinema_slider_index).addClass('active').siblings().removeClass('active');
    }

    // 播放頁黑幕效果
    if ($('body').hasClass('mv-article-page') || $('body').hasClass('mv-article-eyes-page')) {
        $('body').append('<div class="black"></div>');
        $(window).scroll(function () {
            $('.black').addClass('fadeOut');
        })
    }

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

    //打開文章頁隱藏的分享功能
    $('.moreArenItem .control').click(function () {
        $(this).toggleClass('open');
        $('.collapse').toggleClass('show');
        $(this).parent('.moreArenItem').siblings('.fbShare').toggleClass('hidden');
        $(this).parent('.moreArenItem').siblings('.comments').toggleClass('hidden');
        return false;
    });

	//1020 edit : 會員登入頁關閉黑幕與paywall
    $('.btn-close').click(function () {
        $('.paywallpanelGroup').fadeOut();
        $('.cinema-black').fadeOut();
		 $('.black').addClass('fadeOut');
    });

	//1020 edit : <video> tag 圖片切換
	$(".cinema-play-btn-group").click(function() {
		$('.cinema-play-btn-group').toggleClass('click');
		$('.cinema-play-btn-group').toggleClass('clicked');
	});

     // fixed main-header
    var $mainHeader = $('.main-header');
    var _v_mainHtop = $mainHeader.offset().top;
    var _v_mainHheight = $mainHeader.outerHeight();
    var _v_bodyScrollTop = 0;

    function hdFixed(aa) {
        if (_v_bodyScrollTop >= _v_mainHheight) {
            $mainHeader.css({position:'fixed',top:0,left:0,width:'100%',zIndex:10})
        } else {
            $mainHeader.css({position:'relative'})
        }
    }
    $(window).scroll(function() {
        _v_bodyScrollTop = $(this).scrollTop();
        hdFixed(_v_bodyScrollTop);
    });
})

//1025 edit : 電腦版YOUTUBE按鈕設定
var player;
function onYouTubePlayerAPIReady() {
	player = new YT.Player('videoFrame', {
		events: {
			'onReady': onPlayerReady
		}
	});
}
function onPlayerReady(event) {
	var playButton = document.getElementById('play-button');
	playButton.addEventListener('click',
	function() {
		player.playVideo();
	});
	var pauseButton = document.getElementById('pause-button');
	pauseButton.addEventListener('click',
	function() {
		player.pauseVideo();
	});
}

//1025 edit : 抓取YOUTUBE API
var tag = document.createElement('script');
tag.src = 'http://www.youtube.com/player_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);