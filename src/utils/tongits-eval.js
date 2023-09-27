
import { createCard } from "./newCard"
const rankValue = new Map([
  ["A", 1],
  ["2", 2],
  ["3", 3],
  ["4", 4],
  ["5", 5],
  ["6", 6],
  ["7", 7],
  ["8", 8],
  ["9", 9],
  ["10", 10],
  ["J", 10],
  ["Q", 10],
  ["K", 10],
])
const sorted = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
function rankOf(card) {
  return card.rank.abbrn
}
function suitOf(card) {
  return card.suit.unicode
}
function areConsecutiveRanks(cards) {
  const rankValues = {
    'A': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10, 'J': 11, 'Q': 12, 'K': 13,
  }
  const numericRanks = cards.map(rankOf).map(card => rankValues[card])
  const sortedRanks = numericRanks.slice().sort((a, b) => a - b)
  for (let i = 1; i < sortedRanks.length; i++) {
    if (sortedRanks[i] !== sortedRanks[i - 1] + 1) {
      return false;
    }
  }
  return true;
}
function areSameRanks(cards) {
  if (!cards) return false
  for (let i = 0; i < cards.length - 1; i++) {
    if (rankOf(cards[i]) != rankOf(cards[i + 1])) {
      return false
    }
  }
  return true
}

function areSameSuits(cards) {
  if (!cards) return false
  for (let i = 0; i < cards.length - 1; i++) {
    if (suitOf(cards[i]) != suitOf(cards[i + 1])) {
      return false
    }
  }
  return true
}

function isStraight(cards) {
  if (cards.length < 3) return false
  if (areSameSuits(cards) === false) return false
  return areConsecutiveRanks(cards)
}

export function isThreeOfAKind(cards) {
  if (cards.length === 3) {
    return areSameRanks(cards)
  } return false
}

export function isFourOfAKind(cards) {
  if (cards.length === 4) {
    return areSameRanks(cards)
  } return false
}

const cardsEval = (cards) => {
  return createCard('10S')
}
console.log()
console.log('hahahaha', isThreeOfAKind((['AD', 'AS', 'AH'].map(createCard))))
console.log('hahahaha', isThreeOfAKind((['AD', 'AS', 'AH'].map(createCard))))
console.log('hahahaha', isThreeOfAKind((['2D', 'AS', 'AH'].map(createCard))))
console.log('areSameSuits', areSameSuits((['2D', 'AS', 'AH'].map(createCard))))
console.log('areSameSuits', areSameSuits((['3D', '3S', '3H'].map(createCard))))
console.log('areSameSuits', areSameSuits((['4D', '2D', '3D', '10D', 'JD', 'KD'].map(createCard))))
console.log('areSameSuits', areSameSuits((['4D', '2D', '3D', '10C', 'JD', 'KS'].map(createCard))))
console.log('isStraight', isStraight((['4D', '2D', '3D', '10C', 'JD', 'KS'].map(createCard))))
console.log('isStraight', isStraight((['4D', '2D', '3D', '10D', 'JD', 'KD'].map(createCard))))
console.log('isStraight', isStraight((['4D', '2D', '3D', '10C', 'JD', 'KS'].map(createCard))))
console.log('isStraight', isStraight((['4D', '2D', '3D', '5D', '6D', 'AD'].map(createCard))))