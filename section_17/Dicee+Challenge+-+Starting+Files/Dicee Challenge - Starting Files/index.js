image1 = document.querySelector(".img1");
image2 = document.querySelector(".img2");
results = document.querySelector("h2");

function getRandomInt() {
    min = Math.ceil(1);
    max = Math.floor(7);
    return Math.floor(Math.random() * (max - min) + min);
}

randomNumber1 = getRandomInt();
randomNumber2 = getRandomInt();

console.log(randomNumber1);
console.log(randomNumber2);

images = {
    1: "./images/dice1.png",
    2: "./images/dice1.png",
    3: "./images/dice3.png",
    4: "./images/dice4.png",
    5: "./images/dice5.png",
    6: "./images/dice6.png",
}

image1.setAttribute("src", images[randomNumber1]);
image2.setAttribute("src", images[randomNumber2]);

let winner = 3;

if (randomNumber1 > randomNumber2) {
    winner = 1;
} else if (randomNumber2 > randomNumber1) {
    winner = 2;
}

if (winner === 1) {
    results.innerText = "Player 1 Wins!"
} else if (winner === 2) {
    results.innerText = "Player 2 Wins!";
} else {
    results.innerText = "It is a Tie!";
}

