/// <reference path="H:\GitHub\BIOGRAPHIES\Biographies\Biographies\Scripts/jquery-2.1.4.js" />

$(document).ready(function () {
    scrollSections();
    introButton();
    pager();
});

function scrollSections() {
    $(".page-scroll").click(function (e) {
        e.preventDefault();
        var sectionID = e.currentTarget.id + "Section";

        $("html body").animate({
            scrollTop: $("#" + sectionID).offset().top
        }, 1000);
    });
}

function introButton() {
    $(".button").click(function (e) {
        e.preventDefault();
        $("html body").animate({
            scrollTop: $("#categoriesSection").offset().top
        }, 1000);
    });
    
}

function pager() {
    $(".pager").click(function (e) {
        e.preventDefault();
        $(".categories").fadeOut(1500, "swing");
        $(".categories").fadeIn(1000);
    });
}