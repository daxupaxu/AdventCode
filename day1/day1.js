const { input } = require("./input.js");

// task1

const calculateIncrementalAmount = (arr) => {
  let increasedTimes = 0;
  arr.reduce((prev, current) => {
    if (current > prev) {
      increasedTimes += 1;
    }
    return current;
  });
  return increasedTimes;
};

console.log(calculateIncrementalAmount(input));

// task2
const windows = [];
input.reduce((prev, current, idx) => {
  windows.push(prev + current + input[idx + 1]);
  return current;
});

console.log(calculateIncrementalAmount(windows));
