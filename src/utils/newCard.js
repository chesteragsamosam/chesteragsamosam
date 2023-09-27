import { decks } from "cards";

const suits = ['S', 'H', 'D', 'C']
const ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
const deck = new decks.StandardDeck()
const cards = Array.from(deck.cards)
const cardMaps = new Map()
let i = 0
for (const s of suits) {
  for (let r of ranks) {
    cardMaps.set(r + s, cards[i++])
  }
}
console.log('cardMaps', cardMaps)

export function createCard(card) {
  return cardMaps.get(card)
}