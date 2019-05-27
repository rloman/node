$(document).ready(function () {
    $("a#xs").click(function () {

        $("#left").attr("class", "col-2");
        $("#content").attr("class", "col-9");
        $("#right").attr("class", "col-1");
    });
    $("a#sm").click(function () {
        $("#left").attr("class", "col-sm-2");
        $("#content").attr("class", "col-sm-9");
        $("#right").attr("class", "col-sm-1");
    });

    $("a#md").click(function() {
        $("#left").attr("class", "col-md-2");
        $("#content").attr("class", "col-md-9");
        $("#right").attr("class", "col-md-1");
    });

    $("a#lg").click(function() {
        $("#left").attr("class", "col-lg-2");
        $("#content").attr("class", "col-lg-9");
        $("#right").attr("class", "col-lg-1");
    });

    $("a#xl").click(function() {
        $("#left").attr("class", "col-xl-2");
        $("#content").attr("class", "col-xl-9");
        $("#right").attr("class", "col-xl-1");
    });


});