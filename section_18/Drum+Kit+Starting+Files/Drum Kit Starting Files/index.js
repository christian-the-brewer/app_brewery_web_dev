drums = document.querySelectorAll(".drum")
for (let i = 0; i < drums.length; i++) {
    drums[i].addEventListener("click", function () {

        playSound(this.innerText)
        buttonAnimation(this.innerText);
    });
}
document.addEventListener("keydown", function (event) {
    playSound(event.key)
    buttonAnimation(event.key)
});

function playSound(letter) {
    switch (letter) {
        case "w":
            crash.play();
            break;
        case "a":
            kickBass.play();
            break
        case "s":
            snare.play();
            break
        case "d":
            tom1.play();
            break
        case "j":
            tom2.play();
            break
        case "k":
            tom3.play();
            break
        case "l":
            tom4.play();
            break
        default:
            break;
    }
}

function buttonAnimation(key) {
    const activeButton = document.querySelector("." + key);
    activeButton.classList.add("pressed");
    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 200);
}

let crash = new Audio("sounds/crash.mp3");
let kickBass = new Audio("sounds/kick-bass.mp3");
let snare = new Audio("sounds/snare.mp3");
let tom1 = new Audio("sounds/tom-1.mp3");
let tom2 = new Audio("sounds/tom-2.mp3");
let tom3 = new Audio("sounds/tom-3.mp3");
let tom4 = new Audio("sounds/tom-4.mp3");
