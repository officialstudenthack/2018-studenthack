// Timer

var countDownDate = new Date("Apr 28, 2018 10:00:00").getTime();
var x = setInterval(function () {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (hours < 10)
        hours = "0" + hours;
    if (days < 10)
        days = "0" + days;
    if (minutes < 10)
        minutes = "0" + minutes;
    if (seconds < 10)
        seconds = "0" + seconds;

    document.getElementById("daysNumber").innerHTML = days;
    document.getElementById("hoursNumber").innerHTML = hours;
    document.getElementById("minutesNumber").innerHTML = minutes;
    document.getElementById("secondsNumber").innerHTML = seconds;
    document.getElementById("daysNumberP").innerHTML = days;
    document.getElementById("hoursNumberP").innerHTML = hours;
    document.getElementById("minutesNumberP").innerHTML = minutes;
    document.getElementById("secondsNumberP").innerHTML = seconds;

}, 1000);

// Layout logic

if ($(window).width() <= 768) {
    initPhoneLayout();
}

function initPhoneLayout() {
    $('#faqGridPhone').slick({
        autoplay: false,
        infinite: false
    });
    setProgressBarWidth();
    $('#logo').css('left', ($(window).width() - $('#logo').width()) / 2);
    $('#logo').css('top', ($('#timerPhone').height() - $('#logo').width()) / 2 + $('#timerPhone').offset().top);
}

function initTabletLayout() {
    $('#logo').css('left', '2rem');
    $('#logo').css('top', '2rem');
}

function initDesktopLayout() {
    $('#logo').css('left', '3rem');
    $('#logo').css('top', '3rem');
}

$(window).resize(function () {
    if ($(window).width() <= 768) {
        initPhoneLayout();
    }
    else if ($(window).width() <= 1024) {
        initTabletLayout();
    }
    else {
        initDesktopLayout();
    }
    if ($(window).width() > 768) {
        $('#faqGridPhone').slick("unslick");
    }
})

// FAQ Slideshow logic

$('#faqGridPhone').on('swipe', function (event, slick, direction) {
    setProgressBarWidth();
});

function setProgressBarWidth() {
    let widthPercantage = ((Number($('#faqGridPhone').slick('slickCurrentSlide')) + 1) / 9) * 100 + "%";
    $('#slideshowProgressBar').animate({ width: widthPercantage });
}

// Parallax

$('body').scroll(function () {
    parallax();
})

function parallax() {
    if ($(document).width() <= 1024)
        return;

    var wScroll = $('body').scrollTop();

    var fastDelta = 0.4;
    var mediumDelta = 0.6;
    var slowDelta = 0.8;

    var meteorXRatio = 0.466;
    var falconXRatio = 2.145;

    $('.parallax--fast').css('top', (wScroll * fastDelta) + 'px');
    $('.parallax--medium').css('top', (wScroll * mediumDelta) + 'px');
    $('.parallax--slow').css('top', (wScroll * slowDelta) + 'px');

    var falconLeft = $('#falcon').css('left');
    var meteorLeft = $('#meteor').css('left');

    $('#falcon').css('left', falconLeft - (wScroll * fastDelta / falconXRatio) + 'px');
    $('#meteor').css('left', meteorLeft - (wScroll * mediumDelta / meteorXRatio) + 'px');
}

// Map

function initMap() {
    var venue = { lat: 53.470350850357946, lng: -2.240422239629993 };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        center: venue,
        styles: [{ "elementType": "geometry", "stylers": [{ "color": "#231F30" }] }, { "elementType": "labels.text.fill", "stylers": [{ "color": "#8ec3b9" }] }, { "elementType": "labels.text.stroke", "stylers": [{ "color": "#1a3646" }] }, { "featureType": "administrative.country", "elementType": "geometry.stroke", "stylers": [{ "color": "#4b6878" }] }, { "featureType": "administrative.land_parcel", "elementType": "labels.text.fill", "stylers": [{ "color": "#64779e" }] }, { "featureType": "administrative.province", "elementType": "geometry.stroke", "stylers": [{ "color": "#4b6878" }] }, { "featureType": "landscape.man_made", "elementType": "geometry.stroke", "stylers": [{ "color": "#334e87" }] }, { "featureType": "landscape.natural", "elementType": "geometry", "stylers": [{ "color": "#023e58" }] }, { "featureType": "poi", "elementType": "geometry", "stylers": [{ "color": "#283d6a" }] }, { "featureType": "poi", "elementType": "labels.text.fill", "stylers": [{ "color": "#6f9ba5" }] }, { "featureType": "poi", "elementType": "labels.text.stroke", "stylers": [{ "color": "#1d2c4d" }] }, { "featureType": "poi.park", "elementType": "geometry.fill", "stylers": [{ "color": "#023e58" }] }, { "featureType": "poi.park", "elementType": "labels.text.fill", "stylers": [{ "color": "#3C7680" }] }, { "featureType": "road", "elementType": "geometry", "stylers": [{ "color": "#304a7d" }] }, { "featureType": "road", "elementType": "labels.text.fill", "stylers": [{ "color": "#98a5be" }] }, { "featureType": "road", "elementType": "labels.text.stroke", "stylers": [{ "color": "#1d2c4d" }] }, { "featureType": "road.highway", "elementType": "geometry", "stylers": [{ "color": "#2c6675" }] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "color": "#255763" }] }, { "featureType": "road.highway", "elementType": "labels.text.fill", "stylers": [{ "color": "#b0d5ce" }] }, { "featureType": "road.highway", "elementType": "labels.text.stroke", "stylers": [{ "color": "#023e58" }] }, { "featureType": "transit", "elementType": "labels.text.fill", "stylers": [{ "color": "#98a5be" }] }, { "featureType": "transit", "elementType": "labels.text.stroke", "stylers": [{ "color": "#1d2c4d" }] }, { "featureType": "transit.line", "elementType": "geometry.fill", "stylers": [{ "color": "#283d6a" }] }, { "featureType": "transit.station", "elementType": "geometry", "stylers": [{ "color": "#3a4762" }] }, { "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#0e1626" }] }, { "featureType": "water", "elementType": "labels.text.fill", "stylers": [{ "color": "#4e6d70" }] }]
    });
    var marker = new google.maps.Marker({
        position: venue,
        map: map
    });
}
