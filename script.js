var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementsByTagName("body")[0];
var randomBtn = document.querySelector("#randomColors");

body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value  + ")";
css.textContent = body.style.background + ";";

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
randomBtn.addEventListener("click", randomGradient);

function setGradient(){
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value  + ")";

    css.textContent = body.style.background + ";";
}

function randomGradient(){
    color1.value = calcRandomHexColor();
    color2.value = calcRandomHexColor();
    
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value  + ")";

    css.textContent = body.style.background + ";";
}

function calcRandomHexColor() {
    return '#' + ("000000" + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6);
}



