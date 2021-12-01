const { input } = require("./input.js");

// task1

const increasedArray = [];
input.reduce((prev, current) => {
  if (current > prev) {
    increasedArray.push("increased");
  }
  return current;
});

console.log(increasedArray.length);

// task2
const windows = [];
input.reduce((prev, current, idx) => {
  windows.push(prev + current + input[idx + 1]);
  return current;
});

const increasedWindowsArray = [];
windows.reduce((prev, current) => {
  if (current > prev) {
    increasedWindowsArray.push("increased");
  }
  return current;
});

console.log(increasedWindowsArray.length);
