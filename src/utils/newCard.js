import { decks } from "cards";

const suits = ['S', 'H', 'D', 'C']
const ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K']
const deck = new decks.StandardDeck()
const cards = Array.from(deck.cards)
const cardMaps = new Map()
export const setOfDeck = new Set()

let i = 0
for (const s of suits) {
  for (let r of ranks) {
    const rs = r + s
    setOfDeck.add(rs)
    cardMaps.set(rs, cards[i++])
  }
}

export function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

export function shuffledDecks() {
  const shuffledArray = new Array(...setOfDeck); // Create a copy of the original array

  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }

  return shuffledArray;
}


export function createCard(card) {
  return cardMaps.get(card)
}