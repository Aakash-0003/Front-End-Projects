let rollDice = Math.floor(Math.random() * 6) + 1;

let randomImage = "images/dice" + rollDice + ".png";

document.querySelectorAll("img")[0].setAttribute("src", randomImage);


let rollDice2 = Math.floor(Math.random() * 6) + 1;

let randomImage2 = "images/dice" + rollDice2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImage2);

if (rollDice > rollDice2) {
    document.querySelector("h1").innerHTML = "Player1 Won";
} else if (rollDice < rollDice2) {
    document.querySelector("h1").innerHTML = "Player2 Won";
} else document.querySelector(h1).innerHTML = "Drawn";