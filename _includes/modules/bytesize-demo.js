/* Bytesize Demo */

var icons = document.getElementById("icons");

function changeSize(newVal){
    icons.style.fontSize = newVal + 'em';
}

function changeStroke(newVal){
    icons.style.strokeWidth = newVal + '%';
}

function changeColor(newVal){
    icons.style.color = newVal;
}

function changeStyleRound(){
    icons.classList.toggle("round");
    icons.classList.toggle("square");
}