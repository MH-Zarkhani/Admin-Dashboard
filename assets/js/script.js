$(document).ready(function() {
    // tooltip
    $('[data-toggle="tooltip"]').tooltip();
   // get currentyear
    const year = (new Date).getFullYear();
    $('#year').text(year);
});