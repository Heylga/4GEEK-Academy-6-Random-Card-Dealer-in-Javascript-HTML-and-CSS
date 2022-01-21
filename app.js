const suits = ["♥", "♦", "♠", "♣"];
const numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
let cardbody = document.querySelector(".card-body");
let cardheader = document.querySelector(".card-header");
let cardfooter = document.querySelector(".card-footer");

const randomIndex = (arr) => Math.floor(Math.random() * arr.length);
const getNumber = (arr, i) => arr[i];
const getSuit = (arr, i) => arr[i];



window.onload = () => { 
    cardheader.innerHTML = getSuit(suits, randomIndex(suits));
    cardbody.innerHTML = getNumber(numbers, randomIndex(numbers));
    cardfooter.innerHTML = getSuit(suits, randomIndex(suits));
};

