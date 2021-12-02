import { data } from "./input.js";

// task1
const startPos = {
  depth: 0,
  horizontal: 0,
};
data.forEach((item) => {
  const i = item.split(":");
  const k = i[0];
  const v = parseInt(i[1], 10);
  switch (k) {
    case "forward":
      startPos.horizontal += v;
      break;
    case "up":
      startPos.depth -= v;
      break;
    case "down":
      startPos.depth += v;
      break;
    default:
      return null;
  }
});

console.log(startPos);

// task2

const newPos = {
  depth: 0,
  horizontal: 0,
  aim: 0,
};
data.forEach((item) => {
  const i = item.split(":");
  const k = i[0];
  const v = parseInt(i[1], 10);
  switch (k) {
    case "forward":
      {
        newPos.horizontal += v;
        newPos.depth += newPos.aim * v;
      }

      break;
    case "up":
      newPos.aim -= v;
      break;
    case "down":
      newPos.aim += v;
      break;
    default:
      return null;
  }
});

console.log(newPos);
