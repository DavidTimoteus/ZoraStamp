$(document).ready(function () {
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

    $(window).scroll(function () {
        var v = $('a[href="#home"]');
        var w = $('a[href="#service"]');
        var x = $('a[href="#gallery"]');
        var y = $('a[href="#aboutUs"]');
        var z = $('a[href="#contactUs"]');

        function reset() {
            v.removeClass('fw-bold active');
            w.removeClass('fw-bold active');
            x.removeClass('fw-bold active');
            y.removeClass('fw-bold active');
            z.removeClass('fw-bold active');
        }

        if ($(this).scrollTop() >= $('header#home').offset().top - 100) {
            reset();
            v.addClass('fw-bold active');
        }

        if ($(this).scrollTop() >= $('figure#service').offset().top - 100) {
            reset();
            w.addClass('fw-bold active');
        }
        if ($(this).scrollTop() >= $('figure#gallery').offset().top - 100) {
            reset();
            x.addClass('fw-bold active');
        }
        if ($(this).scrollTop() >= $('div#aboutUs').offset().top - 100) {
            reset();
            y.addClass('fw-bold active');
        }
        if ($(this).scrollTop() >= $('div#contactUs').offset().top - 100) {
            reset();
            z.addClass('fw-bold active');
        }
    });

});
