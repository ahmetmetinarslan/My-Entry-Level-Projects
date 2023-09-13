var menuBtn = document.getElementById("mobilemenu");
var mobilenav = document.getElementById("mobilenav");

mobilenav.style.left = "-100%";

menuBtn.onclick = function () {
    if(mobilenav.style.left == "-100%") {
        mobilenav.style.left = "50%";
        menuBtn.src = "images/icon-close.svg";
    } else {
        mobilenav.style.left = "-100%";
        menuBtn.src = "images/icon-hamburger.svg";
    }
}