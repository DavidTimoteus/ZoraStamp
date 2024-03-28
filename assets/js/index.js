$(document).ready(function () {
    $(".nav-link").click(function () {
        $(".nav-link").removeClass("fw-bold active");
        $(this).addClass("fw-bold active");
    });
    $(".navbar-brand").mouseenter(function () {
        $(this).css("color", "#E02424");
    }).mouseleave(function () {
        $(this).css("color", "black");
    });

    var words = $('#text-header').text().split(' ');
    var index = 0;
    setInterval(function () {
        var coloredText = '';
        for (var i = 0; i < words.length; i++) {
            if (i === index % words.length) {
                coloredText += '<span style="color: #E02424">' + words[i] + '</span> ';
            } else {
                coloredText += words[i] + ' ';
            }
        }
        $('#text-header').html(coloredText);
        index++;
    }, 1000);
});
