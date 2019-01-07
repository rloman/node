$(document).ready(function() {
    $('button').popover('dispose');
    $('button').popover({
        animation: true,
        html: true,
        container: body
    });
});