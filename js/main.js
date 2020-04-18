$(document).ready(function () {
    var close = $(".modal-dialog__close"),
        button = $(".navbar__button"),
        modal = $(".modal");

    button.on("click", function() {
        modal.addClass("modal_active");
    });

    close.on("click", function() {
        modal.removeClass("modal_active");
    });


    var btn = $('.arrow-up');

    $(window).scroll(function() {
        if ($(window).scrollTop() > 300) {
        btn.addClass('show');
        } else {
        btn.removeClass('show');
        }
    });

    btn.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, '300');
    });
});