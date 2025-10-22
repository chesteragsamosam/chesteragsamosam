const odds = 1 / 7;

const refreshShop = (pool) => {
  let count = 0;
  for (let i = 0; i < 5; i++) {
    const gotCha = Math.random() < odds;
    if (gotCha) {
      count++;
    }
  }
  return count;
};
const countList = {};
for (let i = 0; i < 1000000; i++) {
  const count = refreshShop();
  if (countList[count]) {
    countList[count]++;
  } else {
    countList[count] = 1;
  }
}

console.log(countList);
