import { createCard } from './newCard';
import { isThreeOfAKind, areSameSuits, areStraight } from './cards-utils';

const rankValue = new Map([
  ['A', 1],
  ['2', 2],
  ['3', 3],
  ['4', 4],
  ['5', 5],
  ['6', 6],
  ['7', 7],
  ['8', 8],
  ['9', 9],
  ['10', 10],
  ['J', 10],
  ['Q', 10],
  ['K', 10],
]);
export const sorted = [
  'A',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  'J',
  'Q',
  'K',
];

const cardsEval = (cards) => {
  return createCard('10S');
};

console.log('hahahaha', isThreeOfAKind(['AD', 'AS', 'AH'].map(createCard)));
console.log('hahahaha', isThreeOfAKind(['AD', 'AS', 'AH'].map(createCard)));
console.log('hahahaha', isThreeOfAKind(['2D', 'AS', 'AH'].map(createCard)));
console.log('areSameSuits', areSameSuits(['2D', 'AS', 'AH'].map(createCard)));
console.log('areSameSuits', areSameSuits(['3D', '3S', '3H'].map(createCard)));
console.log(
  'areSameSuits',
  areSameSuits(['4D', '2D', '3D', 'TD', 'JD', 'KD'].map(createCard)),
);
console.log(
  'areSameSuits',
  areSameSuits(['4D', '2D', '3D', 'TC', 'JD', 'KS'].map(createCard)),
);
console.log(
  'areStraight',
  areStraight(['4D', '2D', '3D', 'TC', 'JD', 'KS'].map(createCard), 5),
);
console.log(
  'areStraight',
  areStraight(['4D', '2D', '3D', 'TD', 'JD', 'KD'].map(createCard), 5),
);
console.log(
  'areStraight',
  areStraight(['4D', '2D', '3D', 'TC', 'JD', 'KS'].map(createCard), 5),
);
console.log(
  'areStraight',
  areStraight(['4D', '7D', '3D', '5D', '9D', 'AD'].map(createCard), 3),
);
