var color1 = document.getElementById('color1');
var color2 = document.getElementById('color2');
var h3 = document.querySelector('h3');
var body = document.getElementsByTagName('body')[0];
var button = document.getElementById('button');

h3.innerHTML = `linear-gradient(to right, ${color1.value}, ${color2.value})`;

function changeBG() {
    body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
    h3.innerHTML = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function colors() {
    color1.value = getRandomColor();
    color2.value = getRandomColor();
    changeBG();
}

color1.addEventListener('input', changeBG);

color2.addEventListener('input', changeBG);

button.addEventListener('click', colors);
