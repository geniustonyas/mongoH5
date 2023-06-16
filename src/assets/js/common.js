function scroll(fn) {
    var beforeScrollTop = document.body.scrollTop,
        fn = fn || function () { };
    window.addEventListener("scroll", function () {
        var afterScrollTop = document.body.scrollTop,
            delta = afterScrollTop - beforeScrollTop;
        if (delta === 0) return false;
        fn(delta > 0 ? "down" : "up");
        beforeScrollTop = afterScrollTop;
    }, false);
}

$(function () {
    ////吸顶
    //scroll(function (direction) { 
    //    var boxH = $(".header").height();
    //    var top = $(window).scrollTop();
    //    if (top > boxH) {
    //        if (direction == "up") {
    //            $(".header,.footer").removeClass("fixed");
    //        }
    //        else {
    //            $(".header,.footer").addClass("fixed");
    //        }
    //    }
    //});


});