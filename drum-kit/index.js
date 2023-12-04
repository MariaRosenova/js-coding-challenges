
//Detecting Button Press
var buttons = document.querySelectorAll(".drum");


for (var i = 0; i < buttons.length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var currentButton = this.innerHTML;

    makeSound(currentButton);
    buttonAnimation(currentButton);
  });
}


// Detecting Keyboard Press

document.addEventListener("keydown", function(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
   
});

function makeSound(key) {

    switch (key) {
        case "w":
          let tom1 = new Audio("sounds/tom-1.mp3");
          tom1.play();
          break;
        case "a":33
          let tom2 = new Audio("sounds/tom-2.mp3");
          tom2.play();
          break;
        case "s":
          let tom3 = new Audio("sounds/tom-3.mp3");
          tom3.play();
          break;
        case "d":
          let tom4 = new Audio("sounds/tom-4.mp3");
          tom4.play();
          break;
        case "j":
          let tom5 = new Audio("sounds/snare.mp3");
          tom5.play();
          break;
        case "k":
          let tom6 = new Audio("sounds/crash.mp3");
          tom6.play();
          break;
        case "l":
          let tom7 = new Audio("sounds/kick-bass.mp3");
          tom7.play();
          break;
        default:
          console.log(key);
          break;
      }
}

function buttonAnimation(currentKey) {
    var activateButton = document.querySelector("." + currentKey);
    activateButton.classList.add("pressed");

    setTimeout(() => {
        activateButton.classList.remove("pressed");
    }, 100)
}