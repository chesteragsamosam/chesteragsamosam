export const getRandInt = (min, max) => {
  const range = max ? max - min : min;
  const lowBound = max ? min : 0;
  return Math.floor(Math.random() * range) + lowBound;
};

export const lerp = (val_a, min_a, max_a, min_b, max_b) => {
  const perc = (val_a - min_a) / (max_a - min_a);
  const val_b = perc * (max_b - min_b) + min_b;
  return val_b;
};
