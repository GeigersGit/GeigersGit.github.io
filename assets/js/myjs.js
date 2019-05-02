$(document).ready(function () {
    $('#footer').load("footer.html");
    $('#nav').load("navbar.html");
    $('.hidden').fadeIn(1000).remoteClass('hidden');
});

$(window).scroll(function () {
    var ScrollTop = parseInt($(window).scrollTop());
    //console.log(scroll);
    var popPoint = 600;
    var width = $(window).width();

    if (width <= 1668) {
        popPoint = 550;
    }
    if (width <= 1269) {
        popPoint = 500;
    }
    if (width <= 726) {
        popPoint = 325;
    }

    if (ScrollTop > popPoint) {
        //console.log('ScrollTop');
        $("#popDownNav").addClass("reveal");
        $("#navbackground").addClass("reveal");
    } else {
        //console.log('ScrollTop ');
        $("#popDownNav").removeClass("reveal");
        $("#navbackground").removeClass("reveal");
    }
});