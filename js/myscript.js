$(window).scroll(function(){
    if ($(this).scrollTop() > 50) {
    $('#myheader').addClass('sticky_hdr');
    } else {
    $('#myheader').removeClass('sticky_hdr');
    }
});

AOS.init();