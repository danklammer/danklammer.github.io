/* Bytesize Demo */

function changeSize(newVal){
    var icons = document.getElementById("icons");
    icons.style.fontSize = newVal + 'em';
}

function changeStroke(newVal){
    var icons = document.getElementById("icons");
    icons.style.strokeWidth = newVal + '%';
}

function changeColor(newVal){
    var icons = document.getElementById("icons");
    icons.style.color = newVal;
}

function changeStyleRound(){
    var icons = document.getElementById("icons");
    icons.classList.toggle("round");
}