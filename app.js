const suits = ["♥", "♦", "♠", "♣"];
const numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
let cardbody = document.querySelector(".card-body");
let cardheader = document.querySelector(".card-header");
let cardfooter = document.querySelector(".card-footer");

const randomIndex = (arr) => Math.floor(Math.random() * arr.length);
const getNumber = (i, arr) => arr[i];
const getSuit = (i, arr) => arr[i];

window.onload () => { 
    cardheader.innerHTML = getNumber(randomIndex(suits), suits);
    cardbody.innerHTML = getSuit(randomIndex(numbers), numbers);
    cardfooter.innerHTML = getNumber(randomIndex(suits), suits);
};


// console.log (randomIndex(suits));

// window.onload () => { 
//     document.querySelector('.card').classList.add(generateRandomSuit());
//     document.querySelector('.card').innerHTML = generateRandomNumber();
// };

// let generateRandomNumber = () => {
//     let indexNumbers = Math.floor(Math.random() * numbers.length);
//     return numbers[indexNumbers];
// };
// let generateRandomSuit = () => {
//     let indexSuit = Math.floor(Math.random() * suits.length);
//     return suit[indexSuit];
// };