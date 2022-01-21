const suits = ["♥", "♦", "♠", "♣"]
const numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]

let randomIndex = (arr) => Math.floor(Math.random() * arr.length);
console.log (randomIndex(suits))

window.onload = () => {
   document.querySelector('.card').classList.add(randomIndex());
};



  
























































// class SUITS =["♥", "♦", "♠", "♣"]
// class VALUES =[

//     "J",
//     "3",
//     "8",
// ]

// get numberOfCards {
//     return this.cards.length
// }

// shuffle() {
//     for (let i = thisnumberOfCards - 1; i>0; i--)
//     const newIndex = Math.floor(Math.random() * (i + 1))
//     const oldValue = this.cards[newIndex]
//     this.cards[newIndex]=this.cards[i]
//     this.cards[i]= oldValue;
//     }
// }
// }

// class Deck {
//     constructor() {
//         this.cards = this.cards
//     }
//     shuffle() {
//         this.card.sort((a, b) => Math.random() - .5)
//     }
// }

// class Card {
//     constructor(suit, value) {
//         this.suit = suit;
//         this.value = value;
//     }
// }

// function fresh.Deck() {
//     return SUITS.flatMap(suit => {
//         return VALUES.map(value => {
//             return new Card(suit, value)
//     )}
//     )}
// }


