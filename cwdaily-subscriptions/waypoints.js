$(function () {

    var lastScrollTop = 0;
    $(window).scroll(function () {
        var st = $(window).scrollTop();
        if (st > lastScrollTop) {
            $(".emailorder").hide();
        } else {
            $(".emailorder").show();
        }
        lastScrollTop = st;
        return false;
    });
    $(".close").on("click", function () {
        $(".emailorder").remove();
    });

});