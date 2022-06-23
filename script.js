var simpleSlides = function () {
    var i;
    var slides = document.querySelectorAll(".slides");
    for (i = 0; i < slides.length; i++) {
        slides[i].setAttribute("style","display:none");
    }
    count++;
    if (count > slides.length) {
        count = 1;
    }
    slides[count-1].setAttribute("style","display:block");
    setTimeout(simpleSlides, 3600);
}

var count = 0;
simpleSlides();

function testAlert() {
    alert('Es ist alles auf einer Seite!');
}

function showSource() {
    var curSource;
    curSource = 1;
    alert(curSource);
}

function showMore() {

    document.getElementById(420).style.visibility = "visible";
    document.getElementById(421).style.visibility = "visible";
    document.getElementById(422).style.visibility = "visible";
}

function showLess() {

    document.getElementById(420).style.visibility = "hidden";
    document.getElementById(421).style.visibility = "hidden";
    document.getElementById(422).style.visibility = "hidden";

}

function scrollToPlanets() {

    var exoPlanets = 650;

    window.scroll(0, exoPlanets);
}

function scrollToNebula() {

    window.scroll(0,2180);
}

function scrollToTechno() {

    window.scroll(0, 3400);
}

