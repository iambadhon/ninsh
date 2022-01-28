$(function () {

    //=================preloader section start=================//

    $(window).on("load", function () {
        $(".preloader").delay(500).fadeOut(1000)
    });

    //=================preloader section end =================//

    //=================scroll to top section start =================//
    $(".scroll_to_top").click(function () {
        $("html,body").animate({
            scrollTop: 0,
        }, 2000)
    });

    $(window).scroll(function () {
        var scrolling = $(this).scrollTop()

        if (scrolling > 100) {
            $(".scroll_to_top").fadeIn(800);
        } else {
            $(".scroll_to_top").fadeOut(800);
        }
    });

    //=================scroll to top section end =================//


})