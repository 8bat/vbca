$(document.body).ready(function() {
    $('td.arrow').click(function() {
        var e = jQuery.Event("keypress");
        e.which = 13;
        $('.prompt').trigger(e);
    });
});
