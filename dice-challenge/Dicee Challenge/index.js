var randomNumber1 = Math.floor(Math.random() * 6) + 1; // 1-6

var randomDiceImage = "dice" + randomNumber1 + ".png";

var randomImageSource = "images/" + randomDiceImage; // images/dice1.png

var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "dice" + randomNumber2 + ".png";

var img2 = document.querySelectorAll("img")[1];

var randomImageSource2 = "images/" + randomDiceImage;
img2.setAttribute("src", randomImageSource2);

var title = document.querySelector("h1");

if (randomNumber1 > randomNumber2) {
    title.innerHTML = "Player 1 Wins!";
} else {
    title.innerHTML = "Player 2 Wins!";
}
