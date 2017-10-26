$(function () {
    var sectionVideo = document.getElementById("video");
    var width = $(window).width(),
            height = $(window).height();

    function playPause() {
        if (sectionVideo.paused) {
            sectionVideo.play();
        } else {
            sectionVideo.pause();
        }
    }

    //scroll
    var $headerOffset = $('section.opening').offset().top;
    var $topBtn = $('.fixBtn');
    var scroTop = 0;
    var $marqueeOffset = $('.marquee').offset().top - 500;
    $(window).scroll(function () {
        scroTop = $(window).scrollTop();
        if (scroTop > $headerOffset) {
            $topBtn.addClass('afixed');
        } else {
            $topBtn.removeClass('afixed');
        }
        if (scroTop >= $marqueeOffset) {
            loopIMG(window, document);
            $(window).off('scroll');
        }
    });

    $('a[href*=#].scroll').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                if (width > 769){
                    $('html,body').animate({
                        scrollTop: target.offset().top - 120
                    }, 1000);
                }else{
                    $('html,body').animate({
                        scrollTop: target.offset().top - 50
                    }, 1000);
                };
                return false;
            }
        }
    });

    $("#watch .item").click(function () {
        $('#watch').carousel('pause');
    });

    $("#watch .item .item-left").click(function () {
        $(this).children('a').animate({'right': '100%'}, 300);
    });
    $("#watch .item .info h4 a").click(function () {
        $(this).children('a').animate({'right': '100%'}, 300);
    });
    $("#watch .item .carousel-control").click(function () {
        $(this).parent().parent().siblings('.item-left').children('a').animate({'right': '0'}, 300);
        $(this).parent().parent().siblings('.item-left').children('.embed-responsive').children('iframe').attr('src', $(this).data().video);
    });

    if (width > 769) {
//        $('body').hover(function () {
//            $('.carousel').carousel('pause');
//        });
//        $('section').hover(function () {
//            $(this).children().children().carousel('cycle');
//        }, function () {
//            $(this).children().children().carousel('pause');
//        });

        $('.device').mouseover(function () {
            $(this).addClass('play').removeClass('pause');
            $('.preview').stop(true, false).animate({'opacity': 0}, 500);
            playPause();
            return false;
        });
        $('.device').mouseout(function () {
            $(this).addClass('pause').removeClass('play');
            $('.preview').stop(true, false).animate({'opacity': 1}, 500);
            playPause();
        });
    } else {
        $('.device').click(function () {
            $(this).toggleClass('play').toggleClass('pause');
            if ($('.device').hasClass('play')) {
                $('.preview').stop(true, false).animate({'opacity': 0}, 500);
                // $('.device .h2-decorate .zhtw img').attr('src','img/decorate-4-read-dark.png');
            }
            ;
            if ($('.device').hasClass('pause')) {
                $('.preview').stop(true, false).animate({'opacity': 1}, 500);
                // $('.device .h2-decorate .zhtw img').attr('src','img/decorate-4-read.png');
            }
            ;
            playPause();
            return false;
        });
    }
    ;

    var $md = 768;
    var $imgH = $('.carousel-inner .item img').height() - 35;
    var $devicwH = $('.device .copyText').outerHeight() - 85;
    if ($(window).width() < $md) {
        $('.left,.right,.section').css('top', $imgH / 2);
        $('.device .embed-responsive').css('top', $devicwH);
    } else {
        $('.left,.right,.section').css('top', 'auto');
    }
    ;

});

function loopIMG(window, document, undefined) {
    var spaceinterval = 1;
    var timeinterval = 20; // `speed`
    var max;
    var firstrun = true;
    // Interval function:
    var gallery = function () {
        var elem = document.getElementById("marquee-container");
        var elem2 = document.getElementById("marquee");
        if (elem2) {
            if (firstrun) {
                max = elem2.scrollWidth;
                // Clone the children of the container until the
                // scrollWidth is at least twice as large as max.
                while (elem2.scrollWidth < max * 2) {
                    var length = elem2.children.length;
                    for (var i = 0; i < length; ++i) {
                        elem2.appendChild(elem2.children[i].cloneNode(true));
                    }
                    break;
                }
                firstrun = false;
            }
            if (elem.scrollLeft >= max) {
                elem.scrollLeft -= max;
            } else {
                elem.scrollLeft += spaceinterval;
            }
        }
    };
    window.setInterval(gallery, timeinterval);
}
;

