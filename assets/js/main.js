$(document).ready(function () {
    $('nav .toggle').click(function () {
        $('nav .toggle').toggleClass('nav-active')
    });
    $('.toggle').click(function () {
        $('.menu_list').toggleClass('active');
    });
    // end burger script


    $("#showmenu").click(function (e) {
        $("#menu").toggleClass("hide");
    });
    $("#showmenu").click(function () {
        $('.left_arrow').toggleClass('effect_class');
    });
    // end show-hide content


});


