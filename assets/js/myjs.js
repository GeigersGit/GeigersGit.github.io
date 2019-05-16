$(document).ready(function () {
    if ($('body').is('.index-page')) {
        //setTimeout(step1, 1500);
    }
    $('#footer').load("footer.html");
    $('#nav').load("navbar.html");
    $('.hidden').fadeIn(1000).remoteClass('hidden');
    
});

$(window).scroll(function () {
    var ScrollTop = parseInt($(window).scrollTop());
    //console.log(scroll);
    var popPoint = 550;
    var width = $(window).width();

    if (width <= 1668) {
        popPoint = 500;
    }
    if (width <= 1269) {
        popPoint = 450;
    }
    if (width <= 726) {
        popPoint = 350;
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

var first = document.getElementById("firstName");
var last = document.getElementById("lastName");

//function step1() {
//    first.classList.remove("neon-blue")
//    first.classList.add("neon-grey");
//    setTimeout(step2, 700);

//}

//function step2() {
//    last.classList.remove("neon-grey")
//    last.classList.add("neon-red");
//    setTimeout(step3, 1500);
//}

//function step3() {
//    last.classList.remove("neon-red")
//    last.classList.add("neon-grey");
//    setTimeout(step4, 700);
//}

//function step4() {
//    first.classList.remove("neon-grey")
//    first.classList.add("neon-blue");
//    setTimeout(step1, 1500);
//}

function step1() {
    first.classList.remove("neon-blue")
    first.classList.add("neon-grey");
    setTimeout(step2, 1300);
    last.classList.remove("neon-blue")
    last.classList.add("neon-grey");

}

function step2() {
    last.classList.remove("neon-grey")
    last.classList.add("neon-blue");
    setTimeout(step1, 2500);
    first.classList.remove("neon-grey")
    first.classList.add("neon-blue");
}


