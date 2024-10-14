var that = this;

var userAgent = navigator.userAgent || navigator.vendor || window.opera;

if (/android/i.test(userAgent)) {
    // $('.iospc').hide();
    $('.ios-text').hide();
    $('.androidpc').addClass('myClass');
    //$('.txtandroid').removeClass("hide");
}

if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    // $('.androidpc').hide();
    $('.android-text').hide();
    $('.iospc').addClass('myClass');
}