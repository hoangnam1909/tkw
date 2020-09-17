function getHeight(idName) {
    var testDiv = document.getElementById(idName);
    var heightNav = document.getElementsByClassName("container")[0];
    return testDiv.offsetTop - heightNav.offsetHeight;
}

function playEmbed(idname) {
    $(idname)[0].contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
}

function pauseEmbed(idname) {
    $(idname)[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
}

$(document).ready(function () {
    $('#gototop').fadeOut();
    if ($(this).scrollTop() == 0) {
        $('#gototop').fadeOut();
    }
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('#gototop').fadeIn();
        } else {
            $('#gototop').fadeOut();
        }
    });

    $('#navZep').fadeOut();
    if ($(this).scrollTop() == 0) {
        $('#navZep').fadeOut();
    }
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('#navZep').fadeIn(300);
        } else {
            $('#navZep').fadeOut(300);
        }
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() < getHeight("video") - 400 || $(this).scrollTop() > getHeight("video") + 400) {
            pauseEmbed(player);
        }
    });

    $(window).on("load", function () {
        $(".loader-wrapper").fadeOut("slow");
    });

    $("#gototop").click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
    });

    $("#gotoROG").click(function () {
        $('html, body').animate({
            scrollTop: getHeight("rog")
        }, 800);
    });

    $("#gotoRazer").click(function () {
        $('html, body').animate({
            scrollTop: getHeight("razer")
        }, 800);
    });

    // ====================== ZEPHYRUS ======================
    $("#gotoPerf").click(function () {
        $('html, body').animate({
            scrollTop: getHeight("perf")
        }, 800);
    });

    $("#gotoDisplay").click(function () {
        $('html, body').animate({
            scrollTop: getHeight("display")
        }, 800);
    });

    $("#gotoProductivity").click(function () {
        $('html, body').animate({
            scrollTop: getHeight("productivity")
        }, 800);
    });

    $("#gotoDesign").click(function () {
        $('html, body').animate({
            scrollTop: getHeight("design")
        }, 800);
    });

    $("#gotoCool").click(function () {
        $('html, body').animate({
            scrollTop: getHeight("cooling")
        }, 800);
    });

    $("#gotoAudio").click(function () {
        $('html, body').animate({
            scrollTop: getHeight("audio")
        }, 800);
    });

    $("#gotoVideo").click(function () {
        $('html, body').animate({
            scrollTop: getHeight("video")
        }, 800);
    });

    $("#gotoSpecs").click(function () {
        $('html, body').animate({
            scrollTop: getHeight("specs")
        }, 800);
    });

    $("#gotoAccessory").click(function () {
        $('html, body').animate({
            scrollTop: getHeight("accessory")
        }, 800);
    });
});