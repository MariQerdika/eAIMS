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



// modal
document.querySelectorAll('.modalBtn').forEach(function (elem) {
    elem.addEventListener('click', function (e) {
        this.parentElement.querySelector('.modal').style.display = 'block'
    });
});
document.querySelectorAll('.closeBtn').forEach(function (elem) {
    elem.addEventListener('click', function (e) {
        this.parentElement.parentElement.parentElement.style.display = 'none'
    });
});
window.addEventListener('click', outsideClick);
function outsideClick(e) {
    if (e.target.classList.length > 0) {
        if (e.target.classList[0] == 'modal') {
            e.target.style.display = 'none';
        }
    }
}


$("#showmenul").click(function (e) {
    $("#menul").toggleClass("showl");
});
$(document).ready(function () {
    $("#showmenul").click(function () {
        $('.left_arrow').toggleClass('effect_class');
    });
});
