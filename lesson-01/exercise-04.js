// Exercise 04: Write a JavaScript program to calculate how many numbers in the given array are less or equal to the given value in percents.

const calcNumbers = (arr, val) => {
  if (arr.length === 0) {
    return 0;
  }

  let count = 0;
  arr.forEach((arrItem) => {
    if (arrItem <= val) {
      count++;
    }
  });

  return count / arr.length * 100
}