const noOfPeople = 1000;
const maxDrawCount = 3330;

const items = [
  {
    type: '',
    name: '',
  },
];

// 0.0003, 0.0003, 0.0003, 0.0030, 0.0060, 0.0060, 0.0040. 0.0070, 0.0700, 0.9031
// 0.0000, 0.0003, 0.0006, 0.0009, 0.0039, 0.0099, 0.0159, 0.0199. 0.0269, 0.0969
// 0.0003, 0.0006, 0.0009, 0.0039, 0.0099, 0.0159, 0.0199, 0.0269, 0.0969, 1.0000
// 0.0003, 0.0003, 0.0003, 0.0000, 0.0060, 0.0000, 0.0040,
const probabilities = [
  0.0003, 0.0006, 0.0009, 0.0039, 0.0099, 0.0159, 0.0199, 0.0269, 0.0969, 1,
]; // 0.1>0.2>0.3>0.9

let persons = new Array(noOfPeople).fill('').map((_) => {
  return {};
});

for (let i = 0; i < noOfPeople; i++) {
  const data = {};
  const possesed = new Array(probabilities.length).fill(0);
  let timeToDraw = 0;
  let gotten = false;
  for (let d = 0; d < maxDrawCount; d++) {
    const draw = Math.random();
    // const idx = probabilities.findIndex((prob) => draw < prob);
    if (draw < 0.0969) {
      gotten = true;
      break;
    }
    timeToDraw++;
    // possesed[idx]++;
  }
  // persons[i] = possesed;
  persons[i] = gotten ? timeToDraw : '---';
}
console.log('maxDrawCount: ', maxDrawCount);
console.log(persons);
