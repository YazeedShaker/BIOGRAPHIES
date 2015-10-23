/// <reference path="H:\GitHub\BIOGRAPHIES\Biographies\Biographies\Scripts/jquery-2.1.4.js" />

$(document).ready(function () {
    formFadeIn();
    $("label").css("color", "white");
});

function formFadeIn() {
    $(".form-horizontal").fadeOut(0.00000001);
    $(".form-horizontal").fadeIn(1000);
}