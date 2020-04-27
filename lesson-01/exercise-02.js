// Exercise 02: Write a JavaScript program to get removed elements of an given array until the passed function returns true.

const removeIfCondition = (arr, func) => {
  let newArray = [];

  arr.forEach((arrItem) => {
    if (func(arrItem) !== true) {
      newArray.push(arrItem);
    }
  });

  return newArray;
};