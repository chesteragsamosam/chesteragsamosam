export function rankOf(card) {
  return card.rank.abbrn
}
export function suitOf(card) {
  return card.suit.unicode
}

export function areConsecutiveRanks(cards, sortRules) {

  const sorted = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "T", "J", "Q", "K"]
  const numericRanks = cards.map(rankOf).map(r => sorted.indexOf(r))
  const sortedRanks = numericRanks.slice().sort((a, b) => a - b)
  for (let i = 1; i < sortedRanks.length; i++) {
    if (sortedRanks[i] !== sortedRanks[i - 1] + 1) {
      return false;
    }
  }
  return true;
}
export function areSameRanks(cards) {
  if (!cards) return false
  for (let i = 0; i < cards.length - 1; i++) {
    if (rankOf(cards[i]) != rankOf(cards[i + 1])) {
      return false
    }
  }
  return true
}

export function areSameSuits(cards) {
  if (!cards) return false
  for (let i = 0; i < cards.length - 1; i++) {
    if (suitOf(cards[i]) != suitOf(cards[i + 1])) {
      return false
    }
  }
  return true
}

export function areStraight(cards) {
  if (cards.length < 3) return false
  return areConsecutiveRanks(cards)
}

export function areStraightAndSameSuit(cards) {
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