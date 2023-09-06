$(window).scroll(function() {
    var scrollPos = $(window).scrollTop();
    var windowHeight = $(window).height();
    var cloudTransitionTop = $('.cloud-transition').offset().top;
    var cloudTransitionHeight = $('.cloud-transition').outerHeight();

    if (scrollPos > cloudTransitionTop && scrollPos < (cloudTransitionTop + cloudTransitionHeight)) {
        var cloudOffset = ((scrollPos - cloudTransitionTop) / cloudTransitionHeight) * 100;
        $('.cloud-big:first-child').css({
            'transform': 'translateX(-' + cloudOffset + '%)',
            'left': cloudOffset + '%'
        });
        $('.cloud-big:last-child').css({
            'transform': 'translateX(' + cloudOffset + '%)',
            'left': (100 - cloudOffset) + '%'
        });
    }
});