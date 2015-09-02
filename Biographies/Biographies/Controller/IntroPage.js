var windowH = $(window).height(),
    documEle = $(document),
    slideDownPage = $('.slide-page-down'),
    btns = $(".btn"),
    animeSpeed = 500;

slideDownPage.css({
    height: windowH + 'px',
    top: -windowH + 'px'
});

btns.on('click', function (e) {
    if ($(this).hasClass('open')) {
        slideDownPage.animate({ 'top': 0 }, animeSpeed)
    }
});