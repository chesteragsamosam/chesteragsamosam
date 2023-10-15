import { rankOf } from './cards-utils'
import { setOfDeck } from './newCard'

const [stand, hit, double] = ['stand', 'hit', 'double']

const rankToValue = {
  'A': 1,
  '2': 2,
  '3': 3,
  '4': 4,
  '5': 5,
  '6': 6,
  '7': 7,
  '8': 8,
  '9': 9,
  'T': 10,
  'J': 10,
  'Q': 10,
  'K': 10,
}
function evaluateCards (cards) {
  const ranks = cards.map(c => c[0])
  let totals = [ranks.map(r => rankToValue[r]).reduce((a, b) => a + b)]
  if (ranks.includes('A')) {
    if (totals[0] + 10 === 21) return [21]
    if (totals[0] + 10 < 21) totals.push(totals[0] + 10)
  }
  return totals
}
const scenes = [
  ['AD', 'QS'],
  ['AD', '8S'],
  ['AD', 'TS'],
  ['AD', '9S'],
  ['8D', '9S'],
  ['KD', 'JS'],
  ['KD', '9S'],
  ['AD', '4S', '4H'],
  ['AD', '4S', '8H'],
  ['AD', 'QS', '5H'],
  ['AD', '8S', '5H'],
  ['AD', 'TS', '5H'],
  ['AD', '9S', '5H'],
  ['8D', '9S', '5H'],
  ['KD', 'JS', '5H'],
  ['KD', '9S', '5H'],
  ['AD', 'QS', 'AH'],
  ['AD', '8S', 'AH'],
  ['AD', 'TS', 'AH'],
  ['AD', '9S', 'AH'],
  ['8D', '9S', 'AH'],
  ['KD', 'JS', 'AH'],
  ['KD', '9S', 'AH'],
  ['AD', 'AS', 'AH'],
  ['AD', 'AS', 'AH', 'AC'],
  ['AD', 'AS', '8H', 'AC'],
]
function doAction (actions) {
  return actions[Math.floor(Math.random() * actions.length)]
}

const ai1 = (data) => new Promise((res, rej) => {
  const evaluationValue = evaluateCards(data.hand)
  const upcard = data.dealer.upcard
  const deck = new Set(setOfDeck)
  deck.delete(upcard)
  data.hand.forEach(c => {
    deck.delete(c)
  })
  console.log(deck)
  console.log(setOfDeck)
  if (evaluationValue[0] > 21) rej('Already busted')
  if (evaluationValue[0] === 21) {
    res('stand')
  } else {
    res('hit')
  }
})
function doAllScenes (func) {
  console.log('doing all scenes')
  scenes.forEach(async cards => {
    console.log(cards, func(cards))
  });
}
function randomInt (l) {
  return Math.floor(Math.random() * l)
}
function getDealerEvalBasedOnUpCard (upcard, playerHand = []) {
  const deck = new Set(setOfDeck)
  const dealerCards = [upcard]
  deck.delete(upcard)
  if (playerHand.length) {
    playerHand.forEach(c => deck.delete(c))
  }
  const deckArray = new Array(...deck)
  while (Math.max(...evaluateCards(dealerCards)) < 17) {
    const randCard = deckArray.splice(randomInt(deckArray.length), 1)[0]
    dealerCards.push(randCard)
  }
  const result = Math.max(...evaluateCards(dealerCards))
  return result
}

const noOfSimulation = 10000
const newCard = ['AS', '2S', '3S', '4S', '5S', '6S', '7S', '8S', '9S', 'TS', 'QS', 'JS', 'KS']
const prob = {}
newCard.forEach(upcard => {
  let res = 0;
  for (let i = 0; i < noOfSimulation; i++) {
    res += getDealerEvalBasedOnUpCard(upcard)
  }
  prob[upcard] = res / noOfSimulation
})
console.log(prob)

doAllScenes(evaluateCards)
ai1({
  hand: ['AS', '7D', '3H'],
  dealer: { upcard: 'QS' }
}).catch(_ => _)

const cmd = ['Stand', 'Hit', 'Double']

export default {
  evaluateCards
}