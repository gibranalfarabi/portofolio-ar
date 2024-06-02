
document.addEventListener('contextmenu', event => event.preventDefault());

$('a.marker').bind('click', function(event) {
    $.ajax({
        type: 'GET',
        url: domain + "marker.html",
        cache: false,
        processData: false,
        contentType: false,
        success: function(result) {
            $("#content").html(result);
        }
    });
});
$('a.about').bind('click', function(event) {
    $.ajax({
        type: 'GET',
        url: domain + "about.html",
        cache: false,
        processData: false,
        contentType: false,
        success: function(result) {
            $("#content").html(result);
        }
    });
});

$('a.guide').bind('click', function(event) {
    $.ajax({
        type: 'GET',
        url: domain + "guide.html",
        cache: false,
        processData: false,
        contentType: false,
        success: function(result) {
            $("#content").html(result);
        }
    });
});

$('a.start').bind('click', function(event) {
    $.ajax({
        type: 'GET',
        url: domain + "start.html",
        cache: false,
        processData: false,
        contentType: false,
        success: function(result) {
            $("#content").html(result);
        }
    });
});

