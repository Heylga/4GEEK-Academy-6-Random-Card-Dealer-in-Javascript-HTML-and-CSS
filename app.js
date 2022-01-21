const suits = ["♥", "♦", "♠", "♣"];
const redsuits = ["♥", "♦"];
const numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
let cardbody = document.querySelector(".card-body");
let cardheader = document.querySelector(".card-header");
let cardfooter = document.querySelector(".card-footer");

const randomIndex = (arr) => Math.floor(Math.random() * arr.length);
const getRandom = (arr, i) => arr[i];

window.onload = () => { 
    const icon = getRandom(suits, randomIndex(suits));
    cardheader.innerHTML = icon;
    cardbody.innerHTML = getRandom(numbers, randomIndex(numbers));
    cardfooter.innerHTML = icon;
    // if (cardheader.innerHTML == '♥' || cardheader.innerHTML == '♦') {
    //     icon.classlist.add('card-red');
    // } else {
    //     cardheader.classList.add('card-black');
    // }
    // if (cardfooter.innerHTML == '♥' || cardheader.innerHTML == '♦') {
    //     icon.classlist.add('card-red');
    // } else {
    //     cardfooter.classList.add('card-black');
    // }
};
