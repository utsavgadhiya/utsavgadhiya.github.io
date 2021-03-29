function timeOutMainPage() {
    document.getElementById("main-content").style.backgroundColor = "white"
    var timeOut = setTimeout(showPage, 2000);
}

function showPage() {
    document.getElementById("main-content").style.backgroundColor = "#1d1f21"
    document.getElementById("spinner").style.display = "none";
    fadeIn();
    loadYear();
}

function fadeIn() {
    var fade = document.getElementById("body-content");
    var opacity = 0;
    var intervalID = setInterval(function () {
        if (opacity < 1) {
            opacity = opacity + 0.1
            fade.style.opacity = opacity;
        } else {
            clearInterval(intervalID);
        }
    }, 50);
}

function loadYear() {
    var year = new Date().getFullYear();
    document.getElementById("current-year").innerHTML = year;
}
