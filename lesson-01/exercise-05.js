// Exercise 05: Write a JavaScript program that will return 1 if the array is sorted in ascending order, -1 if it is sorted in descending order or 0 if it is not sorted.

const isSorted = (arr) => {
  let arrSortedAsc = arr.slice();
  let arrSortedDesc = arr.slice();

  arrSortedAsc.sort();
  arrSortedDesc.sort((a, b) => b -a);

  let correctAsc = 1;
  let correctDesc = 1;
  console.log(arr);
  console.log(arrSortedAsc);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arrSortedAsc[i] && correctAsc === 1) {
      correctAsc = 0;
    }

    if (arr[i] !== arrSortedDesc[i] && correctDesc === 1) {
      correctDesc = 0;
    }
  }

  if (correctAsc === 1) {
    return 1;
  }

  if (correctDesc === 1) {
    return -1;
  }

  return 0;

};